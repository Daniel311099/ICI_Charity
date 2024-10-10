"use client";
// components/CharityLandingPage.tsx
import React from "react";
import { Footer } from "../footer";
import { FAQ } from "./faqs";
import { Pricing } from "./pricing";
import { Review } from "./review";
import { Impact } from "./impact";
import { Header } from "../header";
import { AboutUs } from "./about";
import { Hero } from "./hero";
import { Partners } from "./partners";
import { Stats } from "./stats";
// import "~/styles/styles.css";
import "~/styles/home.css";

export const Home: React.FC = () => {
  return (
    // <div className="charity-landing-page">
      <>
        {/* <div className="overlap-22">
          <Header />
          <Hero />
        </div> */}
        <AboutUs />
        <Partners />  
        <div className="overlap-4">
          <Impact />
          {/* <Stats /> */}
          <Pricing />
          <Review />
          <FAQ n={3}/>
        </div>
        {/* <Footer /> */}
      </>
    // </div>
  );
};
