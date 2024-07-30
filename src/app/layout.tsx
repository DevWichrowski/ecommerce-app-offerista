import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from "@/app/components/Nav";
import {ReactNode} from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'E-commerce Store',
  description: 'A basic e-commerce application',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: ReactNode
}) {
  return (
      <html lang="en">
      <body className={inter.className}>
      <Nav />
      <main className="mx-auto">
          {children}
      </main>
      </body>
      </html>
  )
}
