import { NextResponse } from 'next/server';
import { cloudinary } from '@/lib/cloudinary';

type CloudinaryImage = {
    secure_url: string;
};

export async function GET() {
    try {
        const result = await cloudinary.search
            .expression('folder:nextjs-uploads')
            .sort_by('created_at', 'desc')
            .max_results(30)
            .execute();

        const uploads = (result.resources as CloudinaryImage[]).map((img) => img.secure_url);
        return NextResponse.json({ uploads });
    } catch (error) {
        console.error('Cloudinary fetch error:', error);
        return NextResponse.json({ uploads: [] });
    }
}
