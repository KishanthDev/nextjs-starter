// tests/image-upload.spec.ts
import { test, expect } from '@playwright/test';

test.describe('ImageUpload Component', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3000/file-upload'); // Adjust URL to your test environment
    });

    test('should render the upload form', async ({ page }) => {
        await expect(page.getByText('Choose an image to upload:')).toBeVisible();
        await expect(page.getByRole('button', { name: 'Upload Image' })).toBeVisible();
        await expect(page.getByText('Select a JPEG, PNG, or GIF image file')).toBeVisible();
    });

    test('should disable upload button when no file is selected', async ({ page }) => {
        const uploadButton = page.getByRole('button', { name: 'Upload Image' });
        await expect(uploadButton).toBeDisabled();
    });

    test('should enable upload button when file is selected', async ({ page }) => {
        // Create a test file
        const fileChooserPromise = page.waitForEvent('filechooser');
        await page.getByLabel('Choose an image to upload:').click();
        const fileChooser = await fileChooserPromise;
        await fileChooser.setFiles({
            name: 'test.png',
            mimeType: 'image/png',
            buffer: Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==', 'base64')
        });

        const uploadButton = page.getByRole('button', { name: 'Upload Image' });
        await expect(uploadButton).toBeEnabled();
    });

    test('should handle upload errors gracefully', async ({ page }) => {
        // Mock failed API response
        await page.route('/api/upload', route => route.fulfill({
            status: 500,
            contentType: 'application/json',
            body: JSON.stringify({ message: 'Upload failed' })
        }));

        // Upload a test file
        const fileChooserPromise = page.waitForEvent('filechooser');
        await page.getByLabel('Choose an image to upload:').click();
        const fileChooser = await fileChooserPromise;
        await fileChooser.setFiles({
            name: 'test.png',
            mimeType: 'image/png',
            buffer: Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==', 'base64')
        });

        await page.getByRole('button', { name: 'Upload Image' }).click();

        // Verify error state (no image displayed)
        await expect(page.getByText('Uploaded Image:')).not.toBeVisible();
    });

    test('should validate file types', async ({ page }) => {
        // Try to upload a non-image file
        const fileChooserPromise = page.waitForEvent('filechooser');
        await page.getByLabel('Choose an image to upload:').click();
        const fileChooser = await fileChooserPromise;
        await fileChooser.setFiles({
            name: 'test.pdf',
            mimeType: 'application/pdf',
            buffer: Buffer.from('test')
        });

        // Verify the file input shows validation error
        const input = page.getByLabel('Choose an image to upload:');
        await expect(input).toHaveJSProperty('files.length', 1);
        // Note: Actual file type validation happens in the API, this just tests the client-side accept attribute
        await expect(input).toHaveAttribute('accept', 'image/*');
    });

    test('should reset state when selecting new file', async ({ page }) => {
        // First upload
        const testImageUrl = 'http://example.com/test.jpg';
        await page.route('/api/upload', route => route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify({ imageUrl: testImageUrl })
        }));

        // Upload first file
        const fileChooserPromise1 = page.waitForEvent('filechooser');
        await page.getByLabel('Choose an image to upload:').click();
        const fileChooser1 = await fileChooserPromise1;
        await fileChooser1.setFiles({
            name: 'test1.png',
            mimeType: 'image/png',
            buffer: Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==', 'base64')
        });
        await page.getByRole('button', { name: 'Upload Image' }).click();
        await expect(page.getByText('Uploaded Image:')).toBeVisible();

        // Select a new file
        const fileChooserPromise2 = page.waitForEvent('filechooser');
        await page.getByLabel('Choose an image to upload:').click();
        const fileChooser2 = await fileChooserPromise2;
        await fileChooser2.setFiles({
            name: 'test2.png',
            mimeType: 'image/png',
            buffer: Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==', 'base64')
        });

        // Verify previous image is cleared
        await expect(page.getByText('Uploaded Image:')).not.toBeVisible();
    });
});