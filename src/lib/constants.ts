import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiSupabase,
  SiPrisma,
  SiDocker,
  SiKubernetes,
  SiSolidity,
  SiPython,
  SiJavascript,
  SiGit,
  SiGithub,
  SiPostman,
  SiLinux,
  SiTailwindcss,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";

export const PERSONAL_INFO = {
  name: "Mayuresh Tardekar",
  title: "Software Engineer",
  subtitle: "Full-Stack Developer",
  email: "mayutardekar1205@gmail.com",
  phone: "+91 88283 34158",
  location: "Mumbai, India",
  github: "https://github.com/MayureshTardekar",
  linkedin: "https://linkedin.com/in/mayuop",
  twitter: "https://x.com/MayuuuOP",
  bio: `I'm a Full-Stack Developer & MCA student at SPIT Mumbai, passionate about building scalable web applications and exploring emerging technologies like blockchain and AI. I love turning complex problems into elegant solutions.`,
  shortBio: "Building things that live on the internet.",
  resumeUrl: "/resume.pdf",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export type SkillCategory =
  | "Languages"
  | "Frontend"
  | "Backend"
  | "Database"
  | "DevOps"
  | "Blockchain"
  | "Tools";

export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  category: SkillCategory;
  level: number; // 0-100
}

export const SKILLS: Skill[] = [
  { name: "JavaScript", icon: SiJavascript, category: "Languages", level: 90 },
  { name: "TypeScript", icon: SiTypescript, category: "Languages", level: 85 },
  { name: "Python", icon: SiPython, category: "Languages", level: 80 },
  { name: "Java", icon: FaJava, category: "Languages", level: 75 },
  { name: "C++", icon: TbBrandCpp, category: "Languages", level: 70 },
  { name: "React", icon: SiReact, category: "Frontend", level: 90 },
  { name: "Next.js", icon: SiNextdotjs, category: "Frontend", level: 85 },
  { name: "Tailwind CSS", icon: SiTailwindcss, category: "Frontend", level: 90 },
  { name: "Node.js", icon: SiNodedotjs, category: "Backend", level: 85 },
  { name: "Express", icon: SiExpress, category: "Backend", level: 85 },
  { name: "MongoDB", icon: SiMongodb, category: "Database", level: 85 },
  { name: "MySQL", icon: SiMysql, category: "Database", level: 75 },
  { name: "Supabase", icon: SiSupabase, category: "Database", level: 80 },
  { name: "Prisma", icon: SiPrisma, category: "Database", level: 75 },
  { name: "AWS", icon: FaAws, category: "DevOps", level: 65 },
  { name: "Docker", icon: SiDocker, category: "DevOps", level: 70 },
  { name: "Kubernetes", icon: SiKubernetes, category: "DevOps", level: 60 },
  { name: "Linux", icon: SiLinux, category: "DevOps", level: 75 },
  { name: "Solidity", icon: SiSolidity, category: "Blockchain", level: 70 },
  { name: "Git", icon: SiGit, category: "Tools", level: 90 },
  { name: "GitHub", icon: SiGithub, category: "Tools", level: 90 },
  { name: "Postman", icon: SiPostman, category: "Tools", level: 85 },
];

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  github?: string;
  live?: string;
  image?: string;
  featured: boolean;
  year: string;
}

export const PROJECTS: Project[] = [
  {
    title: "AgentForge",
    description:
      "AI No-Code Chatbot Builder — A multi-tenant SaaS platform for creating and deploying AI-powered chatbots using RAG.",
    longDescription:
      "Designed and built a multi-tenant SaaS platform that allows users to create and deploy AI-powered chatbots using Retrieval-Augmented Generation (RAG) without writing code. Implemented a document ingestion pipeline with chunking, embedding generation, and pgvector-based semantic search. Built an embeddable real-time chat widget with theme customization, analytics dashboard, and automated fallback to human agents.",
    techStack: ["React", "TypeScript", "Supabase", "pgvector"],
    github: "https://github.com/MayureshTardekar",
    featured: true,
    year: "2025",
  },
  {
    title: "BidArena",
    description:
      "Real-Time Auction Platform — Supporting concurrent live bidding with JWT auth and Razorpay payments.",
    longDescription:
      "Engineered a real-time auction platform supporting concurrent live bidding with JWT authentication and integrated Razorpay payment workflows. Implemented WebSocket-based event broadcasting using Socket.io for instant bid updates. Automated auction lifecycle management using background cron jobs for expiry handling and winner finalization.",
    techStack: ["React", "TypeScript", "Node.js", "MongoDB"],
    github: "https://github.com/MayureshTardekar",
    featured: true,
    year: "2025",
  },
  {
    title: "EzyVote",
    description:
      "Decentralized Voting dApp — A blockchain-based voting system ensuring immutability and transparency.",
    longDescription:
      "Developed a blockchain-based voting system using Solidity smart contracts to ensure immutability, transparency, and tamper resistance. Integrated ethers.js for seamless frontend-contract communication. Optimized gas usage and applied OpenZeppelin security standards.",
    techStack: ["Solidity", "Hardhat", "ethers.js", "OpenZeppelin"],
    github: "https://github.com/MayureshTardekar",
    featured: true,
    year: "2024-2025",
  },
];

