// src/app/not-found.tsx
import React from 'react';
import Link from 'next/link';
import '~/styles/notFound.css';
import Layout from "~/app/pageLayout";
import { ComingSoonHero } from "~/app/comingSoon";
// import { ComingSoon } from "~/app/comingSoon";
import "~/styles/globals.css";
import "~/styles/styleguide.css";
import { Hero } from "~/app/_components/hero";

const NotFound: React.FC = () => {
    return (
        <div className="not-found-container">
            <p className="not-found-description">
                Oops! The page you are looking for does not exist.
            </p>
            <Link href="/">
                <p className="not-found-homeButton">Go to Home</p>
            </Link>
        </div>
    );
};

const WrappedComingSoon = (): JSX.Element => {
    const title = "404 - Page Not Found"
    const subheading = "Sorry, the page you're looking for doesn't exist."
    return (
        <Layout hero={<Hero title={title} subheading={subheading} />}>
            <NotFound/>
        </Layout>
    );
};

export default WrappedComingSoon;