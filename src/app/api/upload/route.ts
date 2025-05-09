import { NextRequest, NextResponse } from 'next/server';
import { cloudinary } from '@/lib/cloudinary';

// In-memory storage (temporary, resets on serverless function restart)
const uploadedImages: string[] = [];

export async function POST(req: NextRequest) {
    try {
        // Log request start
        console.log('POST /api/upload: Starting image upload');

        const formData = await req.formData();
        const file = formData.get('file') as File;

        if (!file) {
            console.warn('POST /api/upload: No file provided');
            return NextResponse.json({ message: 'No file provided' }, { status: 400 });
        }

        // Log file details
        console.log(`POST /api/upload: File received - Name: ${file.name}, Size: ${file.size}`);

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const fileUri = `data:${file.type};base64,${buffer.toString('base64')}`;

        // Log Cloudinary upload attempt
        console.log('POST /api/upload: Initiating Cloudinary upload');
        const uploadResult = await cloudinary.uploader.upload(fileUri, {
            folder: 'nextjs-uploads',
            resource_type: 'image',
        });

        // Log successful upload
        console.log(`POST /api/upload: Upload successful - URL: ${uploadResult.secure_url}`);

        // Store image URL in memory
        uploadedImages.push(uploadResult.secure_url);

        return NextResponse.json(
            { message: 'Upload successful', imageUrl: uploadResult.secure_url },
            { status: 200 }
        );
    } catch (error: unknown) {
        // Log detailed error
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        const errorStack = error instanceof Error ? error.stack : undefined;
        console.error('POST /api/upload: Error:', {
            message: errorMessage,
            stack: errorStack,
        });
        return NextResponse.json({ message: 'Internal Server Error', error: errorMessage }, { status: 500 });
    }
}

export async function GET() {
    try {
        // Log GET request
        console.log('GET /api/upload: Fetching uploaded images');
        return NextResponse.json({ uploads: uploadedImages }, { status: 200 });
    } catch (error: unknown) {
        // Log error
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        const errorStack = error instanceof Error ? error.stack : undefined;
        console.error('GET /api/upload: Error:', {
            message: errorMessage,
            stack: errorStack,
        });
        return NextResponse.json({ uploads: [] }, { status: 200 });
    }
}