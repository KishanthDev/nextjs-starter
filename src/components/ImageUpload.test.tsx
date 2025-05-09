import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ImageUpload from './ImageUpload';
import '@testing-library/jest-dom';

// Mock the fetch API
global.fetch = jest.fn() as jest.Mock;

describe('ImageUpload Component', () => {
    beforeEach(() => {
        (fetch as jest.Mock).mockClear();
    });

    it('renders the upload form', () => {
        render(<ImageUpload />);
        expect(screen.getByText(/Choose an image to upload/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Upload Image/i })).toBeInTheDocument();
    });

    it('allows file selection', async () => {
        render(<ImageUpload />);
        const file = new File(['test'], 'test.png', { type: 'image/png' });
        const input = screen.getByLabelText(/Choose an image to upload/i) as HTMLInputElement;

        await userEvent.upload(input, file);

        expect(input.files?.[0]).toBe(file);
        expect(input.files).toHaveLength(1);
    });

    it('disables upload button when no file is selected', () => {
        render(<ImageUpload />);
        const button = screen.getByRole('button', { name: /Upload Image/i });
        expect(button).toBeDisabled();
    });

    it('enables upload button when file is selected', async () => {
        render(<ImageUpload />);
        const file = new File(['test'], 'test.png', { type: 'image/png' });
        const input = screen.getByLabelText(/Choose an image to upload/i);
        const button = screen.getByRole('button', { name: /Upload Image/i });

        await userEvent.upload(input, file);

        expect(button).not.toBeDisabled();
    });

    it('shows loading state during upload', async () => {
        (fetch as jest.Mock).mockImplementationOnce(() =>
            new Promise((resolve) =>
                setTimeout(() => resolve({
                    ok: true,
                    json: () => Promise.resolve({ imageUrl: 'test-url' })
                }), 100)
            )
        );

        render(<ImageUpload />);
        const file = new File(['test'], 'test.png', { type: 'image/png' });
        const input = screen.getByLabelText(/Choose an image to upload/i);
        const button = screen.getByRole('button', { name: /Upload Image/i });

        await userEvent.upload(input, file);
        fireEvent.click(button);

        expect(screen.getByText(/Uploading.../i)).toBeInTheDocument();
        expect(button).toBeDisabled();
    });

    it('handles successful upload and displays image', async () => {
        const mockResponse = { imageUrl: 'http://example.com/image.jpg' };
        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve(mockResponse)
        });

        render(<ImageUpload />);
        const file = new File(['test'], 'test.png', { type: 'image/png' });
        const input = screen.getByLabelText(/Choose an image to upload/i);
        const button = screen.getByRole('button', { name: /Upload Image/i });

        await userEvent.upload(input, file);
        await userEvent.click(button);

        await waitFor(() => {
            expect(screen.getByText(/Uploaded Image:/i)).toBeInTheDocument();
            expect(screen.getByAltText(/Uploaded/i)).toHaveAttribute('src', mockResponse.imageUrl);
        });
    });

    it('handles upload error', async () => {
        (fetch as jest.Mock).mockRejectedValueOnce(new Error('Upload failed'));

        render(<ImageUpload />);
        const file = new File(['test'], 'test.png', { type: 'image/png' });
        const input = screen.getByLabelText(/Choose an image to upload/i);
        const button = screen.getByRole('button', { name: /Upload Image/i });

        await userEvent.upload(input, file);
        await userEvent.click(button);

        await waitFor(() => {
            expect(screen.queryByText(/Uploaded Image:/i)).not.toBeInTheDocument();
        });
    });


    it('resets state after upload', async () => {
        const mockResponse = { imageUrl: 'http://example.com/image.jpg' };
        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve(mockResponse)
        });

        render(<ImageUpload />);
        const file = new File(['test'], 'test.png', { type: 'image/png' });
        const input = screen.getByLabelText(/Choose an image to upload/i);
        const button = screen.getByRole('button', { name: /Upload Image/i });

        await userEvent.upload(input, file);
        await userEvent.click(button);

        await waitFor(() => {
            expect(screen.getByAltText(/Uploaded/i)).toBeInTheDocument();
        });

        const newFile = new File(['test2'], 'test2.png', { type: 'image/png' });
        await userEvent.upload(input, newFile);

        expect(screen.queryByAltText(/Uploaded/i)).not.toBeInTheDocument();
    });

    it('validates file input type', async () => {
        render(<ImageUpload />);
        const input = screen.getByLabelText(/Choose an image to upload/i);
        expect(input).toHaveAttribute('accept', 'image/*');
    });
});