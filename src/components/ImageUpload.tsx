'use client';

import { useState } from 'react';

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

        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
                credentials: 'same-origin',
                referrerPolicy: 'no-referrer-when-downgrade'
            });

            if (!response.ok) throw new Error('Upload failed');

            const data = await response.json();
            if (data.imageUrl) {
                setImageUrl(data.imageUrl);
            }
        } catch (error) {
            console.error('Upload error:', error);
        } finally {
            setIsUploading(false);
            setProgress(0);
        }
    };

    return (
        <div className="w-full items-center gap-6 p-6 bg-gray-100 dark:bg-gray-900">
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
                <div className="flex flex-col items-start gap-2">
                    <label htmlFor="file-upload" className="text-gray-700 dark:text-gray-300">
                        Choose an image to upload:
                    </label>
                    <input
                        id="file-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-blue-500 file:text-white hover:file:bg-blue-600"
                        disabled={isUploading}
                        aria-describedby="file-upload-help"
                    />
                    <p id="file-upload-help" className="text-sm text-gray-500 dark:text-gray-400">
                        Select a JPEG, PNG, or GIF image file
                    </p>
                </div>
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
        </div>
    );
};

export default ImageUpload;