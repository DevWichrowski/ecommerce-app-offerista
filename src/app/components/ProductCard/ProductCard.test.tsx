import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductList from "@/app/components/ProductList/ProductList";
import {IProduct} from "@/app/types/product";

jest.mock('../ProductCard/ProductCard', () => {
    return function MockProductCard({ product }: { product: IProduct }) {
        return <div data-testid={`product-card-${product.id}`}>{product.title}</div>;
    };
});

describe('ProductList', () => {
    const mockProducts: IProduct[] = [
        { id: 1, title: 'Product 1', price: 10, image: 'image1.jpg', description: 'desc1', category: 'cat1' },
        { id: 2, title: 'Product 2', price: 20, image: 'image2.jpg', description: 'desc2', category: 'cat2' },
    ];

    it('renders the product list container', () => {
        render(<ProductList products={mockProducts} />);

        expect(screen.getByTestId('product-list')).toBeInTheDocument();
    });

    it('renders correct number of ProductCard components', () => {
        render(<ProductList products={mockProducts} />);

        expect(screen.getAllByTestId(/product-card-/)).toHaveLength(2);
    });

    it('passes correct product to first ProductCard', () => {
        render(<ProductList products={mockProducts} />);

        expect(screen.getByTestId('product-card-1')).toHaveTextContent('Product 1');
    });

    it('passes correct product to second ProductCard', () => {
        render(<ProductList products={mockProducts} />);

        expect(screen.getByTestId('product-card-2')).toHaveTextContent('Product 2');
    });
});
