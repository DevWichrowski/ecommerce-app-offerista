import {renderHook, act} from '@testing-library/react-hooks';
import {useFetchCartItemsWithDetails} from './useFetchCartItemsWithDetails';
import {getProductById} from "@/app/api/api";

jest.mock("@/app/api/api", () => ({
    getProductById: jest.fn()
}));

describe('useFetchCartItemsWithDetails', () => {
    it('initially returns an empty array when cart is null', () => {
        const {result} = renderHook(() => useFetchCartItemsWithDetails(null));

        expect(result.current).toEqual([]);
    });

    it('returns an empty array after update when cart is null', async () => {
        const {result, waitForNextUpdate} = renderHook(() => useFetchCartItemsWithDetails(null));

        await act(async () => {
            await waitForNextUpdate({timeout: 100}).catch(() => {
            });
        });

        expect(result.current).toEqual([]);
    });

    it('initially returns an empty array when cart has items', () => {
        const mockCart = {
            products: [
                {productId: 1, quantity: 2},
                {productId: 2, quantity: 1}
            ]
        };

        const {result} = renderHook(() => useFetchCartItemsWithDetails(mockCart));

        expect(result.current).toEqual([]);
    });

    it('fetches product details for each item in the cart', async () => {
        const mockCart = {
            products: [
                {productId: 1, quantity: 2},
                {productId: 2, quantity: 1}
            ]
        };

        const mockProducts = [
            {id: 1, title: 'Product 1', price: 10},
            {id: 2, title: 'Product 2', price: 20}
        ];

        (getProductById as jest.Mock).mockImplementation((id) =>
            Promise.resolve(mockProducts.find(p => p.id === id))
        );

        const {result, waitForNextUpdate} = renderHook(() => useFetchCartItemsWithDetails(mockCart));

        await act(async () => {
            await waitForNextUpdate();
        });

        expect(result.current).toEqual([
            {productId: 1, quantity: 2, product: mockProducts[0]},
            {productId: 2, quantity: 1, product: mockProducts[1]}
        ]);
    });

    it('calls getProductById for the first product', async () => {
        const mockCart = {
            products: [
                {productId: 1, quantity: 2},
                {productId: 2, quantity: 1}
            ]
        };

        (getProductById as jest.Mock).mockResolvedValue({});

        renderHook(() => useFetchCartItemsWithDetails(mockCart));

        await act(async () => {
            await new Promise(resolve => setTimeout(resolve, 0));
        });

        expect(getProductById).toHaveBeenCalledWith(1);
    });

    it('calls getProductById for the second product', async () => {
        const mockCart = {
            products: [
                {productId: 1, quantity: 2},
                {productId: 2, quantity: 1}
            ]
        };

        (getProductById as jest.Mock).mockResolvedValue({});

        renderHook(() => useFetchCartItemsWithDetails(mockCart));

        await act(async () => {
            await new Promise(resolve => setTimeout(resolve, 0));
        });

        expect(getProductById).toHaveBeenCalledWith(2);
    });
});
