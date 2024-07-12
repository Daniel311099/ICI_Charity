import Link from "next/link";
import React from "react";
import "~/styles/home.css";

// export const Partners: React.FC = () => {
//     return (
//         <>
//             <div className="primary-value-2">
//                 <div className="text-wrapper-22">Partners</div>
//             </div>
//             <p className="here-are-some-of-our">
//                 Here Are Some Of Our Top Partners
//             </p>
//             <div className="frame-6">
//                 <div className="text-wrapper-32">See All</div>
//             </div>
//             <div className="brand-logo">
//                 {/* <AsanaLogoColour className="asana-logo-colour-instance" />
//           <AbstractLogoColour className="abstract-logo-colour-instance" />
//           <AdobeLogoColour className="adobe-logo-colour-instance" />
//           <AirtableLogoColour className="airtable-logo-colour-instance" />
//           <LogitechLogoColour className="logitech-logo-colour-instance" /> */}
//             </div>
//         </>
//     );
// };
export const Partners: React.FC = () => {
    return (
        <div className="partners-section">
            <div className="partners-header">
                <div className="partners-title">Partners</div>
            </div>
            <p className="partners-subtitle">
                Here Are Some Of Our Top Partners
            </p>
            <Link href={"/partners"}>
                <div className="partners-button-container">
                    <div className="button-text">See All</div>
                </div>
            </Link>
            <div className="partners-logo-container">
                {/* Replace with actual logo images */}
                <img src="/path/to/asana-logo.png" alt="Asana" />
                <img src="/path/to/abstract-logo.png" alt="Abstract" />
                <img src="/path/to/adobe-logo.png" alt="Adobe" />
                <img src="/path/to/airtable-logo.png" alt="Airtable" />
                <img src="/path/to/logitech-logo.png" alt="Logitech" />
            </div>
        </div>
    );
};
