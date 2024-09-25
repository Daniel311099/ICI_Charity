// components/Impact.tsx
import React from "react";
import { api } from "~/trpc/react";
import AdvocacyAwarenessSymbol from "~/assets/graphics/Advocacy_Awareness_symbol.png";
import CommunityEngagementSymbol from "~/assets/graphics/Community_Engagement_symbol.png";
import EducationTrainingSymbol from "~/assets/graphics/Education_Training_symbole.png";
import SupportServicesSymbol from "~/assets/graphics/Support_Services_symbol.png";
import MentorshipSymbol from "~/assets/graphics/mentorship_symbol.png";
import ResearchDevelopmentSymbol from "~/assets/graphics/Research_Development_symbol.png";


const icons = {
    "Advocacy & Awareness": AdvocacyAwarenessSymbol.src,
    "Community Engagement": CommunityEngagementSymbol.src,
    "Education & Training": EducationTrainingSymbol.src,
    "Support Services": SupportServicesSymbol.src,
    "Mentorship Programs": MentorshipSymbol.src,
    "Research & Development": ResearchDevelopmentSymbol.src,
} as { [key: string]: string };


export const Impact: React.FC = () => {

    const {data} = api.content.getSection.useQuery({
        section: "What we do",
    })

    if (!data) {
        return <div>Loading...</div>
    }

    const impacts = data.elements

    return (
        <div className="advance-value">
            <div className="group-26">
                <div className="text-wrapper-18">Our Impact</div>
                <div className="group-27">
                    {impacts.map((impact, index) => (
                        <div className="impact-card" key={index}>
                            {/* <div className="impact-icon"></div> */}
                            <img src={icons[impact.title]} alt="icon" className="impact-icon" />
                            <div className="title">{impact.title}</div>
                            <div className="description">{impact.content}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};