"use client";
import Link from "next/link";
import React from "react";
import "~/styles/about.css";
import { api } from "~/trpc/react";

export const AboutUs: React.FC = () => {
    const { data, isLoading } = api.content.getSection.useQuery({
        section: "About Us",
    });

    const getInvolvedReq = api.content.getSection.useQuery({
        section: "Get Involved",
    });

    if (!data) {
        return <div></div>;
    }

    console.log({ data });

    const aboutUs = data.elements.find((el) => el.title === "About Us") || {
        content: "Loading ...",
    };

    const mission = data.elements.find((el) => el.title === "Mission") || {
        content: "Loading...",
    };

    if (!getInvolvedReq.data) {
        return <div></div>;
    }

    const getInvolved = getInvolvedReq.data;

    const helpLink = {
        Donate: "/donate",
        Volunteer: "/contact",
        Partner: "/partners",
    };

    return (
        <div className="about-us-page">
            <div className="about-us">
                <div className="about-us__header">
                    <h2>About Us</h2>
                </div>
                <p className="about-us__content">{aboutUs.content}</p>
            </div>
            <div className="mission">
                <div className="mission-header">
                    <h2>Mission</h2>
                </div>
                <div className="mission-subtitle">
                    <p>{mission.content}</p>
                </div>
            </div>
            {/* <div className="about-us">
                <div className="about-us__header">
                    <h2>Get Involved</h2>
                </div>
                <p className="about-us__content">
                    {getInvolved.elements.map((el) => {
                        return (
                            <div className="get-involved">
                                <div
                                    style={{
                                        fontWeight: "bold",
                                        display: "inline",
                                    }}
                                >
                                    {el.title}:{"    "}
                                </div>
                                {el.content}
                            </div>
                        );
                    })}
                </p>
            </div> */}
            <div className="section">
                <div className="section__header">
                    <h2>Get Involved</h2>
                </div>
                <div className="section__content">
                    {getInvolved.elements.map((el) => (
                        <div className="section__item" key={el.title}>
                            <Link
                                href={
                                    helpLink[
                                        el.title as
                                            | "Donate"
                                            | "Volunteer"
                                            | "Partner"
                                    ]
                                }
                            >
                                <span className="section__item-title">
                                    {el.title}:
                                </span>
                            </Link>
                            <span className="section__item-content">
                                {el.content}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