export interface TimelineItem {
  title: string;
  subtitle: string;
  location: string;
  period: string;
  description: string;
  type: "education" | "work" | "achievement";
}

export const TIMELINE: TimelineItem[] = [
  {
    title: "Master of Computer Applications (MCA)",
    subtitle: "Sardar Patel Institute of Technology (Autonomous)",
    location: "Mumbai, India",
    period: "2025 — 2027",
    description:
      "Pursuing MCA with focus on advanced software engineering, distributed systems, and AI/ML.",
    type: "education",
  },
  {
    title: "Bachelor of Science in Information Technology",
    subtitle: "Thakur Ramnarayan College of Arts & Commerce",
    location: "Mumbai, India",
    period: "2022 — 2025",
    description:
      "Completed BSc IT with strong foundation in Data Structures, Algorithms, DBMS, Computer Networks, and Cloud Computing.",
    type: "education",
  },
  {
    title: "Alkimi Move FWD Hackathon",
    subtitle: "Hackathon Participant",
    location: "",
    period: "2025",
    description: "Participated and competed in the Alkimi Move FWD Hackathon.",
    type: "achievement",
  },
  {
    title: "SPIT REDACT Hackathon",
    subtitle: "Hackathon Participant",
    location: "",
    period: "2025",
    description: "Participated and competed in the SPIT REDACT Hackathon.",
    type: "achievement",
  },
  {
    title: "NPTEL Certifications",
    subtitle: "ML, Big Data, Coding Theory",
    location: "",
    period: "2024",
    description:
      "Earned NPTEL certifications in Machine Learning, Big Data, and Coding Theory.",
    type: "achievement",
  },
];

export const TERMINAL_COMMANDS: Record<string, string> = {
  help: `Available commands:
  about       - Know more about me
  skills      - View my technical skills
  projects    - Browse my projects
  experience  - View my education & achievements
  contact     - Get my contact info
  github      - Visit my GitHub
  resume      - Download my resume
  clear       - Clear terminal
  sudo hire-me - 😏`,
  about: `
> Mayuresh Tardekar
> Software Engineer | Full-Stack Developer
> Mumbai, India
>
> MCA student at SPIT Mumbai. Passionate about
> building scalable web applications, exploring
> blockchain & AI. I love turning complex problems
> into elegant, performant solutions.`,
  skills: `
> Languages:  JavaScript, TypeScript, Python, Java, C++
> Frontend:   React, Next.js, Tailwind CSS
> Backend:    Node.js, Express
> Databases:  MongoDB, MySQL, Supabase, Prisma
> DevOps:     AWS, Docker, Kubernetes, Linux
> Blockchain: Solidity, ethers.js, OpenZeppelin
> Tools:      Git, GitHub, Postman`,
  projects: `
> 1. AgentForge — AI No-Code Chatbot Builder
>    React, TypeScript, Supabase, pgvector
>
> 2. BidArena — Real-Time Auction Platform
>    React, TypeScript, Node.js, MongoDB
>
> 3. EzyVote — Decentralized Voting dApp
>    Solidity, Hardhat, ethers.js, OpenZeppelin`,
  experience: `
> Education:
>   MCA @ SPIT Mumbai (2025-2027)
>   BSc IT @ Thakur Ramnarayan College (2022-2025)
>
> Achievements:
>   Alkimi Move FWD Hackathon (2025)
>   SPIT REDACT Hackathon (2025)
>   NPTEL Certs - ML, Big Data, Coding Theory (2024)`,
  contact: `
> Email:    mayutardekar1205@gmail.com
> Phone:    +91 88283 34158
> LinkedIn: linkedin.com/in/mayuop
> GitHub:   github.com/MayureshTardekar
> Location: Mumbai, India`,
  github: `> Opening GitHub... 🚀
> github.com/MayureshTardekar`,
  resume: `> Downloading resume... 📄`,
  "sudo hire-me": `
>  _    _                 _   _
> | |  | |               | | | |
> | |__| |___ _ __ ___  _| |_| |
> |  __  / _ \\ '__/ _ \\/ _  |_|
> | |  | |  __/ | |  __/ (_| |_
> |_|  |_|\\___|_|  \\___|\\__,_(_)
>
> 🎉 You found the secret! Let's talk!
> Email: mayutardekar1205@gmail.com`,
};
