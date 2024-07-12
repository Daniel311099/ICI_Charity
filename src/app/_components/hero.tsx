import React from "react";
import "~/styles/hero.css";
import { Title } from "./home/hero";

interface props  {
    title: string,
    subheading: string
}

export const Hero: React.FC<props> = ({title, subheading}) => {
    console.log('General Hero');
    return (
        <div className="hero-wrap">
            <div className="hero">
                <div>
                    {
                        title === "Icon House International" ?
                        <Title /> :
                    <p className="heading">{title}</p>
                    }
                    <p className="subheading">
                        {subheading}
                    </p>
                </div>
            </div>
        </div>
    );
};