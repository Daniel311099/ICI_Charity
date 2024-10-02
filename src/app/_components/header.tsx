import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getServerAuthSession } from "~/server/auth";
import "~/styles/header.css";
import logo from "../../assets/Logo.png";
import { Filler } from "./Filler";
const links = [
    { name: "Home", url: "/" },
    { name: "Donate", url: "/donate" },
    { name: "About Us", url: "/aboutUs" },
    { name: "Campaigns", url: "/campaigns" },
    { name: "Contact", url: "/contact" },
    { name: "FAQs", url: "/faqs" },
    { name: "Partners", url: "/partners" },
    { name: "Feedback", url: "/feedback" },
];

function StandardHeader({ children }: { children: React.ReactNode }) {
    // return (
    //   <div className="header-container">
    //     <div className="logo-container">
    //       <Link href="/">
    //         <img src="/logo.png" alt="Charity Logo" className="logo" />
    //       </Link>
    //       {/* <div className="logo-text">
    //         <span>
    //           Charity <span className="red-letter">X</span>
    //         </span>
    //       </div> */}
    //     </div>
    //     <nav className="navbar-container">
    //       {links.map((link) => (
    //         <Link key={link.url} href={link.url} className="nav-link">
    //           {link.name}
    //         </Link>
    //       ))}
    //     <AuthButtons />
    //     </nav>
    //     {children}
    //   </div>

    // );

    const navHeight = 60; // Adjust based on your nav bar height
    const heroHeight = 180;
    return (
        <div className="header-container">
            <nav className="navigation-menu">
                <div className="row1">
                    <div className="logo-container">
                        <Link href={"/"}>
                            <img src={logo.src} alt="Logo" className="logo" />
                        </Link>
                    </div>
                    <div className="navbar-container">
                        {links.map((link) => (
                            <div key={link.url} className="nav-link">
                                <Link href={link.url}>{link.name}</Link>
                            </div>
                        ))}
                    </div>
                    <AuthButtons />
                </div>
            </nav>
            {/* <Filler navHeight={navHeight} heroHeight={heroHeight} /> */}
            {children}
        </div>
    );
}
function MobileHeader({ children }: { children: React.ReactNode }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="mobile-header-container">
            <div className="mobile-logo-container">
            <Link href={"/"}>
                            <img src={logo.src} alt="Logo" className="logo" />
                        </Link>
                <div
                    className="menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className="menu-icon">{menuOpen ? "✖" : "☰"}</span>
                </div>
            </div>
            {menuOpen && (
                <div className="mobile-nav-menu">
                    {links.map((link) => (
                        <Link
                            key={link.url}
                            href={link.url}
                            className="mobile-nav-link"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <AuthButtons />
                    {/* <div className="mobile-auth-buttons">
              <div className="button-frame login-frame">Login</div>
              <div className="button-frame signup-frame">Signup</div>
            </div> */}
                </div>
            )}
            {children}
        </div>
    );
}
// export function Header({ children }: { children: React.ReactNode }) {

//     // children is the hero

//     const navHeight = 60; // Adjust based on your nav bar height
//     const heroHeight = 180;
//     return (
//         <div className="header-container">
//             <nav className="navigation-menu">
//                 <div className="row1">
//                     <div className="logo-container">
//                         <Link href={"/"}>
//                             <img src={logo.src} alt="Logo" className="logo" />
//                         </Link>
//                     </div>
//                     <div className="navbar-container">
//                         {links.map((link) => (
//                             <div key={link.url} className="nav-link">
//                                 <Link href={link.url}>{link.name}</Link>
//                             </div>
//                         ))}
//                     </div>
//                     <AuthButtons />
//                 </div>
//             </nav>
//             {/* <Filler navHeight={navHeight} heroHeight={heroHeight} /> */}
//             {children}
//         </div>
//     );
// }

export function Header({ children }: { children: React.ReactNode }) {
    const [isMobile, setIsMobile] = useState(false);

    // Check screen size on component mount and window resize
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => {
            window.removeEventListener("resize", checkScreenSize);
        };
    }, []);

    return isMobile ? (
        <MobileHeader>{children}</MobileHeader>
    ) : (
        <StandardHeader>{children}</StandardHeader>
    );
}

function AuthButtons() {
    const { data: session, status } = useSession();
    return (
        <div className="auth-buttons-container">
            {status === "loading" ? (
                <div className="loading-spinner">Loading...</div>
            ) : session ? (
                <div className="user-dropdown">
                    <span>Logged in as {session.user?.name}</span>
                    <div className="dropdown-content">
                        <Link href="/myAccount">My Account</Link>
                        <Link href="/api/auth/signout">Logout</Link>
                    </div>
                </div>
            ) : (
                <>
                    <Link
                        href="/api/auth/signin"
                        className="button-frame login-frame"
                    >
                        <div className="text-content">Login</div>
                    </Link>
                    <Link
                        href="/lo/api/auth/signin"
                        className="button-frame signup-frame"
                    >
                        <div className="text-content">Signup</div>
                    </Link>
                </>
            )}
        </div>
    );
}
