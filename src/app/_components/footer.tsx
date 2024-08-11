import React from "react";
import "~/styles/footer.css";

export const Footer = () => {
    const links_ = [
        { title: "Donate", url: "/donate" },
        { title: "About Us", url: "/aboutUs" },
        { title: "Campaigns", url: "/campaigns" },
        { title: "FAQs", url: "/faqs" },
        { title: "Terms / Privacy", url: "/" },
        { title: "Help Center", url: "/" },
        { title: "Contact Us", url: "/contact" },
        { title: "Partners", url: "/partners" }
    ];

    const splitLinks = (links: typeof links_) => {
        const midpoint = Math.ceil(links.length / 2);
        return [links.slice(0, midpoint), links.slice(midpoint)];
    };

    const [firstColumn, secondColumn] = splitLinks(links_);

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-join-us">
                    <h3>Join Us</h3>
                    <p>Become a part of our community and help make a difference.</p>
                    <button className="join-us-button">Get Involved</button>
                    <div className="newsletter">
                        <input type="email" placeholder="Subscribe to our newsletter" />
                        <button className="subscribe-button">Subscribe</button>
                    </div>
                </div>
                <div className="footer-links">
                    <div className="footer-column">
                        <ul>
                            {firstColumn!.map((link) => (
                                <li key={link.url}>
                                    <a href={link.url}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="footer-column">
                        <ul>
                            {secondColumn!.map((link) => (
                                <li key={link.url}>
                                    <a href={link.url}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="footer-divider" />
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Your Charity. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

