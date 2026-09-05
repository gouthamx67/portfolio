export const portfolioData = {
    name: "Goutham",
    role: "Full Stack Developer | AI Integration Specialist",
    bio: "Full-Stack Developer & AI Integration Specialist experienced in designing, building, and shipping web and AI-driven applications end-to-end. Focused on applied AI: integrating LLMs into real products, building Retrieval-Augmented Generation (RAG) pipelines, fine-tuning models for domain-specific behavior, and creating Agentic AI systems. Comfortable across both JavaScript/TypeScript and Python stacks, with a track record of turning research-stage AI ideas into working, user-facing features.",
    skills: {
        "AI Technologies": ["Generative AI", "LLM Integration", "AI Automation", "Prompt Engineering", "RAG Systems", "Model Fine-Tuning", "Agentic AI", "PyTorch", "TensorFlow", "OpenCV", "LangChain"],
        "Front-End Development": ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Angular", "Redux", "Bootstrap"],
        "Back-End Development": ["Node.js", "Express.js", "NestJS", "REST APIs", "WebSockets", "OAuth Authentication", "PHP", "Python"],
        "Tools & Platforms": ["GitHub", "Postman", "Docker", "Kubernetes", "Linux CLI", "Figma", "Cloudinary", "Vercel", "n8n", "Zapier"],
        "Databases & ORM": ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Prisma ORM"],
    },
    education: [
        {
            id: "1",
            degree: "Bachelor of Technology",
            school: "Mahindra University",
            period: "08/2023 - 2027",
            location: "Hyderabad, India",
        },
    ],
    experience: [
        {
            id: "1",
            role: "Virtual Reality Developer — AI/LLM Systems",
            company: "Indrajaal Lab, Mahindra University",
            period: "06/2026 - 08/2026",
            location: "Hyderabad, India",
            highlights: [
                "Built immersive Virtual Reality (VR) applications in Unity and C#, integrating custom AI-driven interaction systems into the runtime environment.",
                "Designed and implemented a Retrieval-Augmented Generation (RAG) pipeline to ground LLM-driven in-VR dialogue and knowledge responses in project-specific data, improving factual accuracy and contextual relevance.",
                "Fine-tuned open-source LLMs on domain-specific data to improve response quality, tone consistency, and latency for real-time VR character interactions.",
                "Engineered user-interaction and immersive environment features that combine traditional VR development with applied LLM engineering.",
                "Tested, debugged, and optimized applications for performance and usability across VR hardware.",
                "Collaborated with a cross-functional team to ship AI-enhanced VR solutions from prototype to demo.",
            ],
        },
    ],
    contact: {
        phone: "+91 6304725238",
        email: "gouthamec27@gmail.com",
        location: "Hyderabad, India",
    },
    projects: [
        {
            id: "1",
            title: "STUVERSE",
            description: "Stuverse is a full-stack MERN \"Campus Companion\" that centralizes university-only services like marketplace, ride sharing, lost & found, and real-time communication into one platform. 🚀",
            image: "/stuverse.png",
            link: "https://github.com/gouthamx67/Stuverse",
            tags: ["React", "Node.js", "MongoDB", "Socket.io"],
        },
        {
            id: "2",
            title: "AI Gym Trainer",
            description: "AI Gym Trainer corrects your workout form in real time using camera-based pose detection, and suggests personalized corrections to help you train safely and effectively.",
            image: "/image.png",
            link: "https://github.com/gouthamx67/ai-gym-trainer",
            tags: ["AI", "Pose Detection", "Computer Vision"],
        },
        {
            id: "3",
            title: "VisionIQ — Image Quality Analysis",
            description: "Built an image-quality analysis application that detects blur, motion blur, noise, compression artifacts, and exposure issues using a hierarchical ML pipeline. Implemented a two-stage Random Forest classification flow with independent computer-vision gates and final quality scoring; evaluated on 112 samples with 73.21% final accuracy.",
            image: "/image.png",
            link: "https://github.com/gouthamx67/visioniq",
            tags: ["AI", "Machine Learning", "Computer Vision", "FastAPI", "React"],
        },
        {
            id: "4",
            title: "Enterprise Research Intelligence — RAG Engine",
            description: "Built a modular document-ingestion and preprocessing foundation for enterprise research intelligence / RAG workflows. Implemented layout-aware PDF extraction with PyMuPDF, including page/block metadata and font, size, flags, and bounding-box information. Added conservative text normalization, artifact filtering, repeated header/footer classification, deduplication, and content hashing to improve downstream document quality.",
            image: "/stuverse.png",
            link: "https://github.com/gouthamx67/enterprise-rag",
            tags: ["AI", "RAG", "LLM", "PyMuPDF", "Python"],
        },
    ],

    blogs: [
        {
            id: "1",
            title: "Not Hacked — Misclassified",
            excerpt: "Broken trust signals triggered the malicious flag. Fixing OAuth, domain verification, and compliance restored trust.",
            link: "https://www.linkedin.com/feed/update/urn:li:activity:7427236210273681409/",
        },
    ],
    socials: [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/gouthamx67/", icon: "Linkedin" },
        { name: "GitHub", url: "https://github.com/gouthamx67", icon: "Github" },
        { name: "Twitter", url: "https://x.com/gouthamx67", icon: "Twitter" },
        { name: "Email", url: "mailto:gouthamec27@gmail.com", icon: "Mail" },
    ],
};
