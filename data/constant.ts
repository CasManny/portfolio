export const education = [
  {
    image: "/alx.png",
    title: "ProDev Front-End Development programme",
    description: "Frontend Engineer (React & React Native)",
    year: "2025",
    link: "https://www.alxafrica.com/",
  },
  {
    image: "/jsmastery.png",
    title: "Dev Career Accelerator",
    description: "NextJs Full Stack Developer",
    year: "2024",
    link: "https://www.jsmastery.pro/dev-career-accelerator",
  },
  {
    image: "/school.jpg",
    title: "Akanu Ibiam Federal polytechnic, Nigeria",
    description: "HND Mechanical Engineering",
    year: "2023",
    link: "https://polyunwana.edu.ng/",
  },
  {
    image: "/udemy.svg",
    title: "The Complete Full-Stack Web Development Bootcamp",
    description: "NextJs Full Stack Developer",
    year: "2022",
    link: "https://www.udemy.com",
  },
  {
    image: "/udemy.svg",
    title: "Complete Web & Mobile Designer: UI/UX, Figma, +more",
    description: "Web Designer",
    year: "2022",
    link: "https://www.udemy.com",
  },
];

export const workExperience = [
  {
    image: "/full-blue-bg-small.png",
    title: "Tech Plus Plus",
    role: "Frontend Engineer (Intern)",
    location: "Remote",
    year: "May 2025 - October 2025",
    responsibilities: [
      "Engineered responsive UI components using React, Next.js, and Tailwind CSS, improving page load speed by 28% and reducing layout shift across devices.",
      "Integrated REST APIs to deliver dynamic content and interactive features, boosting user engagement and session duration by 28%.",
      "Translated 15+ Figma mockups - into pixel-perfect, accessible interfaces, increasing design-to-code accuracy and reducing QA revisions by 40%.",
    ],
  },
  {
    image: "/kukeat.png",
    title: "Kukeat - One Stop Shop for Everything Foodstuff",
    location: "Remote",

    role: "Frontend Engineer Intern",
    year: "Dec 2024 - Feb 2025",
    responsibilities: [
      "Implemented SEO best practices including semantic HTML, meta tags, and structured data, boosting organic traffic by 22%.",
      "Redesigned the homepage UI improving layout clarity and call-to-action visibility, which led to a 15% increase in conversion rates.",
      "Integrated Vercel Analytics and Speed Insights to monitor Core Web Vitals and user behavior, driving a 35% improvement in page load speed and reducing bounce rates by 28% through targeted UI optimizations.",
    ],
  },
  {
    image: "/codettribe.jpg",
    title: "CodeTribe",
    location: "Remote",

    role: "Frontend Develoer",
    year: "July 2024 – Nov 2024",
    responsibilities: [
      "Built and optimized the frontend for 6+ client products, enhancing performance and user experience across e-commerce and SaaS platforms.",
      "Implemented SEO best practices and accessibility standards, boosting organic traffic by 22% and improving overall customer satisfaction.",
      "Redesigned key product interfaces, increasing conversion rates by 15% and improving user retention by 18%.",
      "Integrated Vercel Analytics to monitor Core Web Vitals, achieving a 35% faster load speed and reducing bounce rates by 28%.",
    ],
  },
];

