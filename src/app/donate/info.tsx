import React from "react";
import "~/styles/donate.css";
import image from "../../assets/Donate.png"

export const DonateIntro: React.FC = () => {
    return (
        <div className="donate-intro">
            <div className="intro-text">
                <h1 className="donate-heading">Get Involved Today</h1>
                <p className="donate-subheading">
                    Your donation helps us provide essential services and
                    support to those in need. Together, we can make a
                    difference.
                </p>
            </div>
            <div className="intro-image">
            <div className="hero-image-container">
                <img src={image.src} alt="Hero Image" className="hero-image" />
            </div>
            </div>
        </div>
    );
};
