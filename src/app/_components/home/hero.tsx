"use client";
import React, { useEffect } from "react";
import "~/styles/hero.css"
import header from "../../../assets/Header.png";

// export const Hero: React.FC = () => {

//     return (
//         <div className="hero">
//             <p className="join-us-in-making-a">
//                 Join Us In Making A Difference
//             </p>
//             <p className="text-wrapper-31">
//                 Together, We Can Create a Brighter Future for Communities in
//                 Need
//             </p>
//             <div className="frame-4">
//                 <div className="frame-5">
//                     <div className="text-wrapper-32">Donate Now!</div>
//                 </div>
//                 <button className="button-2">
//                     <div className="text-wrapper-33">Learn More</div>
//                 </button>
//             </div>
//             <div className="ellipse-8" />
//             <div className="rectangle-7" />
//             <div className="rectangle-8" />
//         </div>
//     );
// };

export const Hero: React.FC = () => {
    return (
        <div className="hero home-hero">
            <div>
                <p className="heading">
                    Join Us In Making A Difference
                </p>
                <p className="subheading">
                    Together, We Can Create a Brighter Future for Communities in Need
                </p>
                <div className="buttons">
                    <div className="primary-button">Donate Now!</div>
                    <div className="secondary-button">Learn More</div>
                </div>
            </div>
            <div className="hero-image-container">
                <img src={header.src} alt="Hero Image" className="hero-image" />
            </div>
        </div>
    );
};
