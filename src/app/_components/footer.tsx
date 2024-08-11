// components/Footer.tsx
import React from "react";
import YouTubeIcon from "../../assets/youtube.png";
import FacebookIcon from "../../assets/facebook.png";
import TwitterIcon from "../../assets/twitter.png";
import InstagramIcon from "../../assets/instagram.png";
import LinkedInIcon from "../../assets/linkedin.png";
import "~/styles/footer.css";
import Link from "next/link";
import logo from "../../assets/Logo.png"

// export const Footer: React.FC = () => {
//     return (
//         <footer className="footer">
//           <div className="overlap">
//             <div className="rectangle" />
//             <div className="group">
//               <div className="group-2">
//                 <div className="group-wrapper">
//                   <div className="group-3">
//                     <div className="text-wrapper">Foundation</div>
//                     <p className="donate-about-us">
//                       Donate&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                       About Us
//                       <br />
//                       Impact&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FAQs
//                       <br />
//                       Terms / Privacy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Help
//                       center
//                       <br />
//                       Contact
//                       us&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                       Partners
//                     </p>
//                   </div>
//                 </div>
//                 <div className="div-wrapper">
//                   <div className="overlap-group-wrapper">
//                     <div className="overlap-group">
//                       <div className="overlap-2">
//                         <div className="text-wrapper-2">Subscribe</div>
//                       </div>
//                       <div className="text-wrapper-3">Enter Your Email</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="social-icons">
//                 {/* <Youtube className="icon-jam-icons" color="white" />
//                 <Facebook className="icon-jam-icons" />
//                 <Twitter className="icon-jam-icons" color="white" />
//                 <Instagram className="icon-jam-icons" color="white" />
//                 <Linkedin className="icon-jam-icons" color="white" /> */}
//               </div>
//               <div className="text-wrapper-4">Join Us And ...</div>
//             </div>
//             <div className="overlap-wrapper">
//               <div className="overlap-3">
//                 <div className="group-4">
//                   <div className="text-wrapper-5">Subscribe to our newsletter</div>
//                   <img className="line" alt="Line" src="line-250.svg" />
//                   <img className="img" alt="Line" src="line-249.svg" />
//                   <p className="p">© Copyright 2022 – estac – All Rights Reserved.</p>
//                 </div>
//                 <img className="image" alt="Image" src="image-4.png" />
//               </div>
//             </div>
//             <div className="ellipse" />
//           </div>
//         </footer>
//     );
// };

export const Footer: React.FC = () => {

    const links = [
        {
            title: "Donate",
            url: "/donate"
        }, 
        {
            title: "About Us",
            url: "/aboutUs"
        },
        {
            title: "Campaigns",
            url: "/campaigns"
        },
        {
            title: "FAQs",
            url: "/faqs"
        },
        {
            title: "Terms / Privacy",
            url: "/"
        },
        {
            title: "Help Center",
            url: "/"
        },
        {
            title: "Contact Us",
            url: "/contact"
        },
        {
            title: "Partners",
            url: "/partners"
        }
    ]

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-section-top">
                        {/* <div
                            style={{
                                width: 304,
                                height: 98,
                                background: "#D9D9D9",
                                borderRadius: 9999,
                            }}
                        /> */}

                        <div className="logo-container">
                            <Link href={"/"}>
                                <img
                                    src={logo.src}
                                    alt="Logo"
                                    className="logo"
                                />
                            </Link>
                        </div>
                        <div className="footer-section subscribe">
                            <h4>Subscribe to our newsletter</h4>
                            {/* <form>
                                <input
                                    type="email"
                                    placeholder="Enter Your Email"
                                />
                                <button type="submit">Subscribe</button>
                            </form> */}
                            <div className="subscribe-form">
                                <input
                                    type="email"
                                    placeholder="Enter Your Email"
                                    className="subscribe-input"
                                />
                                <button className="subscribe-button">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            width: 753,
                            height: 0,
                            border: "1px #FAF5E4 solid",
                        }}
                    ></div>
                    <div className="footer-section-middle">
                        <div className="footer-section social">
                            <h4>Join Us And ...</h4>
                            <div className="social-icons">
                                {/* Icons can be included here */}
                                <span className="icon youtube"></span>
                                <span className="icon facebook"></span>
                                <span className="icon twitter"></span>
                                <span className="icon instagram"></span>
                                <span className="icon linkedin"></span>
                            </div>
                        </div>
                        <div className="footer-section"></div>
                        <div className="footer-section foundation">
                            <h4>Foundation</h4>
                            <div className="section-full">
                                <div className="section-half">
                                    {links.slice(0, 4).map((link, index) => (
                                        <Link key={index} href={link.url}>
                                            <p>{link.title}</p>
                                        </Link>
                                    ))}
                                </div>
                                <div className="section-half">
                                    {links.slice(4, 8).map((link, index) => (
                                        <Link key={index} href={link.url}>
                                            <p>{link.title}</p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        width: 1140,
                        height: 0,
                        border: "1px #FAF5E4 solid",
                    }}
                ></div>
                <div className="footer-bottom">
                    <p>© Copyright 2022 – estac – All Rights Reserved.</p>
                    <div className="payment-methods">
                        {/* Payment icons can be included here */}
                        <span className="icon stripe"></span>
                        <span className="icon visa"></span>
                        <span className="icon paypal"></span>
                        <span className="icon amex"></span>
                        <span className="icon mastercard"></span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
