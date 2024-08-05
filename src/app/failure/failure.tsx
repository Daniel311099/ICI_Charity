import React from 'react';
import Link from 'next/link';
import '~/styles/success.css'; // Use the existing success.css file

const Failure: React.FC = () => {
    return (
        <div className="success-page">
            <div className="success-container">
                <div className="tick-icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-x"
                    >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </div>
                <h1 className="success-title">Payment Failed</h1>
                <p className="success-message">Unfortunately, your payment could not be processed. Please try again or contact support for assistance.</p>
                <div className="success-buttons">
                    <Link href="/donate">
                        <p className="primary-button">Try Again</p>
                    </Link>
                    <Link href="/">
                        <p className="secondary-button">Return to Home</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Failure;