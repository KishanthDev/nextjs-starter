import ImageUpload from '@/components/ImageUpload';

export default function Page() {
    return (
        <div className="w-full items-center gap-6 p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Upload an Image</h1>
            <ImageUpload />
        </div>
    );
}