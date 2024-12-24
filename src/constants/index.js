

import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    Aora,
    ta,
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    Docconnect,
    typescript,
    weather
} from "../assets/icons";

export const skills = [
    {
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
        name: "C",
        type: "Programming Language",
    },
    {
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
        name: "C++",
        type: "Programming Language",
    },
    {
        imageUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
        name: "Java",
        type: "Programming Language",
    },

    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        name: "Python",
        type: "Programming Language",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },

    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/appwrite/appwrite-original-wordmark.svg",
        name: "Appwrite",
        type: "Backend",
    }
];

export const experiences = [
    {
        title: "Teaching Assistant - Digital Systems and Microcontrollers",
        company_name: "IIIT-Hyderabad",
        icon: ta,
        iconBg: "#a2d2ff",
        date: "Monsoon 2024",
        points: [
            "Assisted in lab sessions and graded assignments for the Digital Systems and Microcontrollers course.",
            "Provided guidance on digital circuits, microcontroller programming, and embedded systems.",
            "Designed tutorials on assembly language programming, memory management, and peripheral interfacing.",
        ],
    },
    {
        title: "Data Science Experience Program Participant",
        company_name: "Finlatics",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "2024",
        points: [
            "Applied data science tools (Pandas, Numpy, Sklearn) for data analysis and preprocessing.",
            "Analyzed bank subscription data to identify factors influencing term deposits.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Vishnuvarun077',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/sri-vishnuvarun-thorthi/',
    }
];

export const projects = [
    {
        iconUrl: Docconnect,
        theme: 'btn-back-green',
        name: 'DocConnect',
        description: 'Developed DocConnect, a healthcare management system for patients to book and manage appointments with doctors. Implemented features for patient registration, appointment booking, admin management, and SMS notifications.',
        link: 'https://github.com/Vishnuvarun077/DocConnect',
        imageUrl:"https://github.com/Vishnuvarun077/DocConnect/blob/f26cc8e1293d8c3ba11c5acd56d77327614ec16b/Project_banner.png",
        style: {
            icon: {
                width: '90px', 
                height: '90px',
            }
        }
    },
    {
        iconUrl: Aora,
        theme: 'btn-back-yellow',
        name: 'Aora App',
        description: 'Developed Aora App, a mobile application to upload, share, and discover AI-generated videos. Implemented robust authentication and dynamic home screen features for seamless user experience.',
        link: 'https://github.com/Vishnuvarun077/Aora',
        style: {
            icon: {
                width: '90px', 
                height: '90px',
            }
        }
    },
    {
        iconUrl:weather,
        theme : 'btn-back-blue',
        name: 'Weather Insights App',
        description: 'Developed a weather web application that fetches real‐time weatherdata from the OpenWeatherMap API and presentsit in a userfriendlyinterface. Implemented features like search, geolocation, unit conversion, and dark mode. Used React for the frontend, managed state with React hooks, and leveraged Framer Motion for animations.',
        link: 'https://github.com/Vishnuvarun077/Weather_Insights',
    },
    
    {
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
        theme: 'btn-back-blue',
        name: 'Custom Shell Implementation',
        description: 'Developed a custom shell supporting I/O redirection, piping, and multi-command structures. Implemented features like background process management, custom commands, and history tracking.',
        link: 'https://github.com/Vishnuvarun077/SeaShell',
    },
 

    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Connect 4 Multiplayer Game',
        description: 'Developed a multiplayer Connect 4 game using Pygame and socket programming. Implemented client-server architecture, game state synchronization, and animations.',
        link: 'https://github.com/Vishnuvarun077/Connect_4_Multiplayer',
    },

    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Hidden Markov Models for Speech Digit Recognition',
        description: 'Implemented HMMs to recognize spoken digits from audio signals using the Free Spoken Digit Dataset. Extracted MFCC features and trained models for digit recognition. Achieved 96% accuracy on the test set, 50% accuracy on the personal audio dataset and generated detailed classification reports.',
        link: 'https://github.com/Vishnuvarun077/SMAI_Assignments/blob/main/smai-m24-assignments-Vishnuvarun077-main/assignments/5/q3.ipynb',
    },
];