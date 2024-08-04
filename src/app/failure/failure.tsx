import React from "react";
import Link from "next/link";

// export const runtime = "experimental-edge"

const Failure: React.FC = () => {
    return (
        <div className="payment-status-page">
            <h1>Payment Failed</h1>
            <p>Unfortunately, your payment could not be processed. Please try again or contact support if the issue persists.</p>
            <Link href="/">
                <button className="back-button">Go to Home</button>
            </Link>
        </div>
    );
};

export default Failure;
