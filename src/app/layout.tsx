import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import {getCart, getUser} from "@/app/api/api";
import Nav from "@/app/components/Nav";
import {UserProvider} from "@/contexts/UserContext";
import {CartProvider} from "@/contexts/CartContext";
import {ReactNode} from "react";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'FakeShop Inc. | E-commerce Store',
    description: 'A basic e-commerce application',
    icons: {
        icon: '/favicon.ico',
    },
}

export default async function RootLayout({
                                             children,
                                         }: {
    children: ReactNode
}) {
    const user = await getUser();
    const cart = await getCart();

    return (
        <html lang="en">
        <body className={inter.className}>
        <UserProvider user={user}>
            <CartProvider cart={cart}>
            <Nav />
            <main className="mx-auto">
                {children}
            </main>
            </CartProvider>
        </UserProvider>
        </body>
        </html>
    )
}
