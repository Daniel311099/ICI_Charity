import React from 'react';
import Link from 'next/link';
import '~/styles/success.css'; // Ensure the path to your CSS file is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Success: React.FC = () => {
    return (
        <div className="success-page">
            <div className="success-content">
                <FontAwesomeIcon icon={faCheckCircle} className="checkmark-icon" />

            </div>
            <div className="success-details">
                <p>
                    Your generous donation helps us continue our mission to support communities in need.
                    Thank you for making a difference!
                </p>
                <p>
                    Want to get more involved? Consider sharing our cause with your friends or following us on social media.
                </p>
            </div>
        </div>
    );
};

export default Success;