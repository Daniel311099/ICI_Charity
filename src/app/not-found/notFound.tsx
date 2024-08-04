// src/app/not-found.tsx
import React from 'react';
import Link from 'next/link';
import '~/styles/notFound.css';

const NotFound: React.FC = () => {
    return (
        <div className="not-found-container">
            <h1 className="not-found-title">404 - Page Not Found</h1>
            <p className="not-found-description">
                Oops! The page you are looking for does not exist.
            </p>
            <Link href="/">
                <a className="not-found-homeButton">Go to Home</a>
            </Link>
        </div>
    );
};

export default NotFound;