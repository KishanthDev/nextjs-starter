import { NextRequest, NextResponse } from 'next/server';
import { cloudinary } from '@/lib/cloudinary';

// Define Cloudinary resource type
interface CloudinaryResource {
    public_id: string;
    secure_url: string;
}

interface CloudinaryResourcesResponse {
    resources: CloudinaryResource[];
}

export async function POST(req: NextRequest) {
    try {
        console.log('POST /api/upload: Starting image upload');

        if (!process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET || !process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME) {
            console.error('POST /api/upload: Missing Cloudinary environment variables');
            return NextResponse.json({ message: 'Server configuration error' }, { status: 500 });
        }

        const formData = await req.formData();
        const file = formData.get('file') as File | null;

        if (!file) {
            console.warn('POST /api/upload: No file provided');
            return NextResponse.json({ message: 'No file provided' }, { status: 400 });
        }

        console.log(`POST /api/upload: File received - Name: ${file.name}, Size: ${file.size}, Type: ${file.type}`);

        if (!file.type.startsWith('image/')) {
            console.warn('POST /api/upload: Invalid file type');
            return NextResponse.json({ message: 'Only image files are allowed' }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const fileUri = `data:${file.type};base64,${buffer.toString('base64')}`;

        console.log('POST /api/upload: Initiating Cloudinary upload');
        const uploadResult = await cloudinary.uploader.upload(fileUri, {
            folder: 'nextjs-uploads',
            resource_type: 'image',
        });

        console.log(`POST /api/upload: Upload successful - Public ID: ${uploadResult.public_id}, URL: ${uploadResult.secure_url}`);

        return NextResponse.json(
            {
                message: 'Upload successful',
                imageUrl: uploadResult.secure_url,
                publicId: uploadResult.public_id,
            },
            { status: 200 }
        );
    } catch (error: unknown) {
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
        console.log('GET /api/upload: Fetching uploaded images from Cloudinary');

        // Fetch images from Cloudinary's nextjs-uploads folder
        const result = await cloudinary.api.resources({
            resource_type: 'image',
            type: 'upload', // Specify storage type
            prefix: 'nextjs-uploads', // No trailing slash
            max_results: 100, // Adjust as needed
        }) as CloudinaryResourcesResponse;

        if (!result.resources) {
            console.warn('GET /api/upload: No resources found in nextjs-uploads folder');
            return NextResponse.json({ uploads: [] }, { status: 200 });
        }

        const imageUrls = result.resources.map((resource) => resource.secure_url);

        console.log(`GET /api/upload: Fetched ${imageUrls.length} images:`, imageUrls);

        return NextResponse.json({ uploads: imageUrls }, { status: 200 });
    } catch (error: unknown) {
        const errorMessage =
            error && typeof error === 'object' && 'error' in error && error.error && typeof error.error === 'object' && 'message' in error.error
                ? (error.error as { message: string }).message
                : error instanceof Error
                    ? error.message
                    : 'Unknown error';
        const errorStack = error instanceof Error ? error.stack : undefined;
        console.error('GET /api/upload: Error:', {
            message: errorMessage,
            stack: errorStack,
            rawError: error ? JSON.stringify(error, null, 2) : undefined,
        });
        return NextResponse.json({ uploads: [] }, { status: 200 });
    }
}