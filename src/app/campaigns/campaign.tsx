"use client"
import React, { useEffect, useState } from "react";
import "~/styles/campaigns.css"; // Create a CSS file for custom styles
import Access from "~/assets/Access.png" 
import IssuesWithAccessRightsatAirports from "~/assets/IssuesWithAccessRightsatAirports.png"

interface Campaign {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    link: string;
    category: "Community" | "Health" | "Education"
}

const mockCampaigns: Campaign[] = [
    {
        id: "1",
        title: "Access for All",
        description: `
        Let's create a world where everyone can enter buildings, shops, restaurants, and social spaces with ease. Ramps, wider doorways, and elevators make a difference. Together, we can build an inclusive environment where everyone feels welcome.

        Please donate to support this campaign.
         `,
        imageUrl: Access.src,
        link: "/campaigns/1",
        category: "Community"
    },
    {
        id: "2",
        title: "Issues With Access Rights at Airports",
        description: `
        Equal Access for All: Ensuring Dignity and Independence for Disabled Travelers at Airports and Onboard Aircraft. 
        
        #AccessibleAirports
        `,
        imageUrl: IssuesWithAccessRightsatAirports.src,
        link: "/campaigns/2",
        category: "Community"
    }
];

const fetchCampaigns = (): Promise<Campaign[]> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(mockCampaigns), 1000);
    });
};

const CampaignsPage: React.FC = () => {
    const [campaigns, setCampaigns] = useState<Campaign[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
        fetchCampaigns().then((data) => {
            setCampaigns(data);
            setLoading(false);
        });
    }, []);

    const filteredCampaigns = campaigns.filter((campaign) => {
        console.log({campaign, selectedCategory})
        return (
            campaign.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
            (selectedCategory ? campaign.category.toLowerCase() === selectedCategory : true)
        );
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="campaigns-page">
            <h1>Our Campaigns</h1>
            <div className="filters">
                <input
                    type="text"
                    placeholder="Search campaigns..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value="">All Categories</option>
                    <option value="health">Health</option>
                    <option value="education">Education</option>
                    <option value="community">Community</option>
                </select>
            </div>
            <div className="campaigns-list">
                {filteredCampaigns.map((campaign, index) => (
                    <div key={campaign.id} className={`campaign-card ${index % 2 === 0 ? 'campaign-card-reverse' : ''}`}>
                        <div className="campaign-image-container">
                            <img src={campaign.imageUrl} alt={campaign.title} className="campaign-image" />
                        </div>
                        <div className="campaign-details">
                            <h2 className="campaign-title">{campaign.title}</h2>
                            <p className="campaign-description">{campaign.description}</p>
                            {/* <a href={campaign.link} className="campaign-link">Learn More</a> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CampaignsPage;
