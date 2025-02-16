'use client';

import Image from 'next/image';
import {useCart} from "@/contexts/CartContext";
import {useFetchAndMergeCartItemsWithDetails} from "@/hooks/useFetchAndMergeCartItemsWithDetails";
import {useState, useEffect} from 'react';

const CartContent = () => {
    const cart = useCart();
    const cartItemsWithDetails = useFetchAndMergeCartItemsWithDetails(cart);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (cartItemsWithDetails.length > 0) {
            setIsLoaded(true);
        }
    }, [cartItemsWithDetails]);

    const total = cartItemsWithDetails.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

    if (!cart) {
        return null;
    }

    return (
        <div data-testid="cart-content"
             className={`mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-4xl lg:px-8 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <h1 data-testid="cart-title" className="text-3xl font-bold mb-6">Your Shopping Cart</h1>
            {cartItemsWithDetails.length === 0 ? (
                <p data-testid="empty-cart-message">Your cart is empty.</p>
            ) : (
                <>
                    <ul data-testid="cart-items-list" className="divide-y divide-gray-200">
                        {cartItemsWithDetails.map((item) => (
                            <li key={item.productId} data-testid={`cart-item-${item.productId}`} className="py-6 flex">
                                <div
                                    className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                    <Image
                                        src={item.product.image}
                                        alt={item.product.title}
                                        width={96}
                                        height={96}
                                        className="w-full h-full object-center object-cover"
                                    />
                                </div>
                                <div className="ml-4 flex-1 flex flex-col">
                                    <div>
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                            <h3 data-testid={`item-title-${item.productId}`}>{item.product.title}</h3>
                                            <p data-testid={`item-total-price-${item.productId}`}
                                               className="ml-4">${(item.product.price * item.quantity).toFixed(2)}</p>
                                        </div>
                                        <p data-testid={`item-category-${item.productId}`}
                                           className="mt-1 text-sm text-gray-500">{item.product.category}</p>
                                    </div>
                                    <div className="flex-1 flex items-end justify-between text-sm">
                                        <p data-testid={`item-quantity-${item.productId}`}
                                           className="text-gray-500">Qty {item.quantity}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="border-t border-gray-200 py-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Subtotal</p>
                            <p data-testid="cart-subtotal">${total.toFixed(2)}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                        <div className="mt-6">
                            <button
                                data-testid="checkout-button"
                                className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Checkout
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default CartContent;
