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
  availability: "Open to Full-Stack Internships",
  email: "mayutardekar1205@gmail.com",
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
  icon: React.ComponentType<{ className?: string; size?: number; style?: React.CSSProperties }>;
  category: SkillCategory;
  color: string;
  whyUsed: string;
  whereUsed: string;
  whyLearned: string;
}

export const SKILLS: Skill[] = [
  {
    name: "JavaScript",
    icon: SiJavascript,
    category: "Languages",
    color: "#f7df1e",
    whyUsed: "My daily driver for everything on the web — from DOM manipulation and async data flows to fully interactive UIs.",
    whereUsed: "Powers the frontend of every project I've shipped — AgentForge, EzyVote, BidArena, and this portfolio.",
    whyLearned: "Started with it at SPIT Mumbai, then went deep because every idea I wanted to build lived on the web."
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    category: "Languages",
    color: "#3178c6",
    whyUsed: "Catches my bugs before they run — static types and autocompletion make refactoring large codebases stress-free.",
    whereUsed: "AgentForge, BidArena, and Sahayak — type-safe React components, shared API contracts, and this entire portfolio.",
    whyLearned: "Self-taught after my plain-JS projects grew too big to trust. Never went back."
  },
  {
    name: "Python",
    icon: SiPython,
    category: "Languages",
    color: "#3776ab",
    whyUsed: "My go-to for ML pipelines, quick scripts, and backend glue — minimal ceremony, massive ecosystem.",
    whereUsed: "Built Sahayak's ML backend with Flask, serving a DistilBERT text-classification model with Gemini API integration.",
    whyLearned: "Self-taught to break into machine learning and automate the boring parts of my workflow."
  },
  {
    name: "Java",
    icon: FaJava,
    category: "Languages",
    color: "#b07219",
    whyUsed: "Where I learned to think in objects — solid foundations in OOP, interfaces, and multi-threaded design.",
    whereUsed: "Academic projects at SPIT Mumbai — OOP design patterns, multi-threading, and clean architecture exercises.",
    whyLearned: "Core of my curriculum at SPIT Mumbai — it shaped how I structure code in every other language."
  },
  {
    name: "C++",
    icon: TbBrandCpp,
    category: "Languages",
    color: "#00599c",
    whyUsed: "My DSA weapon — fast, close to the metal, and the language I think in while problem-solving.",
    whereUsed: "Hundreds of data-structure and algorithm problems solved during technical interview preparation.",
    whyLearned: "Learned in academics to understand what actually happens under the hood — pointers, memory, and performance."
  },
  {
    name: "React",
    icon: SiReact,
    category: "Frontend",
    color: "#61dafb",
    whyUsed: "Component thinking fits how I build — small, reusable pieces composed into complex, responsive interfaces.",
    whereUsed: "The client side of AgentForge, BidArena, EzyVote, and Sahayak — SPAs, dashboards, and real-time UIs.",
    whyLearned: "Introduced at SPIT Mumbai, mastered by shipping — every project pushed me deeper into hooks, state, and performance."
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    category: "Frontend",
    color: "#ffffff",
    whyUsed: "React with superpowers — SSR, file-based routing, and API routes let me ship full-stack apps from one codebase.",
    whereUsed: "The backbone of this portfolio — App Router, server components, API routes, and edge-ready deployment on Vercel.",
    whyLearned: "Self-taught to build SEO-friendly, high-performance apps without stitching a separate backend together."
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    category: "Frontend",
    color: "#06b6d4",
    whyUsed: "Styling at the speed of thought — utility classes keep design decisions inside the component, not in a distant stylesheet.",
    whereUsed: "Every modern UI I've built — AgentForge, BidArena, and this portfolio's theming, dark mode, and responsive layouts.",
    whyLearned: "Self-taught after fighting CSS files one too many times — prototyping got 10x faster."
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    category: "Backend",
    color: "#339933",
    whyUsed: "JavaScript on the server — event-driven and fast, perfect for APIs and real-time WebSocket work.",
    whereUsed: "BidArena's live auction backend — handling concurrent bidders, WebSocket streams, and Express APIs.",
    whyLearned: "Self-taught to stay in one language across the stack and build real-time systems."
  },
  {
    name: "Express",
    icon: SiExpress,
    category: "Backend",
    color: "#a0a0b0",
    whyUsed: "Minimal, unopinionated, and battle-tested — my default for spinning up structured REST APIs fast.",
    whereUsed: "BidArena's modular API layer — authentication, user registration, and live auction endpoints.",
    whyLearned: "Learned at SPIT Mumbai as the standard Node micro-framework, refined through real projects."
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    category: "Database",
    color: "#47a248",
    whyUsed: "Flexible schemas and JSON-native storage — ideal when the data model is still evolving.",
    whereUsed: "BidArena's data layer — auction products, live bid histories, and user profiles.",
    whyLearned: "Learned in the DBMS curriculum at SPIT Mumbai, then applied to production-style projects."
  },
  {
    name: "MySQL",
    icon: SiMysql,
    category: "Database",
    color: "#00758f",
    whyUsed: "Relational rigor — foreign keys, joins, and ACID transactions for when data integrity is non-negotiable.",
    whereUsed: "College database projects — relational schemas, complex queries, and indexing strategies.",
    whyLearned: "DBMS academics at SPIT Mumbai — where I learned to model data properly before touching NoSQL."
  },
  {
    name: "Supabase",
    icon: SiSupabase,
    category: "Database",
    color: "#3ecf8e",
    whyUsed: "Postgres with batteries included — auth, storage, and realtime APIs without building a backend from scratch.",
    whereUsed: "Backend for AgentForge and Sahayak — PostgreSQL, Google OAuth, row-level security, and file storage.",
    whyLearned: "Self-taught to ship secure full-stack features fast without managing infrastructure."
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    category: "Database",
    color: "#5a67d8",
    whyUsed: "Type-safe database access — the schema is the single source of truth and the types write themselves.",
    whereUsed: "Serverless API routes — schema migrations, relational queries, and auto-generated TypeScript types.",
    whyLearned: "Self-taught to stop hand-writing SQL strings and let the compiler catch data bugs."
  },
  {
    name: "AWS",
    icon: FaAws,
    category: "DevOps",
    color: "#ff9900",
    whyUsed: "The cloud standard — EC2, S3, and VPC fundamentals that every production deployment eventually touches.",
    whereUsed: "Cloud experiments — static hosting on S3, EC2 web servers, and VPC network configuration.",
    whyLearned: "Self-taught to understand where code actually runs after git push."
  },
  {
    name: "Docker",
    icon: SiDocker,
    category: "DevOps",
    color: "#2496ed",
    whyUsed: "\"Works on my machine\" — solved. Containers keep dev and prod identical.",
    whereUsed: "Containerized Flask and Node.js services for consistent, reproducible deployments.",
    whyLearned: "DevOps coursework at SPIT Mumbai — now a default part of how I ship backends."
  },
  {
    name: "Kubernetes",
    icon: SiKubernetes,
    category: "DevOps",
    color: "#326ce5",
    whyUsed: "Orchestration at scale — automated deployment, self-healing, and load-balancing for containerized apps.",
    whereUsed: "Local minikube clusters — deploying distributed containers and testing resilience and scaling.",
    whyLearned: "Systems coursework at SPIT Mumbai — to understand how microservices survive in production."
  },
  {
    name: "Linux",
    icon: SiLinux,
    category: "DevOps",
    color: "#fcc624",
    whyUsed: "Where servers live — the shell is my home for deployment, debugging, and automation.",
    whereUsed: "Daily driver — bash scripting, server management, and every deployment task I run.",
    whyLearned: "Academics first, then daily habit — the command line turned out to be the fastest UI there is."
  },
  {
    name: "Solidity",
    icon: SiSolidity,
    category: "Blockchain",
    color: "#9c9c9c",
    whyUsed: "Code that moves value — smart contracts where a bug costs real money, so precision matters.",
    whereUsed: "EzyVote's core election contract — secure, transparent, tamper-proof on-chain voting.",
    whyLearned: "Self-taught out of Web3 curiosity — ended up shipping a working dApp."
  },
  {
    name: "Git",
    icon: SiGit,
    category: "Tools",
    color: "#f05032",
    whyUsed: "The safety net for everything I write — branch, experiment, and never lose work.",
    whereUsed: "Every project, every commit — feature branches, clean histories, and conflict-free collaboration.",
    whyLearned: "Standard practice from day one at SPIT Mumbai — now pure muscle memory."
  },
  {
    name: "GitHub",
    icon: SiGithub,
    category: "Tools",
    color: "#ffffff",
    whyUsed: "Where my code lives publicly — PRs, reviews, issues, and CI/CD in one place.",
    whereUsed: "All my repositories — open-source publishing and auto-deploys to Vercel via webhooks.",
    whyLearned: "Self-taught while building a public portfolio of work worth showing."
  },
  {
    name: "Postman",
    icon: SiPostman,
    category: "Tools",
    color: "#ff6c37",
    whyUsed: "APIs verified before the frontend ever touches them — requests, environments, and mock data.",
    whereUsed: "Testing and debugging every REST endpoint in BidArena and Sahayak.",
    whyLearned: "Learned in academics, kept because untested endpoints always break at the worst time."
  }
];

