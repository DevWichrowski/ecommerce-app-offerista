import React from 'react';
import { render, screen } from '@testing-library/react';
import UserContent from './UserContent';
import { useUser } from "@/contexts/UserContext";

jest.mock("@/contexts/UserContext");

const mockUser = {
    name: { firstname: 'John', lastname: 'Doe' },
    email: 'john.doe@example.com',
    username: 'johndoe',
    phone: '1234567890',
    address: {
        number: '123',
        street: 'Main St',
        city: 'Anytown',
        zipcode: '12345'
    }
};

describe('UserContent', () => {
    beforeEach(() => {
        (useUser as jest.Mock).mockReturnValue(mockUser);
    });

    it('renders the user content container', () => {
        render(<UserContent />);

        expect(screen.getByTestId('user-content')).toBeInTheDocument();
    });

    it('displays the user initials', () => {
        render(<UserContent />);

        expect(screen.getByTestId('user-initials')).toHaveTextContent('JD');
    });

    it('displays the user full name', () => {
        render(<UserContent />);

        expect(screen.getByTestId('user-full-name')).toHaveTextContent('John Doe');
    });

    it('displays the user email', () => {
        render(<UserContent />);

        expect(screen.getByTestId('user-email')).toHaveTextContent('john.doe@example.com');
    });

    it('displays the username', () => {
        render(<UserContent />);

        expect(screen.getByTestId('user-username')).toHaveTextContent('johndoe');
    });

    it('displays the user phone number', () => {
        render(<UserContent />);

        expect(screen.getByTestId('user-phone')).toHaveTextContent('1234567890');
    });

    it('displays the user address', () => {
        render(<UserContent />);

        expect(screen.getByTestId('user-address')).toHaveTextContent('123 Main St, Anytown, 12345');
    });

    it('does not render anything when user is null', () => {
        (useUser as jest.Mock).mockReturnValue(null);

        const { container } = render(<UserContent />);

        expect(container.firstChild).toBeNull();
    });
});
