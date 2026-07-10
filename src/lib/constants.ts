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
  level: number; // 0-100
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
    level: 90,
    color: "#f7df1e",
    whyUsed: "JavaScript is the core programming language of the web, enabling interactive interfaces and dynamic web content.",
    whereUsed: "Used across all web projects, including the frontend UI of AgentForge, EzyVote, and BidArena.",
    whyLearned: "Learned as a foundational language in my academic curriculum at SPIT Mumbai to understand client-side web scripting."
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    category: "Languages",
    level: 85,
    color: "#3178c6",
    whyUsed: "TypeScript adds static typing to JavaScript, preventing runtime errors and enabling excellent IDE autocompletion.",
    whereUsed: "Used in AgentForge, BidArena, and Sahayak to build type-safe React components and structured APIs.",
    whyLearned: "Self-learned to scale JavaScript applications reliably and build type-safe features in projects like AgentForge and Sahayak."
  },
  {
    name: "Python",
    icon: SiPython,
    category: "Languages",
    level: 80,
    color: "#3776ab",
    whyUsed: "Python is the premier language for data science, machine learning, AI pipelines, and scripting backend services.",
    whereUsed: "Used to build the Sahayak ML pipeline backend, using Flask to host the text classification model.",
    whyLearned: "Self-learned to explore machine learning, AI libraries (DistilBERT, Gemini API), and automate data workflows."
  },
  {
    name: "Java",
    icon: FaJava,
    category: "Languages",
    level: 75,
    color: "#b07219",
    whyUsed: "Java is a versatile, object-oriented language renowned for its enterprise robustness and cross-platform compatibility.",
    whereUsed: "Used in academic projects at SPIT Mumbai to understand object-oriented programming patterns and multi-threaded systems.",
    whyLearned: "Learned during academics at SPIT Mumbai to master Object-Oriented Programming (OOP) concepts and clean architecture."
  },
  {
    name: "C++",
    icon: TbBrandCpp,
    category: "Languages",
    level: 70,
    color: "#00599c",
    whyUsed: "C++ offers low-level control, high performance, and manual memory management, ideal for systems engineering.",
    whereUsed: "Used to solve core data structure and algorithm challenges during technical interview preparation.",
    whyLearned: "Learned in academics to understand manual memory management, pointers, and solve data structures and algorithm (DSA) challenges."
  },
  {
    name: "React",
    icon: SiReact,
    category: "Frontend",
    level: 90,
    color: "#61dafb",
    whyUsed: "React is a component-based frontend library for building highly responsive, interactive, and modular user interfaces.",
    whereUsed: "Used to construct the client interfaces for AgentForge, BidArena, EzyVote, and Sahayak.",
    whyLearned: "Studied during academics at SPIT Mumbai and expanded my skills by building robust SPAs and complex frontend interfaces."
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    category: "Frontend",
    level: 85,
    color: "#ffffff",
    whyUsed: "Next.js is a React framework that supports server-side rendering, static site generation, and serverless API functions.",
    whereUsed: "Used as the core architecture of this portfolio site, integrating App Router page generation.",
    whyLearned: "Self-learned to leverage server-side rendering, static site generation, and build high-performance search-engine optimized full-stack apps."
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    category: "Frontend",
    level: 90,
    color: "#06b6d4",
    whyUsed: "Tailwind CSS is a utility-first styling framework that allows building responsive user interfaces directly in components.",
    whereUsed: "Used for modern styling, dark/light theme tokens, and custom layouts in AgentForge, BidArena, and this portfolio.",
    whyLearned: "Self-learned to accelerate UI prototyping and write clean, responsive layouts without bulky stylesheet boilerplate."
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    category: "Backend",
    level: 85,
    color: "#339933",
    whyUsed: "Node.js allows running JavaScript on the server, building fast, event-driven, and highly scalable backend runtimes.",
    whereUsed: "Used in the BidArena live auction backend to handle multi-client connections and express API services.",
    whyLearned: "Self-learned to write event-driven backend runtimes and real-time WebSocket applications in JavaScript."
  },
  {
    name: "Express",
    icon: SiExpress,
    category: "Backend",
    level: 85,
    color: "#a0a0b0",
    whyUsed: "Express is a minimal and flexible web application framework for Node.js, providing robust tooling for APIs.",
    whereUsed: "Used in BidArena to build modular REST APIs for user registration, auth, and auction actions.",
    whyLearned: "Learned in academics at SPIT Mumbai as the standard micro-framework for building web services and structured APIs in Node.js."
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    category: "Database",
    level: 85,
    color: "#47a248",
    whyUsed: "MongoDB is a document-oriented NoSQL database that offers flexible schema structures and fast JSON querying.",
    whereUsed: "Used in BidArena to store dynamic auction products, bidding histories, and user profile data.",
    whyLearned: "Learned in my database curriculum at SPIT Mumbai to manage document-oriented, schema-less data structures."
  },
  {
    name: "MySQL",
    icon: SiMysql,
    category: "Database",
    level: 75,
    color: "#00758f",
    whyUsed: "MySQL is a popular relational database management system that structures structured data with full SQL capabilities.",
    whereUsed: "Used in various college database projects to implement relational schemas, foreign keys, and complex queries.",
    whyLearned: "Learned in database management system (DBMS) academics to master ACID transactions, relational structures, and SQL query indexing."
  },
  {
    name: "Supabase",
    icon: SiSupabase,
    category: "Database",
    level: 80,
    color: "#3ecf8e",
    whyUsed: "Supabase is an open-source Firebase alternative providing auto-generated REST APIs, real-time database listeners, and auth.",
    whereUsed: "Used as the backend for AgentForge and Sahayak, handling PostgreSQL databases, Google OAuth, and secure storage.",
    whyLearned: "Self-learned to quickly deploy secure PostgreSQL databases, handles edge functions, and integrate user authentication flows."
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    category: "Database",
    level: 75,
    color: "#5a67d8",
    whyUsed: "Prisma is an open-source Object-Relational Mapper (ORM) that makes database access type-safe and intuitive.",
    whereUsed: "Used in serverless APIs to query databases, write migrations, and automatically generate TypeScript types.",
    whyLearned: "Self-learned to ensure type-safe database queries and simplify schema migrations in serverless environments."
  },
  {
    name: "AWS",
    icon: FaAws,
    category: "DevOps",
    level: 65,
    color: "#ff9900",
    whyUsed: "AWS (Amazon Web Services) is the leading cloud computing platform, offering EC2 instances, S3 storage, and serverless hosting.",
    whereUsed: "Used to explore cloud deployments, host static files on S3 buckets, and configure virtual private clouds (VPC).",
    whyLearned: "Self-learned to deploy web servers, manage cloud hosting networks, and understand modern DevOps pipelines."
  },
  {
    name: "Docker",
    icon: SiDocker,
    category: "DevOps",
    level: 70,
    color: "#2496ed",
    whyUsed: "Docker packages applications and dependencies into standard containers, ensuring consistent execution across dev and prod.",
    whereUsed: "Used to containerize Python Flask and Node.js backend services, preventing deployment inconsistencies.",
    whyLearned: "Learned in devops academics at SPIT Mumbai to containerize applications and ensure consistent runtime execution across systems."
  },
  {
    name: "Kubernetes",
    icon: SiKubernetes,
    category: "DevOps",
    level: 60,
    color: "#326ce5",
    whyUsed: "Kubernetes is a container orchestration engine that automates the deployment, scaling, and load-balancing of Docker containers.",
    whereUsed: "Used to deploy distributed application containers in local minikube clusters for testing resilience.",
    whyLearned: "Learned in DevOps and systems configuration academics to study microservice orchestration, auto-scaling, and cluster management."
  },
  {
    name: "Linux",
    icon: SiLinux,
    category: "DevOps",
    level: 75,
    color: "#fcc624",
    whyUsed: "Linux is the open-source operating system standard for hosting web servers, running databases, and building code.",
    whereUsed: "Used daily as the primary shell runtime via bash commands to manage server folders and run deployment tasks.",
    whyLearned: "Learned in academics to master the command-line interface, server management, file systems, and bash scripting."
  },
  {
    name: "Solidity",
    icon: SiSolidity,
    category: "Blockchain",
    level: 70,
    color: "#9c9c9c",
    whyUsed: "Solidity is the primary programming language for writing smart contracts that run on the Ethereum Virtual Machine (EVM).",
    whereUsed: "Used to write the core election contract for EzyVote, enforcing secure and transparent decentralized voting.",
    whyLearned: "Self-learned out of curiosity for Web3 to write secure smart contracts and deploy decentralized applications."
  },
  {
    name: "Git",
    icon: SiGit,
    category: "Tools",
    level: 90,
    color: "#f05032",
    whyUsed: "Git is a distributed version control system that tracks source code revisions and facilitates team collaboration.",
    whereUsed: "Used to manage code histories for all projects, coordinate tasks, and prevent code conflicts.",
    whyLearned: "Learned during academics at SPIT Mumbai as the standard practice for codebase versioning and collaborative coding."
  },
  {
    name: "GitHub",
    icon: SiGithub,
    category: "Tools",
    level: 90,
    color: "#ffffff",
    whyUsed: "GitHub is a hosting service for Git repositories, offering pull requests, code reviews, issue tracking, and CI/CD pipelines.",
    whereUsed: "Used to host all project codebases, publish open-source code, and automatically deploy web apps to Vercel.",
    whyLearned: "Self-learned to host repositories, coordinate project pull requests, configure webhooks, and manage CI/CD pipelines."
  },
  {
    name: "Postman",
    icon: SiPostman,
    category: "Tools",
    level: 85,
    color: "#ff6c37",
    whyUsed: "Postman is an API client tool used to test REST endpoints, generate mock data, and document server endpoints.",
    whereUsed: "Used to test and debug REST API routes for BidArena and Sahayak before connecting the frontend clients.",
    whyLearned: "Learned in academics to test server endpoints, document API routes, and validate payload responses."
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
