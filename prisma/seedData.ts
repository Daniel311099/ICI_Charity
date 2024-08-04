export const pages = [
    { name: 'home', slug: 'home', title: 'Home', status: 'published', url: '/home' },
    { name: 'donate', slug: 'donate', title: 'Donate', status: 'published', url: '/donate' },
    { name: 'about', slug: 'about', title: 'About Us', status: 'published', url: '/about' },
    { name: 'contact', slug: 'contact', title: 'Contact', status: 'published', url: '/contact' },
    { name: 'partners', slug: 'partners', title: 'Partners', status: 'published', url: '/partners' },
    { name: 'feedback', slug: 'feedback', title: 'Feedback', status: 'published', url: '/feedback' },
    { name: 'myaccount', slug: 'myaccount', title: 'My Account', status: 'published', url: '/myaccount' },
    { name: 'paymentsuccess', slug: 'paymentsuccess', title: 'Payment Success', status: 'published', url: '/paymentsuccess' },
    { name: 'paymentfailed', slug: 'paymentfailed', title: 'Payment Failed', status: 'published', url: '/paymentfailed' },
];

export const sections = [
    {
        title: 'About Us',
        content: [
            {
                title: "About Us",
                content: `Welcome to our charity – a beacon of hope and empowerment for people with disabilities across the United Kingdom. Our charity thrives on the dedication of diverse volunteers, each with unique life experiences. Together, we share a common mission: to empower and support individuals with disabilities.
                Our team of professionals delivers tailored support services, including personalized support plans, counselling therapy, and life skills coaching. 
                We’re committed to enhancing the lives of those we serve.`,
            },
            {
                title: "Mission",
                content: "Our mission is simple yet profound, to create a more inclusive and equitable world where every individual, regardless of their abilities, can thrive. To support priority challenges and elevate the health and life experiences of people with disabilities, fostering an environment of personal growth, inclusion, and empowerment.",
            }
        ]
    },
    {
        title: 'What we do',
        content: [
            {
                title: 'Advocacy & Awareness',
                content: 'Campaigning for the rights and inclusion of people with disabilities in all areas of society.',
            },
            {
                title: 'Support Services',
                content: 'Offering personalized support plans, including therapy, counselling, and life skills training.',
            },
            {
                title: 'Community Engagement',
                content: 'Building a supportive community through events, workshops, and forums.',
            },
            {
                title: 'Research & Development',
                content: 'Investing in innovative solutions to improve accessibility and independence.',
            },
            {
                title: 'Education & Training',
                content: 'Providing educational resources and training for individuals, families, and professionals.',
            },
            {
                title: 'Mentorship Programs',
                content: 'Through personalised guidance and support, mentors (some of whom have lived experience of disability themselves) volunteer their time, contribute to the personal and professional growth of mentees.',
            },
        ],
    },
    {
        title: 'Get Involved',
        content: [
            {
                title: 'Donate',
                content: 'Your contributions make a direct impact on the lives of individuals with disabilities.',
            },
            {
                title: 'Volunteer',
                content: 'Join our team of dedicated volunteers and make a difference today.',
            },
            {
                title: 'Partner',
                content: 'Collaborate with us to create more opportunities for our community.',
            },
        ],
    },
    {
        title: "Contact Us",
        content: [
            {
                title: "Contact Us",
                content: "Reach out for support, to ask questions, or to join our cause. Together, we can make a world of difference. (Use the contact form)"
            }
        ]
    }
];

export const partners = [
    { name: 'Partner 1', logoUrl: 'https://example.com/logo1.png', website: 'https://example.com', isMajor: true },
    { name: 'Partner 2', logoUrl: 'https://example.com/logo2.png', website: 'https://example.com' },
    // Add more partners as needed
];

export const testimonials = [
    { name: 'Uche', content: 'If only IHI was around during my university days, my journey would have been different. Thanks for making me aware of other opportunities to explore.', date: new Date('2024-01-15') },
    { name: 'Simon', content: 'Thank you IHI for giving me a shoulder to lean on.', date: new Date('2024-03-22') },
    { name: 'Ola James', content: 'The missing jigsaw in my life has been found by IHI. Thanks for representing people like me.', date: new Date('2024-02-10') },
    { name: 'Gary Skyner', content: 'Icon House International is one of a kind. Thank you for lending a hand.', date: new Date('2024-05-05') },
    { name: 'Gabriel O', content: 'I wish Icon House International would grow beyond UK shores because people like me need IHI\'s support all over the world. Thank you.', date: new Date('2024-04-18') },
];


export const impacts = [
    { title: 'Empowering Local Communities', content: 'We provide essential resources and support to help local communities thrive.', iconUrl: 'https://example.com/icon1.png' },
    { title: 'Protecting Our Planet', content: 'Our conservation efforts focus on preserving natural resources and promoting sustainable practices.', iconUrl: 'https://example.com/icon2.png' },
    { title: 'Building Brighter Futures', content: 'Our educational initiatives offer children and adults the tools they need to succeed.', iconUrl: 'https://example.com/icon3.png' },
    { title: 'Responding To Crises', content: 'In times of disaster, we provide immediate relief and long-term support to help communities recover.', iconUrl: 'https://example.com/icon4.png' },
    { title: 'Promoting Health And Well-being', content: 'We offer health services and support to underserved populations.', iconUrl: 'https://example.com/icon5.png' },
    { title: 'Championing Important Causes', content: 'We raise awareness about critical social issues and advocate for policies that promote justice, equality, and positive change.', iconUrl: 'https://example.com/icon6.png' },
];

export const stats = [
    { title: 'People Served', value: '10,000+' },
    { title: 'Funds Raised', value: '$1,000,000+' },
    // Add more stats as needed
];

export const faqs = [
    { question: 'Can anyone contact IHI for support?', answer: 'No, IHI supports only people with any form of disability.' },
    { question: 'Must you be an adult to contact IHI for help?', answer: 'As long as you have a disability (visible or invisible), you can contact IHI for help. However, if you are under the age of 18 years, your parents or guardian will be required to contact IHI on your behalf.' },
    { question: 'Do you provide all the support and services for disabled people who contact you?', answer: 'The support and services that IHI provides are based on the wide network of collaborations with our partners and other charities.' },
    { question: 'Can anyone join IHI as a volunteer?', answer: 'Yes, we welcome everyone interested to join IHI as long as you are 18 years or older. Please complete the contact form on the website to confirm your interest.' },
    { question: 'How would IHI handle a request from a disabled person asking for support in a nationwide campaign?', answer: 'IHI will consider each request according to its merit and would act appropriately for the benefit of the disabled person or group.' },
    { question: 'What services does your charity provide?', answer: 'Our charity offers a wide range of services tailored to the needs of people with disabilities. These include advocacy.' },
    { question: 'How can I get involved as a volunteer?', answer: 'We welcome volunteers who are passionate about making a difference. You can contribute by assisting in events, mentoring individuals with disabilities, or supporting our administrative tasks. Visit our volunteer page for more information.' },
    { question: 'How can I donate to support your cause?', answer: 'Donations are crucial for sustaining our programs. You can contribute online, set up recurring donations, or explore other ways to give back. Every contribution makes a difference!' },
    { question: 'How can I refer someone to your services?', answer: 'If you know someone who could benefit from our programs, encourage them to contact us. We’ll assess their needs and connect them with appropriate resources.' },
];