export const featuredProjects = [
  {
    title: "coachly",
    name: "Coachly",
    description: "A Video Live streaming platform",
    stack: [
      "NextJs",
      "Typescript",
      "Clerk",
      "getStream",
      "shadcn",
      "Tailwind CSS",
    ],
    startDate: "25/11/2024",
    endDate: "20/11/2024",
    githubLink: "https://github.com/CasManny/coachly",
    website: "https://coachly.vercel.app/",
    details:
      "The Video Connect platform, a live streaming and video conferencing application developed using Next.js and TypeScript, replicates the core functionalities of Zoom. The platform allows users to securely log in, create meetings, and access essential features such as live streaming, recording, screen sharing, and participant management.",
    problem:
      "In today's remote-first world, reliable and secure video conferencing has become a necessity for businesses, educational institutions, and social interactions. However, many video conferencing solutions are either costly, lack customization options, or are limited in features for managing meetings effectively. There is a need for a flexible, secure, and feature-rich platform that allows users to log in securely, create and manage meetings, record sessions, share screens, and manage participants seamlessly. This project addresses this gap by replicating Zoom’s core functionality using the latest Next.js and TypeScript technologies, offering a customizable and modern video conferencing experience.",
    challenges: [
      "Working on a project alone instead of working in a team was a challenging adjustment that I had to make.",
      "Implementing real-time video and audio communication with minimal latency is complex.",
      "Creating functional meeting features like screen sharing, recording, and participant management while ensuring cross-browser compatibility and performance.",
    ],
    learnings: [
      "Leveraged documentation to implement features independently.",
      "Acquired deeper understanding in using the ShadCN component library.",
      "Created dynamic and highly reusable fetching logic by utilising NextJS server actions and React custom hooks.",
    ],
  },
  {
    title: "sbsc-live-collab",
    name: "SBSC Live Collab",
    description: "A Real Time Document Editing tool",
    stack: [
      "NextJs",
      "Typescript",
      "Liveblocks",
      "Shadcn",
      "Clerk",
      "Tailwind CSS",
    ],
    startDate: "5/10/2024",
    endDate: "15/10/2024",
    githubLink: "https://github.com/CasManny/sbsc_live_collab",
    website: "https://sbscollab-doc.vercel.app/",
    details:
      "LiveDocs is a collaborative document editing application inspired by Google Docs, designed to offer real-time editing, seamless collaboration, and an intuitive user experience. Built with Next.js, the platform efficiently handles dynamic rendering and ensures fast, responsive user interfaces across all devices.To power its real-time collaboration features, LiveDocs leverages Liveblocks, enabling multiple users to edit and view changes simultaneously with no noticeable latency. Every keystroke is synchronized in real-time, ensuring a collaborative experience that feels instantaneous.",

    problem:
      "Collaborative document editing is a core feature of many modern productivity tools, but building a robust, real-time editing platform presents several challenges. Beginners often struggle with synchronizing edits across multiple users, handling conflicts, and ensuring low-latency performance. Additionally, securing user authentication and managing proper authorization for document access can lead to vulnerabilities if not implemented correctly. Without proper error handling and state management, users may experience inconsistent document states, data loss, or disruptions during editing. These challenges make it difficult to create a seamless, responsive, and secure collaborative editing experience for all users.",
    challenges: [
      "Managing secure user authentication and ensuring proper authorization for document access.",
      "Multiple users editing the same part of the document simultaneously can cause conflicts.",
    ],
    learnings: [
      "Responsiveness accross all Devices",
      "Handle User authentication using Clerk",
      "Active collaboration on a Text Editor",
    ],
  },
  {
    title: "rockstaddy",
    name: "Rockstaddy",
    description:
      "An Gamified eduational platform for self help and personal development books.",
    stack: [
      "NextJs",
      "Typescript",
      "Drizzle",
      "Convex",
      "NeonDB",
      "zustand",
      "Tailwind CSS",
      "getStream",
    ],
    githubLink: "https://github.com/CasManny/rockstady",
    website: "https://rockstaddy.vercel.app/",
    startDate: "14/09/2024",
    endDate: "28/09/2024",
    details:
      "This gamified educational platform is designed to help readers engage with self-help and personal development books by breaking down content into small, manageable chunks. Through interactive challenges, progress tracking, and rewards, the platform makes reading more fun and motivating. The goal is to enhance learning retention and encourage users to complete books while building sustainable habits for personal growth.",
    problem:
      "Many readers find it challenging to stay engaged with traditional self-help and personal development books due to their length and dense content, leading to boredom and difficulty in retaining information. This often results in unfinished books and missed learning opportunities. There is a need for an engaging, interactive solution that breaks down book content into manageable chunks and motivates readers to complete their reading journey. By gamifying the reading process, users can stay motivated, track progress, and build lasting habits for personal development.",
    challenges: [
      "Breaking down book content into meaningful, bite-sized chunks without losing the original context.",
      "Designing a reward system that is motivating yet not distracting.",
      "Implementing features that allow users to track their reading progress.",
    ],
    learnings: [
      "Learned how to gather and incorporate user feedback effectively.",
      "Developed the ability to manage complex database queries efficiently using Drizzle.",
      "Implemented a Duolingo-like reward system to enhance user engagement on the platform.",
      "Utilized Convex to implement real-time community interaction features on the platform",
    ],
  },
];
