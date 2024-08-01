'use client';

import Link from 'next/link';
import {useUser} from "@/contexts/UserContext";
import {useCart} from "@/contexts/CartContext";

const Nav = () => {
    const user = useUser();
    const cart = useCart();

    const itemsCount = cart?.products.reduce((total, item) => total + item.quantity, 0) || 0;

    return (
        <nav data-testid="nav"
             className="sticky top-0 z-10 bg-white shadow-md bg-gradient-to-br from-blue-100 to-purple-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" data-testid="nav-logo" className="text-xl font-bold text-blue-600">
                            FakeShop Inc.
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <Link href="/products" data-testid="nav-products"
                              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                            Products
                        </Link>
                        <Link href="/cart" data-testid="nav-cart"
                              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                            Cart ({itemsCount})
                        </Link>
                        <Link href="/user" data-testid="nav-user"
                              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                            {user?.name.firstname} {user?.name.lastname}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
