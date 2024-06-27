import React from "react";
import Layout from "~/app/pageLayout";
import { ComingSoonHero } from "~/app/comingSoon";
import { ComingSoon } from "~/app/comingSoon";
import "../styles/globals.css";
import "~/styles/styleguide.css";
import { Hero } from "~/app/_components/hero";


const WrappedComingSoon = (): JSX.Element => {
    const title = "Contact Us!"
    const subheading = "Together, We Can Create a Brighter Future for Communities in Need"
    return (
        <Layout hero={<Hero title={title} subheading={subheading} />}>
            <ComingSoon />
        </Layout>
    );
};

export default WrappedComingSoon;