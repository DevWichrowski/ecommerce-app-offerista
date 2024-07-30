'use client';

import Link from 'next/link';

const Nav = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-xl font-bold text-blue-600">
                            FakeShop Inc.
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <Link href="/products"
                              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                            Products
                        </Link>
                        <Link href="/cart"
                              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                            Cart (0)
                        </Link>
                        <Link href="/login"
                              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
