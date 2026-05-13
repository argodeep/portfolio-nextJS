import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Arghyadeep Majumder — Senior Engineer & Solution Architect",
  author: "Arghyadeep Majumder",
  description:
    "Senior Engineer & Solution Architect with 7+ years of experience building and shipping products end-to-end. Building scalable systems from microservices to React & React Native frontends for millions of users.",
  lang: "en",
  siteLogo: "/arghya-small.jpg",
  navLinks: [
    { text: "How I work", href: "#how-i-work" },
    { text: "Work Experience", href: "#experience" },
    { text: "Impact", href: "#impact" },
    { text: "Projects", href: "#projects" },
    { text: "Recognitions", href: "#recognitions" },
    { text: "Know More", href: "#about" },
  ],
  socialLinks: [
    { text: "X.com", href: "https://x.com/argodeep" },
    { text: "GitHub", href: "https://github.com/argodeep" },
    { text: "LinkedIn", href: "https://linkedin.com/in/argodeep" },
  ],
  socialImage: "/og-image.png",
  canonicalURL: "https://arghyadeep.dev",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Arghyadeep Majumder",
    specialty: "Senior Engineer & Solution Architect",
    summary:
      "I care about what I build —and I try to build it well.\n\nI have 7+ years of experience building and shipping products end to end, in production. From microservices to React & React Native frontends — for millions of users across global enterprises and clients. Every layer, every cycle.\n\nCurrently building Empuls, Xoxoday's employee engagement platform — across surveys, rewards, wellness, and mobile — using AI tools as force multipliers to ship faster without compromising quality.",
    email: "ask@arghyadeep.com",
  },
  howIWork: {
    description: `I own problems end to end: clarifying ambiguous product requirements, designing the system, and shepherding features from design docs into production. Over the last 7+ years, I've been building and evolving engagement products at scale, balancing reliability, UX, and delivery speed for enterprise customers.\n\nDay to day, that means defining service boundaries, shaping APIs that work well for both web and mobile, and tightening feedback loops with observability, CI/CD, and close collaboration with design and customer-facing teams. I care less about buzzwords and more about whether what we ship actually moves metrics and feels right to the people using it.\n\nI work on core engagement experiences — surveys, rewards, social, wellness, and cross-platform flows — for large enterprises, from backend microservices and data pipelines to React / React Native frontends.`,
    skills: [
      "React",
      "React Native",
      "Node.js",
      "JavaScript",
      "Microservices",
      "MongoDB",
      "MySQL",
      "Redis",
      "Kafka",
      "Expo",
      "System Design",
      "Mobile app",
    ],
  },
  impactStories: [
    {
      number: "01",
      description:
        "Led a 3-month migration of a production mobile app from Flutter to React Native (Expo + Hermes) with a 2-developer team — migrating 1000+ files and 500+ components, using AI tooling to replace months of manual engineering work.",
    },
    {
      number: "02",
      description:
        "Owned a large-scale survey stack for 4+ years — from microservices and MongoDB pipelines to UI, reliably handling 100K+ survey users and high-volume response processing as adoption grew.",
    },
    {
      number: "03",
      description:
        "Helped shape engagement experiences across surveys, rewards, social, wellness, and mobile — working closely with product, design, and customer teams to ship the right abstractions, not just close tickets.",
    },
    {
      number: "04",
      description:
        "Built a collaborative online interview platform in 3 weeks during COVID — with shared cursors, WebRTC audio/video, live chat, and automatic test-case validation. Used by companies for real technical hiring.",
    },
  ],
  aiAdoptionStory: {
    title: "🤖 AI Adoption Story",
    subtitle: "I ranked #1 on my org's AI usage leaderboard. This is how it happened.",
    description: `When AI coding tools rolled out across the org, most engineers tried them. I committed to making AI a daily collaborator — not a shortcut, but a thinking partner across architecture, code reviews, debugging, and migrations. The discipline of prompt crafting, context window management, and knowing when not to trust the model started compounding — I was shipping more, faster, without cutting corners on quality. Accepted diffs climbed because the suggestions were actually correct, and I knew enough to validate them. By Q1 2026, the numbers were in: I had generated nearly 2× the agent lines of code of the second-ranked engineer.`,
    metrics: [
      { label: "✅ Accepted Diffs", value: "12,550" },
      { label: "⚡ Tab Completions", value: "5,984" },
      { label: "🧠 Agent Lines of Code", value: "641,650" },
    ],
    details:
      "The accepted diffs metric matters most — it reflects code that was good enough to actually ship. That number only grows when you understand your codebase deeply enough to guide the model, not just prompt it blindly.",
  },
  selectedProjects: [
    {
      name: "MicroNEWZY",
      description:
        "Short news service experiment exploring micro-content consumption, navigation, and performance trade-offs on the web.",
      linkText: "Visit ↗",
    },
    {
      name: "YouTube Tutorial Maker",
      description:
        "Web app to record screen and camera together with offline support and PWA experience — making it easy to produce developer tutorials without heavyweight tooling.",
    },
    {
      name: "Google Lens-like Text Recognition",
      description:
        "React Native demo performing text recognition similar to Google Lens — experimenting with on-device scanning and UX around camera flows.",
      demoLink: "#",
    },
    {
      name: "Twitter UI in ReactJS",
      description:
        "Rebuilt core Twitter UI patterns in ReactJS to deepen understanding of component composition, layout, and interactive feed performance.",
      linkText: "View ↗",
    },
    {
      name: "Other Experiments",
      description:
        "Stock Android-style calculator for the web · QR Gate Pass · Barcode Warranty Verifier · Complaco (multi-platform document storage) · Several WebRTC/WebSocket-based apps exploring real-time UX and reliability challenges.",
    },
  ],
  recognitions: [
    {
      title: "Impact in the Shadows, Circle of Excellence & Rockstar Awards",
      description:
        "Recognized multiple times for leading critical deliveries (including the React Native mobile app migration), shipping complex solutions under tight timelines, and driving high-impact features into production.",
      company: "Xoxoday",
    },
    {
      title: "HackerRank Certifications",
      description:
        "JavaScript & React.",
      company: "HackerRank",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:6710801364039147520/",
    },
    {
      title: "Employee of the Year & Cheers to Peers",
      description:
        "Jointly selected Employee of the Year (2019–2020) and received 50+ peer recognitions for collaboration and delivery.",
      company: "SKaaS",
    },
    {
      title: "Talk Proposal - Text Detection with AWS Rekognition",
      description:
        "This talk shows how to use text recognition feature in a react native app similar to google lens",
      company: "AppJS Conference 2020",
    },
    {
      title: "Talk Proposal - From Flutter to Expo in 90 Days",
      description:
        "How AI-Powered Development Accelerated Our React Native Migration",
      company: "AppJS Conference 2026",
    },
  ],
  experience: [
    {
      company: "Xoxoday",
      position: "Senior Software Engineer",
      startDate: "April 2024",
      endDate: "Present",
      summary: [
        "Led delivery of a new Empuls mobile app using Expo + React Native in 3 months with a 2-developer team, migrating 1000+ files and 500+ components from Flutter to a Hermes-based React Native stack, heavily leveraging AI tools (Cursor) to replace months of engineering effort with a modest AI investment.",
        "Revamped the Empuls Store Catalog UI for desktop and mobile within the rewards marketplace, delivering a cleaner experience that boosted mobile adoption from 10% to 25% and has been maintained and evolved over 5+ years.",
        "Own the Empuls employee survey stack for 4+ years, building and maintaining backend microservices, nano-services/jobs, MongoDB pipelines, and survey scheduling systems, along with the frontend UI, to reliably handle 100K+ survey users and high-volume response processing as adoption scaled.",
      ],
    },
    {
      company: "Xoxoday",
      position: "Software Engineer",
      startDate: "November 2020",
      endDate: "April 2024",
      summary: [
        "Integrated swag and merchandise catalogs from multiple vendors—including Amazon marketplace—into the Empuls rewards marketplace, enabling employees to redeem physical merchandise and contributing a significant share of program GMV.",
        "Built the Poll feature as a hackathon project for Empuls' social intranet; delivered end-to-end from backend APIs to UI, now used by many large enterprises to drive org-wide engagement.",
        "Worked on the initial version of the Empuls Slack app, bringing recognition and engagement workflows directly into customers' Slack workspaces.",
      ],
    },
    {
      company: "SKaaS Technology Solutions",
      position: "Frontend Developer",
      startDate: "February 2019",
      endDate: "November 2020",
      summary: [
        "Built a full remote interview platform in 3 weeks during COVID with a browser-based collaborative code editor (shared cursor), real-time audio/video via WebRTC, live chat, and a scheduling/orchestration dashboard for admins and recruiters.",
        "Implemented auto-validation of candidate submissions against pre-selected questions and test cases, backed by Amazon S3 for recordings and assets, reducing manual evaluation and enabling stable, multi-round technical interviews at scale.",
      ],
    },
  ],
  projects: [
    {
      name: "MicroNEWZY",
      summary:
        "Built a short news service experiment to explore micro-content consumption, navigation, and performance trade-offs on the web.",
      linkPreview: "https://news.arghyadeep.com/",
      linkSource: "https://news.arghyadeep.com/",
    },
    {
      name: "YouTube Tutorial Maker",
      summary:
        "Created a web app to record screen and camera together with offline support and PWA experience, making it easy to produce developer tutorials without heavyweight tooling.",
      linkPreview: "https://github.com/argodeep/Screen-Recorder-with-webcam",
      linkSource: "https://github.com/argodeep/Screen-Recorder-with-webcam",
    },
    {
      name: "📦 ngx-light-pagination",
      summary:
        "Lightweight Angular pagination library published on npm. Provides efficient and customizable pagination component for Angular applications.",
      linkPreview: "https://www.npmjs.com/package/ngx-light-pagination",
      linkSource: "https://www.npmjs.com/package/ngx-light-pagination",
    },
    {
      name: "Google Lens-like Text Recognition",
      summary:
        "Implemented a React Native demo that performs text recognition similar to Google Lens, experimenting with on-device scanning and UX around camera flows.",
      linkPreview: "https://youtu.be/fqwuPihkIi4",
      linkSource: "https://youtu.be/fqwuPihkIi4",
    },
    {
      name: "Twitter UI in ReactJS",
      summary:
        "Rebuilt core Twitter UI patterns in ReactJS to deepen understanding of component composition, layout, and interactive feed performance.",
      linkPreview: "https://www.linkedin.com/feed/update/urn:li:activity:6720534691264516096",
      linkSource: "https://www.linkedin.com/feed/update/urn:li:activity:6720534691264516096",
    },
    {
      name: "Other Experiments",
      summary:
        "Shipped smaller tools like a stock Android-style calculator for the web, a QR Gate Pass, a Barcode Warranty Verifier, Complaco (multi-platform document storage), and several WebRTC/WebSocket-based apps to explore real-time UX and reliability challenges.",
      linkPreview: "https://github.com/argodeep?tab=repositories",
      linkSource: "https://github.com/argodeep?tab=repositories",
    },
  ],
  consulting: {
    description: "Available for consulting on product architecture and Senior/Staff IC career paths.",
    availability: "Select engagements",
  },
  about: {
    description: `
      Outside my role, I help teams and engineers with architecture reviews, career guidance and practical advice on growing as a hands-on engineer. I'm available for consulting on product architecture and Senior/Staff IC career paths.
    `,
    image: "/arghya.jpg",
  },
};

// #5755ff
