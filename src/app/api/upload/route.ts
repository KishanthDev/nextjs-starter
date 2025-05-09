import { NextRequest, NextResponse } from 'next/server';
import { cloudinary } from '@/lib/cloudinary';
import fs from 'fs/promises';
import path from 'path';

const uploadsFilePath = path.join(process.cwd(), 'data', 'uploads.json');

// Ensure the data directory and uploads.json exist
async function initializeUploadsFile() {
    try {
        await fs.access(path.dirname(uploadsFilePath));
    } catch {
        await fs.mkdir(path.dirname(uploadsFilePath), { recursive: true });
    }
    try {
        await fs.access(uploadsFilePath);
    } catch {
        await fs.writeFile(uploadsFilePath, JSON.stringify([]));
    }
}

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json({ message: 'No file provided' }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const fileUri = `data:${file.type};base64,${buffer.toString('base64')}`;

        const uploadResult = await cloudinary.uploader.upload(fileUri, {
            folder: 'nextjs-uploads',
            resource_type: 'image',
        });

        // Initialize uploads file if it doesn't exist
        await initializeUploadsFile();

        // Read existing uploads
        const uploadsData = await fs.readFile(uploadsFilePath, 'utf-8');
        const uploads = JSON.parse(uploadsData) as string[];

        // Append new image URL
        uploads.push(uploadResult.secure_url);
        await fs.writeFile(uploadsFilePath, JSON.stringify(uploads, null, 2));

        return NextResponse.json(
            { message: 'Upload successful', imageUrl: uploadResult.secure_url },
            { status: 200 }
        );
    } catch (error) {
        console.error('Upload error:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}