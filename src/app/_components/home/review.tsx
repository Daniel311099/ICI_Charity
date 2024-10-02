// components/Review.tsx
import React, { useMemo, useState } from "react";
import star from "~/assets/Star.png"
import profile from "~/assets/Profile.png"

// export const testimonials = [
//     {
//         id: 0,
//         name: "John Doe",
//         username: "JD1",
//         content: "This charity has changed my life.",
//         date: new Date("2023-01-01"),
//         rating: 3,
//     },
//     {
//         id: 1,
//         name: "Jane Smith",
//         username: "JS1",
//         content: "I am so grateful for the support.",
//         date: new Date("2023-02-01"),
//         rating: 4,
//     },
//     {
//         id: 2,
//         name: "Jane Doe",
//         username: "JD2",
//         content: "This charity has changed my life again.",
//         date: new Date("2023-01-01"),
//         rating: 5,
//     },
//     // Add more testimonials as needed
// ] as const;

const testimonials = [
    {
        id: 0,
        name: 'Uche',
        content: 'If only IHI was around during my university days, my journey would have been different. Thanks for making me aware of other opportunities to explore.',
        date: new Date('2024-02-15'),
        rating: 5,
        username: 'uche_scholar'
    },
    {
        id: 1,
        name: 'Simon',
        content: 'Thank you IHI for giving me a shoulder to lean on.',
        date: new Date('2024-03-10'),
        rating: 4,
        username: 'simon_hopeful'
    },
    {
        id: 2,
        name: 'Ola James',
        content: 'The missing jigsaw in my life has been found by IHI. Thanks for representing people like me.',
        date: new Date('2024-05-18'),
        rating: 5,
        username: 'ola_jigsaw'
    },
    {
        id: 3,
        name: 'Joy',
        content: 'Icon House International is one of a kind. Thank you for lending a hand.',
        date: new Date('2024-04-25'),
        rating: 5,
        username: 'gary_sky'
    },
    {
        id: 4,
        name: 'Gabriel O',
        content: 'I wish Icon House International would grow beyond UK shores because people like me need IHI\'s support all over the world. Thank you.',
        date: new Date('2024-06-30'),
        rating: 4,
        username: 'gabriel_globe'
    }
]

export const Review: React.FC = () => {
    const [activeId, setActiveId] = useState(2);
    const active = useMemo(() => {
        return testimonials.find((t) => t.id === activeId)
    }, [activeId]);

    if (!active) return <></>

    const inds = [...Array(Math.min(3, testimonials.length))] as const;

    return (
        <div className="review">
            <div className="review-header">
                <h2>Testimonials</h2>
                <p className="review-subtitle">What Others Had To Say</p>
            </div>
            <div className="testimonial-card">
                <div className="testimonial-content">
                    <div className="testimonial-header">
                        <img
                            className="profile-pic"
                            alt="Profile"
                            src={profile.src}
                        />
                        <div>
                            <h3>{active.name}</h3>
                            <p>{active.username}</p>
                        </div>
                    </div>
                    <p className="testimonial-text">{active.content}</p>
                    <p className="testimonial-date">
                        {active.date.toDateString()}
                    </p>
                    <div className="testimonial-rating">
                        {[...Array(active.rating)].map((_, i) => {
                            return (
                                <img
                                    key={i}
                                    className="star"
                                    alt="Star"
                                    src={star.src}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="navigation-arrows">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="117"
                    height="16"
                    viewBox="0 0 47 16"
                    fill="none"
                    onClick={() => {
                        setActiveId((id) => Math.max(id - 1, 0));
                    }}
                >
                    <path
                        d="M0.292893 7.29277C-0.0976311 7.6833 -0.0976311 8.31646 0.292893 8.70698L6.65685 15.0709C7.04738 15.4615 7.68054 15.4615 8.07107 15.0709C8.46159 14.6804 8.46159 14.0473 8.07107 13.6567L2.41421 7.99988L8.07107 2.34302C8.46159 1.9525 8.46159 1.31934 8.07107 0.928811C7.68054 0.538286 7.04738 0.538286 6.65685 0.928811L0.292893 7.29277ZM46 8.99988C46.5523 8.99988 47 8.55217 47 7.99988C47 7.4476 46.5523 6.99988 46 6.99988L46 8.99988ZM1 8.99988L46 8.99988L46 6.99988L1 6.99988L1 8.99988Z"
                        fill="#FAF5E4"
                    />
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="117"
                    height="24"
                    viewBox="0 0 117 24"
                    fill="none"
                    onClick={() => {
                        setActiveId((id) =>
                            Math.min(id + 1, testimonials.length - 1)
                        );
                    }}
                >
                    <path
                        d="M2 10.4999C1.17157 10.4999 0.5 11.1715 0.5 11.9999C0.5 12.8283 1.17157 13.4999 2 13.4999V10.4999ZM116.061 13.0605C116.646 12.4748 116.646 11.525 116.061 10.9392L106.515 1.39328C105.929 0.807489 104.979 0.807489 104.393 1.39328C103.808 1.97906 103.808 2.92881 104.393 3.5146L112.879 11.9999L104.393 20.4852C103.808 21.0709 103.808 22.0207 104.393 22.6065C104.979 23.1923 105.929 23.1923 106.515 22.6065L116.061 13.0605ZM2 13.4999H115V10.4999H2V13.4999Z"
                        fill="#FAF5E4"
                    />
                </svg>
            </div>
            <div className="testimonial-indicators">
                {inds.map((ind, i) => {
                    const idx = testimonials.findIndex((t) => {
                        return t.id === active.id;
                    });
                    // const isActive = !idx || testimonials.length - idx === 1
                    let isActive: boolean;
                    console.log({ idx, i });
                    switch (idx) {
                        case 0:
                            isActive = i === 0;
                            break;
                        case testimonials.length - 1:
                            isActive = testimonials.length - i === 1;
                            break;
                        default:
                            isActive = i === 1;
                    }

                    const act = isActive ? " active" : "";

                    return <div key={i} className={`indicator${act}`}></div>;
                })}
                {/* <div className="indicator active"></div>
                <div className="indicator"></div>
                <div className="indicator"></div> */}
            </div>
        </div>
    );
};
