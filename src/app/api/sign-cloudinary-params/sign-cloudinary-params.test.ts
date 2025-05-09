import { GET } from '@/app/api/sign-cloudinary-params/route';
import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

// Mock the Cloudinary and NextResponse modules
jest.mock('cloudinary', () => ({
    v2: {
        utils: {
            api_sign_request: jest.fn(),
        },
    },
}));

jest.mock('next/server', () => ({
    NextResponse: {
        json: jest.fn(),
    },
}));

describe('GET /api/sign-cloudinary-params', () => {
    beforeEach(() => {
        // Clear all mocks before each test
        jest.clearAllMocks();
        // Set the required environment variable
        process.env.CLOUDINARY_API_SECRET = 'test_secret';
    });

    afterAll(() => {
        // Clean up after all tests
        jest.restoreAllMocks();
    });

    it('should generate a signature and timestamp', async () => {
        // Mock the current timestamp
        const mockTimestamp = Math.round(Date.now() / 1000);
        jest.spyOn(Date.prototype, 'getTime').mockReturnValue(mockTimestamp * 1000);

        // Mock the Cloudinary signature function
        const mockSignature = 'mocked_signature';
        (cloudinary.utils.api_sign_request as jest.Mock).mockReturnValue(mockSignature);

        // Call the GET function
        await GET();

        // Verify Cloudinary was called correctly
        expect(cloudinary.utils.api_sign_request).toHaveBeenCalledWith(
            { timestamp: mockTimestamp },
            'test_secret'
        );

        // Verify NextResponse.json was called with the correct data
        expect(NextResponse.json).toHaveBeenCalledWith({
            signature: mockSignature,
            timestamp: mockTimestamp,
        });
    });

});