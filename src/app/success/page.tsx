import React from "react";
import Layout from "~/app/pageLayout";
import { ComingSoonHero } from "~/app/comingSoon";
// import { ComingSoon } from "~/app/comingSoon";
import "~/styles/globals.css";
import "~/styles/styleguide.css";
import { Hero } from "~/app/_components/hero";
import Success from "./success";

// export const runtime = "edge"

const WrappedComingSoon = (): JSX.Element => {
    const title = "Error!"
    const subheading = "Your donation was not processed successfully."
    return (
        <Layout hero={<Hero title={title} subheading={subheading} />}>
            <Success/>
        </Layout>
    );
};

export default WrappedComingSoon;