import React from 'react';
import {render, screen} from '@testing-library/react';
import Nav from './Nav';
import {useUser} from "@/contexts/UserContext";
import {useCart} from "@/contexts/CartContext";

jest.mock("@/contexts/UserContext");
jest.mock("@/contexts/CartContext");
jest.mock('next/link', () => {
    return ({children, ...props}: { children: React.ReactNode }) => {
        return <a {...props}>{children}</a>;
    }
});

describe('Nav', () => {
    beforeEach(() => {
        (useUser as jest.Mock).mockReturnValue({name: {firstname: 'John', lastname: 'Doe'}});
        (useCart as jest.Mock).mockReturnValue({products: [{quantity: 2}, {quantity: 1}]});
    });

    it('renders the nav container', () => {
        render(<Nav />);

        expect(screen.getByTestId('nav')).toBeInTheDocument();
    });

    it('displays the correct logo text', () => {
        render(<Nav />);

        expect(screen.getByTestId('nav-logo')).toHaveTextContent('FakeShop Inc.');
    });

    it('displays the products link', () => {
        render(<Nav />);

        expect(screen.getByTestId('nav-products')).toHaveTextContent('Products');
    });

    it('displays the cart link with correct item count', () => {
        render(<Nav />);

        expect(screen.getByTestId('nav-cart')).toHaveTextContent('Cart (3)');
    });

    it('displays the user link with correct name', () => {
        render(<Nav />);

        expect(screen.getByTestId('nav-user')).toHaveTextContent('John Doe');
    });
});
