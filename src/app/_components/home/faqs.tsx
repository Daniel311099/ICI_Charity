// components/FAQ.tsx
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { api } from "~/trpc/react";

const up = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="43"
        viewBox="0 0 20 43"
        fill="none"
    >
        <path
            d="M10.8839 1.11612C10.3957 0.627961 9.60427 0.627961 9.11612 1.11612L1.16116 9.07107C0.67301 9.55922 0.67301 10.3507 1.16116 10.8388C1.64932 11.327 2.44078 11.327 2.92893 10.8388L10 3.76777L17.0711 10.8388C17.5592 11.327 18.3507 11.327 18.8388 10.8388C19.327 10.3507 19.327 9.55922 18.8388 9.07107L10.8839 1.11612ZM8.75 41.598C8.75 42.2883 9.30964 42.848 10 42.848C10.6904 42.848 11.25 42.2883 11.25 41.598L8.75 41.598ZM8.75 2L8.75 41.598L11.25 41.598L11.25 2L8.75 2Z"
            fill="#343434"
        />
    </svg>
);

const down = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="43"
        viewBox="0 0 20 43"
        fill="none"
    >
        <path
            d="M11.25 2C11.25 1.30964 10.6904 0.75 10 0.75C9.30964 0.75 8.75 1.30964 8.75 2L11.25 2ZM9.11611 42.4819C9.60427 42.97 10.3957 42.97 10.8839 42.4819L18.8388 34.5269C19.327 34.0388 19.327 33.2473 18.8388 32.7591C18.3507 32.271 17.5592 32.271 17.0711 32.7591L10 39.8302L2.92893 32.7591C2.44078 32.271 1.64932 32.271 1.16116 32.7591C0.673009 33.2473 0.673008 34.0388 1.16116 34.5269L9.11611 42.4819ZM8.75 2L8.75 41.598L11.25 41.598L11.25 2L8.75 2Z"
            fill="#343434"
        />
    </svg>
);

const HOME = 3;

export const FAQ: React.FC<{ n: number }> = ({ n }) => {
    const [open, setOpen] = useState<number | null>(1);

    const toggleQuestion = (index: number) => {
        setOpen(open === index ? null : index);
    };

    const { data } = api.content.getFaqs.useQuery();

    const faqs = useMemo(() => {
        return data?.slice(0, n) || [];
    }, [data]);

    return (
        <div className="faq">
            <div className="faq-head">
                <div>
                    <h2 className="faq-title">
                        Frequently Asked Questions (FAQ)
                    </h2>
                </div>
                {HOME === n && (
                    <div>
                        <Link href={"/faqs"}>
                            <div className="primary-button">See More</div>
                        </Link>
                    </div>
                )}
            </div>
            <div className="faq-content">
                {faqs.map((faq, idx) => {
                    return (
                        <div
                            key={faq.id}
                            className="faq-item"
                            onClick={() => toggleQuestion(idx)}
                        >
                            <div className="faq-question">
                                <span>{faq.question}</span>
                                {open === idx ? up : down}
                            </div>
                            {open === idx && (
                                <div className="faq-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
