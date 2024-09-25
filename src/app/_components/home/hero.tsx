"use client";
import React, { useEffect } from "react";
import "~/styles/hero.css";
import header from "../../../assets/Header.png";
import Link from "next/link";

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
        <div className="hero-wrap">
            {/* <h1 className="logo-text">Icon House International</h1> */}
            <Title />
            <h3 className="subheading">Empowering Inclusive Futures</h3>
            <div className="hero home-hero">
                <div>
                    <p className="heading">Join Us In Making A Difference</p>
                    <p className="subheading">
                        Together, We Can Create a Brighter Future for
                        Communities in Need
                    </p>
                    <div className="buttons">
                        <Link href={"/donate"}>
                            <div className="primary-button">Donate Now</div>
                        </Link>
                        <Link href={"/aboutUs"}>
                            <div className="secondary-button">Learn More</div>
                        </Link>
                    </div>
                </div>
                <div className="hero-image-container">
                    <img
                        src={header.src}
                        alt="Hero Image"
                        className="hero-image"
                    />
                </div>
            </div>
        </div>
    );
};

export function Title() {
    const title = "Icon House International";
    return (
        <h1 className="logo-text">
            {title.split(" ").map((word) => {
                return (
                    <>
                        <span className="red-letter">{word[0]}</span>
                        {word.slice(1)}&nbsp;
                    </>
                );
            })}
        </h1>
    );
}
