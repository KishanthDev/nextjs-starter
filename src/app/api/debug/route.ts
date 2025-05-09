import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({
        cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'Missing',
        apiKey: process.env.CLOUDINARY_API_KEY ? 'Set' : 'Missing',
        apiSecret: process.env.CLOUDINARY_API_SECRET ? 'Set' : 'Missing',
        presetName: process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME || 'Missing',
    });
}