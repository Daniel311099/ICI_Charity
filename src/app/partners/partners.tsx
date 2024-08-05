import React from 'react';
import '~/styles/partners.css';
import Partner from './partner';
import { partnersList } from './partnersList';

const chunkArray = (arr: any[], size: number) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
};

const Partners: React.FC = () => {

    const chunkedPartners = chunkArray(partnersList, 4);


    return (
        <div className="partners-page">
            <h1 className="partners-title">Our Partners</h1>
            {chunkedPartners.map((chunk, chunkIndex) => (
                <div key={chunkIndex} className="partners-list">
                    {chunk.map((partner, index) => (
                        <Partner 
                            key={index} 
                            name={partner.name} 
                            logo={partner.logo} 
                            description={partner.description} 
                            url={partner.url}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Partners;