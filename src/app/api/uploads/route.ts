import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const uploadsFilePath = path.join(process.cwd(), 'data', 'uploads.json');

export async function GET() {
    try {
        const uploadsData = await fs.readFile(uploadsFilePath, 'utf-8');
        const uploads = JSON.parse(uploadsData) as string[];
        return NextResponse.json({ uploads }, { status: 200 });
    } catch (error) {
        console.error('Error reading uploads:', error);
        return NextResponse.json({ uploads: [] }, { status: 200 });
    }
}