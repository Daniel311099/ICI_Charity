import React from "react";
import Layout from "~/app/pageLayout";
import { ComingSoonHero } from "~/app/comingSoon";
// import { ComingSoon } from "~/app/comingSoon";
import "~/styles/globals.css";
import "~/styles/styleguide.css";
import { Hero } from "~/app/_components/hero";
import { Feedback } from "./feedback";

// export const runtime = "edge"

const WrappedComingSoon = (): JSX.Element => {
    const title = "Have Your Say!"
    const subheading = "Together, We Can Create a Brighter Future for Communities in Need"
    return (
        <Layout hero={<Hero title={title} subheading={subheading} />}>
            <Feedback/>
        </Layout>
    );
};

export default WrappedComingSoon;