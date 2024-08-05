import React from 'react';
import Image from 'next/image';
import '~/styles/partners.css';
import Link from 'next/link';

interface PartnerProps {
    name: string;
    logo: string;
    description: string;
    url: string;
}

const Partner: React.FC<PartnerProps> = ({ name, logo, description, url }) => {
    return (
        <div className="partner-card">
            <Link href={url}>
                <div className="partner-logo">
                    <Image src={logo} alt={`${name} logo`} width={100} height={100} />
                </div>
                <div className="partner-details">
                    <h2 className="partner-name">{name}</h2>
                    <p className="partner-description">{description}</p>
                </div>
            </Link>
        </div>
    );
};

export default Partner;