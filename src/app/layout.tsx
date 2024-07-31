import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import {getUser} from "@/app/api/api";
import Nav from "@/app/components/Nav";
import {UserProvider} from "@/contexts/UserContext";

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
    children: React.ReactNode
}) {
    const user = await getUser();

    return (
        <html lang="en">
        <body className={inter.className}>
        <UserProvider user={user}>
            <Nav />
            <main className="mx-auto">
                {children}
            </main>
        </UserProvider>
        </body>
        </html>
    )
}
