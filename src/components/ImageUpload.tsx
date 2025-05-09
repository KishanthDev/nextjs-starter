'use client';

import { useState } from 'react';
import Link from 'next/link';

const ImageUpload = () => {
    const [file, setFile] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState<string>('');
    const [progress, setProgress] = useState<number>(0);
    const [isUploading, setIsUploading] = useState<boolean>(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
            setProgress(0);
            setImageUrl('');
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!file) return;

        setIsUploading(true);
        const formData = new FormData();
        formData.append('file', file);

        const xhr = new XMLHttpRequest();

        xhr.upload.onprogress = (event) => {
            if (event.lengthComputable) {
                const percentComplete = Math.round((event.loaded / event.total) * 100);
                setProgress(percentComplete);
            }
        };

        xhr.onload = () => {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                if (data.imageUrl) {
                    setImageUrl(data.imageUrl);
                } else {
                    console.error('Upload failed:', data.message);
                }
            } else {
                console.error('Upload failed:', xhr.statusText);
            }
            setIsUploading(false);
            setProgress(0);
        };

        xhr.onerror = () => {
            console.error('Upload error');
            setIsUploading(false);
            setProgress(0);
        };

        xhr.open('POST', '/api/upload', true);
        xhr.send(formData);
    };

    return (
        <div className="w-full items-center gap-6 p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Upload an Image</h1>
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-blue-500 file:text-white hover:file:bg-blue-600"
                    disabled={isUploading}
                />
                <button
                    type="submit"
                    disabled={!file || isUploading}
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                    {isUploading ? 'Uploading...' : 'Upload Image'}
                </button>
            </form>

            {isUploading && (
                <div className="w-64 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                        className="bg-blue-500 h-2.5 rounded-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            )}

            {imageUrl && (
                <div className="text-center">
                    <p className="text-gray-700 dark:text-gray-300 mb-2">Uploaded Image:</p>
                    <img
                        src={imageUrl}
                        alt="Uploaded"
                        className="max-w-xs rounded-lg shadow-md"
                    />
                </div>
            )}

            <Link
                href="/gallery"
                className="mt-4 text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline"
            >
                View All Uploaded Images
            </Link>
        </div>
    );
};

export default ImageUpload;