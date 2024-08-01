import React from 'react';

interface Props {
    icon: string;
    title: string;
    description: string;
}

const FeatureCard = ({ icon, title, description }: Props) => {
    return (
        <div data-testid="feature-card" className="bg-white p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <div className="flex flex-col items-center text-center">
                <span data-testid="feature-icon" className="text-4xl mb-4">{icon}</span>
                <h2 data-testid="feature-title" className="mt-4 text-xl font-semibold text-gray-800">{title}</h2>
                <p data-testid="feature-description" className="mt-2 text-gray-600">{description}</p>
            </div>
        </div>
    );
};

export default FeatureCard;
