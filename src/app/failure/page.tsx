// src/app/success/page.tsx
import React from 'react';
import Link from 'next/link';
// import '~/styles/success.css';

const SuccessPage: React.FC = () => {
    return (
        <div className="success-page">
            <div className="success-container">
                <h1 className="success-title">Thank You!</h1>
                <p className="success-message">
                    Your payment was successful. We appreciate your support!
                </p>
                <Link href="/">
                    <a className="success-homeButton">Return to Home</a>
                </Link>
            </div>
        </div>
    );
};

export default SuccessPage;