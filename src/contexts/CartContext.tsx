'use client';

import React, {createContext, ReactNode, useContext} from 'react';
import {ICart} from "@/app/types/cart";

const CartContext = createContext<ICart | null>(null);

export const CartProvider =({ children, cart }: { children: ReactNode; cart: ICart }) => {
    return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
