import React from 'react';
import {render, screen} from '@testing-library/react';
import CartContent from './CartContent';
import {useCart} from "@/contexts/CartContext";
import {useFetchAndMergeCartItemsWithDetails} from "@/hooks/useFetchAndMergeCartItemsWithDetails";

jest.mock("@/contexts/CartContext");
jest.mock("@/hooks/useFetchAndMergeCartItemsWithDetails");

describe('CartContent', () => {
    it('renders the cart title when cart is empty', () => {
        (useCart as jest.Mock).mockReturnValue({});
        (useFetchAndMergeCartItemsWithDetails as jest.Mock).mockReturnValue([]);

        render(<CartContent />);

        expect(screen.getByTestId('cart-title')).toHaveTextContent('Your Shopping Cart');
    });

    it('displays the empty cart message when cart is empty', () => {
        (useCart as jest.Mock).mockReturnValue({});
        (useFetchAndMergeCartItemsWithDetails as jest.Mock).mockReturnValue([]);

        render(<CartContent />);

        expect(screen.getByTestId('empty-cart-message')).toHaveTextContent('Your cart is empty.');
    });

    it('renders the cart title when cart has items', () => {
        (useCart as jest.Mock).mockReturnValue({});
        (useFetchAndMergeCartItemsWithDetails as jest.Mock).mockReturnValue([{
            productId: '1',
            quantity: 2,
            product: {
                title: 'Test Product',
                price: 10.99,
                category: 'Test Category',
                image: '/test-image.jpg',
            },
        }]);

        render(<CartContent />);

        expect(screen.getByTestId('cart-title')).toHaveTextContent('Your Shopping Cart');
    });

    it('renders the cart items list when cart has items', () => {
        (useCart as jest.Mock).mockReturnValue({});
        (useFetchAndMergeCartItemsWithDetails as jest.Mock).mockReturnValue([{
            productId: '1',
            quantity: 2,
            product: {
                title: 'Test Product',
                price: 10.99,
                category: 'Test Category',
                image: '/test-image.jpg',
            },
        }]);

        render(<CartContent />);

        expect(screen.getByTestId('cart-items-list')).toBeInTheDocument();
    });

    it('renders the correct cart item when cart has items', () => {
        (useCart as jest.Mock).mockReturnValue({});
        (useFetchAndMergeCartItemsWithDetails as jest.Mock).mockReturnValue([{
            productId: '1',
            quantity: 2,
            product: {
                title: 'Test Product',
                price: 10.99,
                category: 'Test Category',
                image: '/test-image.jpg',
            },
        }]);

        render(<CartContent />);

        expect(screen.getByTestId('cart-item-1')).toBeInTheDocument();
    });

    it('displays the correct item title when cart has items', () => {
        (useCart as jest.Mock).mockReturnValue({});
        (useFetchAndMergeCartItemsWithDetails as jest.Mock).mockReturnValue([{
            productId: '1',
            quantity: 2,
            product: {
                title: 'Test Product',
                price: 10.99,
                category: 'Test Category',
                image: '/test-image.jpg',
            },
        }]);

        render(<CartContent />);

        expect(screen.getByTestId('item-title-1')).toHaveTextContent('Test Product');
    });

    it('displays the correct item total price when cart has items', () => {
        (useCart as jest.Mock).mockReturnValue({});
        (useFetchAndMergeCartItemsWithDetails as jest.Mock).mockReturnValue([{
            productId: '1',
            quantity: 2,
            product: {
                title: 'Test Product',
                price: 10.99,
                category: 'Test Category',
                image: '/test-image.jpg',
            },
        }]);

        render(<CartContent />);

        expect(screen.getByTestId('item-total-price-1')).toHaveTextContent('$21.98');
    });

    it('displays the correct item category when cart has items', () => {
        (useCart as jest.Mock).mockReturnValue({});
        (useFetchAndMergeCartItemsWithDetails as jest.Mock).mockReturnValue([{
            productId: '1',
            quantity: 2,
            product: {
                title: 'Test Product',
                price: 10.99,
                category: 'Test Category',
                image: '/test-image.jpg',
            },
        }]);

        render(<CartContent />);

        expect(screen.getByTestId('item-category-1')).toHaveTextContent('Test Category');
    });

    it('displays the correct item quantity when cart has items', () => {
        (useCart as jest.Mock).mockReturnValue({});
        (useFetchAndMergeCartItemsWithDetails as jest.Mock).mockReturnValue([{
            productId: '1',
            quantity: 2,
            product: {
                title: 'Test Product',
                price: 10.99,
                category: 'Test Category',
                image: '/test-image.jpg',
            },
        }]);

        render(<CartContent />);

        expect(screen.getByTestId('item-quantity-1')).toHaveTextContent('Qty 2');
    });

    it('displays the correct cart subtotal when cart has items', () => {
        (useCart as jest.Mock).mockReturnValue({});
        (useFetchAndMergeCartItemsWithDetails as jest.Mock).mockReturnValue([{
            productId: '1',
            quantity: 2,
            product: {
                title: 'Test Product',
                price: 10.99,
                category: 'Test Category',
                image: '/test-image.jpg',
            },
        }]);

        render(<CartContent />);

        expect(screen.getByTestId('cart-subtotal')).toHaveTextContent('$21.98');
    });

    it('renders the checkout button when cart has items', () => {
        (useCart as jest.Mock).mockReturnValue({});
        (useFetchAndMergeCartItemsWithDetails as jest.Mock).mockReturnValue([{
            productId: '1',
            quantity: 2,
            product: {
                title: 'Test Product',
                price: 10.99,
                category: 'Test Category',
                image: '/test-image.jpg',
            },
        }]);

        render(<CartContent />);

        expect(screen.getByTestId('checkout-button')).toHaveTextContent('Checkout');
    });

    it('does not render anything when cart is null', () => {
        (useCart as jest.Mock).mockReturnValue(null);
        (useFetchAndMergeCartItemsWithDetails as jest.Mock).mockReturnValue([]);

        const {container} = render(<CartContent />);

        expect(container.firstChild).toBeNull();
    });
});