export interface Project {
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  techStack: string[];
  github?: string;
  live?: string;
  image?: string;
  featured: boolean;
  year: string;
  problemStatement?: string;
  solutionApproach?: string;
  keyFeatures?: string[];
  challenges?: string[];
  architecture?: string;
  teamSize?: string;
  duration?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "AgentForge",
    slug: "agentforge",
    description:
      "AI No-Code Chatbot Builder — A multi-tenant SaaS platform for creating and deploying AI-powered chatbots using RAG.",
    longDescription:
      "Designed and built a multi-tenant SaaS platform that allows users to create and deploy AI-powered chatbots using Retrieval-Augmented Generation (RAG) without writing code. Implemented a document ingestion pipeline with chunking, embedding generation, and pgvector-based semantic search. Built an embeddable real-time chat widget with theme customization, analytics dashboard, and automated fallback to human agents.",
    techStack: ["React", "TypeScript", "Supabase", "pgvector"],
    live: "https://forgeagent.in/",
    image: "/images/agentforge.png",
    featured: true,
    year: "2025",
    problemStatement:
      "Businesses need custom AI chatbots trained on their own data, but building RAG systems requires significant engineering expertise and infrastructure knowledge.",
    solutionApproach:
      "Created a no-code platform where users upload documents, which are automatically chunked, embedded, and stored in pgvector for semantic search. The chatbot uses RAG to provide accurate, context-aware responses from the uploaded knowledge base.",
    keyFeatures: [
      "No-code chatbot creation with document upload",
      "RAG pipeline with chunking, embeddings, and pgvector semantic search",
      "Embeddable chat widget with theme customization",
      "Analytics dashboard tracking conversations and satisfaction",
      "Automated fallback to human agents for unresolved queries",
      "Multi-tenant architecture with isolated data per user",
    ],
    challenges: [
      "Optimizing document chunking strategy for different file types to maintain context",
      "Implementing efficient pgvector similarity search at scale",
      "Building a real-time embeddable widget that works across different host websites",
    ],
    architecture:
      "React + TypeScript frontend → Supabase backend with PostgreSQL + pgvector → Document ingestion pipeline → Embedding generation → Semantic search → LLM response generation",
    teamSize: "Solo",
    duration: "3 weeks",
  },
  {
    title: "EzyVote",
    slug: "ezyvote",
    description:
      "Decentralized Voting dApp — A blockchain-based voting system ensuring immutability and transparency.",
    longDescription:
      "Developed a blockchain-based voting system using Solidity smart contracts to ensure immutability, transparency, and tamper resistance. Integrated ethers.js for seamless frontend-contract communication. Optimized gas usage and applied OpenZeppelin security standards.",
    techStack: ["Solidity", "Hardhat", "ethers.js", "OpenZeppelin"],
    github: "https://github.com/MayureshTardekar/EzyVote-Prototype",
    live: "https://ezyvote-git-stable-vite5-mayuresh0512s-projects.vercel.app/",
    image: "/images/ezyvote.png",
    featured: true,
    year: "2024-2025",
    problemStatement:
      "Traditional voting systems are vulnerable to tampering, lack transparency, and require trust in centralized authorities to ensure fair elections.",
    solutionApproach:
      "Leveraged blockchain's immutability to create a transparent voting system where every vote is permanently recorded on-chain. Smart contracts enforce voting rules automatically, eliminating the need for trusted intermediaries.",
    keyFeatures: [
      "Immutable on-chain vote recording",
      "Transparent election results verifiable by anyone",
      "Smart contract-enforced voting rules (one person, one vote)",
      "Wallet-based authentication (no passwords)",
      "Gas-optimized contract deployment",
      "OpenZeppelin security standards for attack prevention",
    ],
    challenges: [
      "Optimizing Solidity gas costs while maintaining security guarantees",
      "Implementing secure voter verification without compromising anonymity",
      "Synchronizing frontend state with on-chain transaction confirmations",
    ],
    architecture:
      "React frontend → ethers.js for blockchain interaction → Solidity smart contracts on Ethereum → Hardhat for testing and deployment → OpenZeppelin for security patterns",
    teamSize: "Solo",
    duration: "1 month",
  },
  {
    title: "BidArena",
    slug: "bidarena",
    description:
      "Real-Time Auction Platform — Supporting concurrent live bidding with JWT auth and Razorpay payments.",
    longDescription:
      "Engineered a real-time auction platform supporting concurrent live bidding with JWT authentication and integrated Razorpay payment workflows. Implemented WebSocket-based event broadcasting using Socket.io for instant bid updates. Automated auction lifecycle management using background cron jobs for expiry handling and winner finalization.",
    techStack: ["React", "TypeScript", "Node.js", "MongoDB"],
    github: "https://github.com/MayureshTardekar/BidArena",
    live: "https://bidarena-six.vercel.app/",
    image: "/images/bidarena.png",
    featured: true,
    year: "2025",
    problemStatement:
      "Traditional auction platforms suffer from latency issues where users don't see bid updates in real-time, leading to poor user experience and unfair bidding outcomes.",
    solutionApproach:
      "Built a WebSocket-powered architecture using Socket.io that broadcasts bid events instantly to all connected clients. Combined with automated lifecycle management using cron jobs for auction expiry, cleanup, and winner determination.",
    keyFeatures: [
      "Real-time bid updates via WebSocket (Socket.io)",
      "JWT authentication with secure session management",
      "Razorpay payment integration for seamless transactions",
      "Automated auction lifecycle (start, expire, finalize winner)",
      "Background cron jobs for cleanup and expiry handling",
      "Concurrent bidding support with race condition handling",
    ],
    challenges: [
      "Handling race conditions when multiple users bid simultaneously",
      "Designing reliable auction expiry with background cron jobs",
      "Integrating Razorpay payment flow with auction winner determination",
    ],
    architecture:
      "React + TypeScript frontend → Node.js + Express backend → MongoDB database → Socket.io for real-time events → Razorpay payment gateway → node-cron for scheduled tasks",
    teamSize: "Solo",
    duration: "2 weeks",
  },
  {
    title: "Sahayak",
    slug: "sahayak",
    description:
      "AI-Powered Railway Complaint Intelligence System — 3-tier AI pipeline for multilingual complaint classification and prioritization.",
    longDescription:
      "Built during a 10-hour hackathon, Sahayak is a sophisticated complaint management system for Indian Railways. Citizens can submit complaints in multiple languages (Hindi, Marathi, English), which are automatically classified and prioritized using a multi-tier AI pipeline combining DistilBERT, Google Gemini, and keyword-based fallback.",
    techStack: ["React", "TypeScript", "Python", "Supabase", "Gemini API"],
    github: "https://github.com/MayureshTardekar/Sahayak-Hackathon-10hr",
    image: "/images/sahayak.png",
    featured: true,
    year: "2026",
    problemStatement:
      "Indian Railways receives thousands of complaints daily in multiple languages with no automated way to classify severity, route to the right department, or identify systemic issues across regions.",
    solutionApproach:
      "Built a 3-tier AI classification pipeline: Tier 1 uses a fine-tuned DistilBERT model for high-confidence local classification. Tier 2 falls back to Google Gemini 2.5 Flash API for complex cases. Tier 3 uses keyword-based offline classification as the final fallback, ensuring 100% uptime.",
    keyFeatures: [
      "Multilingual complaint submission (Hindi, Marathi, English)",
      "3-tier AI classification pipeline (DistilBERT → Gemini → Keywords)",
      "Real-time admin dashboard with live stats and analytics",
      "KMeans clustering analysis with SVD projections for pattern detection",
      "QR code-based mobile submission for field officers",
      "Role-based access control with Google OAuth",
    ],
    challenges: [
      "Training DistilBERT on limited multilingual railway complaint data within hackathon timeframe",
      "Designing a graceful fallback system that maintains classification quality across all 3 tiers",
      "Building responsive real-time dashboard with complex data visualizations under time pressure",
    ],
    architecture:
      "React + TypeScript frontend with Tailwind/shadcn UI → Supabase backend with PostgreSQL → Python ML pipeline (Flask + DistilBERT) → Google Gemini API fallback → Edge Functions for serverless logic",
    teamSize: "Team of 4",
    duration: "10 hours (hackathon)",
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
  resume      - Download resume (Options: -tech, -ats, -photo)
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
> 2. EzyVote — Decentralized Voting dApp
>    Solidity, Hardhat, ethers.js, OpenZeppelin
>
> 3. BidArena — Real-Time Auction Platform
>    React, TypeScript, Node.js, MongoDB
>
> 4. Sahayak — AI Railway Complaint System (Hackathon)
>    React, TypeScript, Python, Supabase, Gemini API`,
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
