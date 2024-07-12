"use client"
import React, { useEffect, useState, useRef } from "react";
import "~/styles/header.css";

export const Filler = ({ navHeight, heroHeight }: {navHeight: number, heroHeight: number }) => {
    const [fillHeight, setFillHeight] = useState(0);
    const fillerRef = useRef(null);

    useEffect(() => {
        const updateFillHeight = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const fillerHeight = Math.max(0, heroHeight - scrollTop);
            setFillHeight(fillerHeight +navHeight);
        };

        window.addEventListener('scroll', updateFillHeight);
        updateFillHeight();

        return () => window.removeEventListener('scroll', updateFillHeight);
    }, [heroHeight]);

    return <div ref={fillerRef} className="fill-gap" style={{ height: `${fillHeight}px` }} />;
};
