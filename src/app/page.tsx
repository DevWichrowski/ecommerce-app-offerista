import React from 'react';
import Link from 'next/link';
import FeatureCard from "@/app/components/FeatureCard/FeatureCard";

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex flex-col items-center justify-center p-8 sm:p-24">
            <h1 className="text-4xl sm:text-6xl font-bold mb-8 text-center text-gray-800 animate-fade-in-down">
                Welcome to Our E-commerce Store
            </h1>

            <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl animate-fade-in-up">
                Discover amazing products at unbeatable prices. Shop now and experience the difference!
            </p>

            <Link href="/products" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg animate-bounce">
                View Products
            </Link>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl w-full">
                <FeatureCard
                    icon="🛒"
                    title="Wide Selection"
                    description="Browse through our vast catalog of products"
                />
                <FeatureCard
                    icon="📈"
                    title="Best Deals"
                    description="Get the best prices on all your favorite items"
                />
                <FeatureCard
                    icon="⭐"
                    title="Top Quality"
                    description="We ensure the highest quality for all products"
                />
            </div>
        </div>
    );
};

export default Home;
