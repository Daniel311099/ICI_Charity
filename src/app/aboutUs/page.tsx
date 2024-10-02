import React from "react";
import Layout from "~/app/pageLayout";
import { ComingSoonHero } from "~/app/comingSoon";
import "~/styles/globals.css";
import "~/styles/styleguide.css";
import { AboutUs } from "./about";
import { Hero } from "../_components/hero";

// // export const runtime = "edge"

const WrappedComingSoon = (): JSX.Element => {
    const title = "Icon House International"
    const subheading = "Empowering Inclusive Futures"
    return (
        <Layout hero={<Hero title={title} subheading={subheading} />}>
            <AboutUs />
        </Layout>
    );
};

export default WrappedComingSoon;