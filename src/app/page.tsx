import Link from 'next/link';

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-24">
            <h1 className="text-4xl font-bold mb-8">Welcome to our E-commerce Store</h1>
            <Link href="/products" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View Products
            </Link>
        </div>
    );
}
