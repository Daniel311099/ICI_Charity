// components/Pricing.tsx
import Link from "next/link";
import React, { useMemo, useState } from "react";

enum frequency {
    "One Time" = "One Time",
    Monthly = "Monthly",
    Yearly = "Yearly",
}

enum tier {
    Gold = "Gold",
    Silver = "Silver",
    Bronze = "Bronze",
}

export const Pricing: React.FC = () => {
    const [selected, setSelected] = useState<frequency>(frequency.Monthly);
    const [selectedTier, setSelectedTier] = useState<tier>(tier.Silver);

    const bronzeFeatures = [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
        "Feature 6",
        "Feature 7",
    ];
    const silverFeatures = [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
        "Feature 6",
        "Feature 7",
    ];
    const goldFeatures = [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
        "Feature 6",
        "Feature 7",
    ];

    const options = [
        {
            title: frequency["One Time"],
            unit: "One Off",
            cards: [
                {
                    tier: tier.Bronze,
                    value: "25",
                    message: "Bronze Tier"
                },
                {
                    tier: tier.Silver,
                    value: "50",
                    message: "Silver Tier"
                },
                {
                    tier: tier.Gold,
                    value: "100+",
                    message: "Gold Tier"
                },
            ],
        },
        {
            title: frequency.Monthly,
            unit: "/month",
            cards: [
                {
                    tier: tier.Bronze,
                    value: "5",
                    message: "Bronze Tier"
                },
                {
                    tier: tier.Silver,
                    value: "10",
                    message: "Silver Tier"
                },
                {
                    tier: tier.Gold,
                    value: "15+",
                    message: "Gold Tier"
                },
            ],
        },
        {
            title: frequency.Yearly,
            unit: "/year",
            cards: [
                {
                    tier: tier.Bronze,
                    value: "15",
                    message: "Bronze Tier"
                },
                {
                    tier: tier.Silver,
                    value: "25",
                    message: "Silver Tier"
                },
                {
                    tier: tier.Gold,
                    value: "50+",
                    message: "Gold Tier"
                },
            ],
        },
    ] as const;

    const option = useMemo(() => {
        return options.find((option) => {
            return option.title === selected;
        });
    }, [selected, options]);



    return (
        <div className="pricing-section">
            <div className="pricing-header">
                <h2 className="pricing-title">How To Help</h2>
                <div className="pricing-toggle">
                    {options.map((opt) => {
                        return (
                            <button
                                key={opt.title}
                                value={opt.title}
                                onClick={() => {
                                    setSelected(opt.title);
                                }}
                                className={`toggle-button${
                                    selected === opt.title ? " active" : ""
                                }`}
                            >
                                {opt.title}
                            </button>
                        );
                    })}
                </div>
            </div>
            <div className="pricing-cards">
                {option?.cards!.map((card) => {
                    console.log(card.tier, selectedTier)
                    return (
                        <Link href={'/donate'} key={card.tier}>
                            <div
                               
                                className={`pricing-card ${card.tier}${
                                    card.tier === selectedTier ? " highlighted" : ""
                                }`}
                                onClick={() => {setSelectedTier(card.tier)}}
                            >
                                <h3 className="pricing-plan">{card.tier}</h3>
                                <div className="pricing-amount">£{card.value}</div>
                                <div className="pricing-period">{option.unit}</div>
                                <hr className="divider" />
                                <span>{card.message}</span>
                                <ul className="features-list">
                                    {/* {bronzeFeatures.map((feature, index) => (
                                        <li key={index} className="feature-item">
                                            ✔️ {feature}
                                        </li>
                                    ))} */}
                                </ul>
                            </div>
                        </Link>
                    );
                })}
                
            </div>
        </div>
    );
};
