import React from 'react';
import {render, screen} from '@testing-library/react';
import FeatureCard from './FeatureCard';

describe('FeatureCard', () => {
    const mockProps = {
        icon: '🚀',
        title: 'Test Feature',
        description: 'This is a test feature description'
    };

    it('renders the feature card container', () => {
        render(<FeatureCard {...mockProps} />);

        expect(screen.getByTestId('feature-card')).toBeInTheDocument();
    });

    it('displays the correct icon', () => {
        render(<FeatureCard {...mockProps} />);

        expect(screen.getByTestId('feature-icon')).toHaveTextContent('🚀');
    });

    it('displays the correct title', () => {
        render(<FeatureCard {...mockProps} />);

        expect(screen.getByTestId('feature-title')).toHaveTextContent('Test Feature');
    });

    it('displays the correct description', () => {
        render(<FeatureCard {...mockProps} />);

        expect(screen.getByTestId('feature-description')).toHaveTextContent('This is a test feature description');
    });
});
