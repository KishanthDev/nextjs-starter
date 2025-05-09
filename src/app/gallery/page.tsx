import Link from 'next/link';

async function getUploadedImages() {
    const res = await fetch('http://localhost:3000/api/uploads', {
        cache: 'no-store',
    });
    const data = await res.json();
    return data.uploads as string[];
}

export default async function Gallery() {
    const images = await getUploadedImages();

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Image Gallery</h1>
                <Link
                    href="/file-upload"
                    className="inline-block mb-4 text-blue-500 hover:text-blue-700 underline"
                >
                    Back to Upload
                </Link>
                {images.length === 0 ? (
                    <p className="text-gray-600">No images uploaded yet.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {images.map((url, index) => (
                            <div
                                key={index}
                                className="relative overflow-hidden rounded-lg shadow-md"
                            >
                                <img
                                    src={url}
                                    alt={`Uploaded image ${index + 1}`}
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}