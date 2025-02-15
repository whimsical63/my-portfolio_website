export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Lloyd Unabia',
        position: 'Graphic Designer at LAUD Creatives',
        img: 'assets/review1.png',
        review:
            'Working with Laurence was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
];

export const myProjects = [
    {
        title: 'YCDirectory - Startup Pitch Platform for Entrepreneurs',
        desc: 'An innovative platform powered by Next.js 15, designed to help entrepreneurs showcase their startup ideas through virtual pitch competitions. The platform’s sleek and minimalistic design ensures an intuitive and smooth user experience, providing a perfect space for new ideas to thrive.',
        subdesc:
            'This platform integrates cutting-edge technologies such as React 19, Next.js 15, and Sanity to deliver a highly dynamic and scalable web application. The clean, responsive UI is crafted with TailwindCSS and ShadCN, ensuring a polished design across devices. TypeScript enhances the code quality and ensures a reliable, error-free experience, making it the ideal solution for entrepreneurs looking to gain traction in the startup world.',
        href: 'https://yc-directory-final.vercel.app/',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/project-logo1.ico',
        logoStyle: {
            backgroundColor: '#2C2A16', //'#2A1816',
            border: '0.2px solid #4F4A2D', // #36201D',
            boxShadow: '0px 0px 60px 0px #FFB8007D', // #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React.js 19',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'Next.js 15',
                path: 'assets/nextjs.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Sanity',
                path: '/assets/sanity.png',
            },
            {
                id: 5,
                name: 'shadcn',
                path: '/assets/shadcn.png',
            },
            {
                id: 6,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
        ],
    },
    {
        title: 'Fizzi - Soda for Gutsy People (Case Study)',
        desc: 'This case study presents a landing page featuring seamless animations powered by Prismic and GSAP. It highlights interactive 3D models, fluid transitions, and captivating effects, all fine-tuned for optimal performance.',
        subdesc:
            'An immersive and visually striking landing page crafted using Prismic and GSAP, featuring Fizzi, a bold and refreshing soda that inspires you to live gutsy. With smooth animations, interactive 3D models, and dynamic transitions, this project delivers an engaging and high-performance experience, bringing the fearless spirit of Fizzi to life.',
        href: 'https://fizzi-lau.vercel.app/',
        texture: '/textures/project/prismic_vid.mp4',
        logo: '/assets/icon.svg',
        logoStyle: {
            backgroundColor: '#04293A',
            border: '0.2px solid #0A5C7D',
            boxShadow: '0px 0px 80px 10px rgba(7, 89, 133, 0.7)',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'React.js 19',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'Next.js 15',
                path: 'assets/nextjs.png',
            },
            {
                id: 3,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 4,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 5,
                name: 'GSAP',
                path: '/assets/gsap.ico',
            },
            {
                id: 6,
                name: 'Prismic',
                path: '/assets/prismic.png',
            },
        ],
    },
    {
        title: 'Awwwards Winning Website - Inspired by Zentry',
        desc: 'A visually captivating website inspired by Zentry, featuring scroll-triggered animations, geometric transitions, and engaging video storytelling.',
        subdesc:
            'An immersive web experience blending sleek animations, dynamic transitions, and video storytelling, crafted with React, Tailwind CSS, and GSAP for a modern, interactive design.',
        href: 'https://lau-zentry.vercel.app',
        texture: '/textures/project/project2.mp4',
        logo: '/vite.svg',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #2DBFA5',
            boxShadow: '0px 0px 80px 10px rgba(45, 191, 165, 0.7)',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'GSAP',
                path: '/assets/gsap.ico',
            },
        ],
    },
    {
        title: 'Sample Landing Page - Framer Motion Case Study',
        desc: 'This case study showcases a landing page with smooth animations using Framer Motion and GSAP. It includes interactive 3D models, dynamic page transitions, and engaging effects, all optimized for performance.',
        subdesc:
            'See how Framer Motion, GSAP, and 3D models work together to create a fast, interactive landing page with smooth animations and modern effects.',
        href: 'https://la2-landingpage-sample.vercel.app/',
        texture: '/textures/project/project3.mp4',
        logo: '/lama.ico',
        logoStyle: {
            backgroundColor: '#22223b',
            border: '0.2px solid #4a4e69',
            boxShadow: '0px 0px 80px 10px rgba(215, 217, 206, 0.7)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'CSS',
                path: 'assets/css.png',
            },
            {
                id: 3,
                name: 'GSAP',
                path: '/assets/gsap.ico',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
    // {
    //     title: 'CarePulse - Health Management System',
    //     desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
    //     subdesc:
    //         'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
    //     href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
    //     texture: '/textures/project/project7.mp4',
    //     logo: '/assets/project-logo3.png',
    //     logoStyle: {
    //         backgroundColor: '#60f5a1',
    //         background:
    //             'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
    //         border: '0.2px solid rgba(208, 213, 221, 1)',
    //         boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    //     },
    //     spotlight: '/assets/spotlight3.png',
    //     tags: [
    //         {
    //             id: 1,
    //             name: 'React.js',
    //             path: '/assets/react.svg',
    //         },
    //         {
    //             id: 2,
    //             name: 'TailwindCSS',
    //             path: 'assets/tailwindcss.png',
    //         },
    //         {
    //             id: 3,
    //             name: 'TypeScript',
    //             path: '/assets/typescript.png',
    //         },
    //         {
    //             id: 4,
    //             name: 'Framer Motion',
    //             path: '/assets/framer.png',
    //         },
    //     ],
    // },
    // {
    //     title: 'Horizon - Online Banking Platform',
    //     desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
    //     subdesc:
    //         'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
    //     href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
    //     texture: '/textures/project/project4.mp4',
    //     logo: '/assets/project-logo4.png',
    //     logoStyle: {
    //         backgroundColor: '#0E1F38',
    //         border: '0.2px solid #0E2D58',
    //         boxShadow: '0px 0px 60px 0px #2F67B64D',
    //     },
    //     spotlight: '/assets/spotlight4.png',
    //     tags: [
    //         {
    //             id: 1,
    //             name: 'React.js',
    //             path: '/assets/react.svg',
    //         },
    //         {
    //             id: 2,
    //             name: 'TailwindCSS',
    //             path: 'assets/tailwindcss.png',
    //         },
    //         {
    //             id: 3,
    //             name: 'TypeScript',
    //             path: '/assets/typescript.png',
    //         },
    //         {
    //             id: 4,
    //             name: 'Framer Motion',
    //             path: '/assets/framer.png',
    //         },
    //     ],
    // },
    // {
    //     title: 'Imaginify - AI Photo Manipulation App',
    //     desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
    //     subdesc:
    //         'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
    //     href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    //     texture: '/textures/project/project5.mp4',
    //     logo: '/assets/project-logo5.png',
    //     logoStyle: {
    //         backgroundColor: '#1C1A43',
    //         border: '0.2px solid #252262',
    //         boxShadow: '0px 0px 60px 0px #635BFF4D',
    //     },
    //     spotlight: '/assets/spotlight5.png',
    //     tags: [
    //         {
    //             id: 1,
    //             name: 'React.js',
    //             path: '/assets/react.svg',
    //         },
    //         {
    //             id: 2,
    //             name: 'TailwindCSS',
    //             path: 'assets/tailwindcss.png',
    //         },
    //         {
    //             id: 3,
    //             name: 'TypeScript',
    //             path: '/assets/typescript.png',
    //         },
    //         {
    //             id: 4,
    //             name: 'Framer Motion',
    //             path: '/assets/framer.png',
    //         },
    //     ],
    // },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'ADV Management and Consulting Inc.',
        pos: 'System Engineer',
        duration: 'August 2024 - February 2025',
        title: " • Developed an extensive suite of test cases and established detailed system guidelines to achieve full system coverage, proactively identifying potential issues and mitigating risks prior to release.\n" +
            " • Employed a diverse range of testing methodologies, including functional, regression, and performance testing, to detect defects early and uphold high-quality standards across all deliverables.\n" +
            " • Generated and meticulously tracked detailed bug reports, collaborating with development teams to ensure timely and effective resolution, contributing to seamless project progress and software stability.\n" +
            " • Collaborated closely with developers to identify, address, and resolve bugs, contributing to the development of effective testing strategies and maintaining high-quality code standards.",
        icon: '/assets/adv.png',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Accenture',
        pos: 'Associate Software Engineer',
        duration: 'February 2023 - April 2024',
        title: " • Executed system testing of code changes in Agile methodology, resulting in decrease in post-release defects identified during the testing phase.\n" +
            " • Monitored and resolved batch failures in production, reducing downtime and ensuring timely resolution of incident tickets and business requests.\n" +
            " • Collaborated with a cross-functional team to troubleshoot and resolve database performance issues, leading to an improvement in overall system functionality. \n" +
            " • Utilized Oracle SQL to manipulate data effectively, leading to database efficiency and improved understanding of data manipulation techniques.\n" +
            " • Implemented PeopleSoft Application knowledge to streamline processes, resulting in a more efficient workflow and improved system functionality.",
        icon: '/assets/accenture.png',
        animation: 'salute',
    },
    // {
    //     id: 3,
    //     name: 'Notion',
    //     pos: 'Junior Web Developer',
    //     duration: '2019 - 2020',
    //     title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    //     icon: '/assets/notion.svg',
    //     animation: 'clapping',
    // },
];