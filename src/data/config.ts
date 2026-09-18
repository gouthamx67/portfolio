export const portfolioData = {
    name: "Goutham",
    role: "Full Stack Developer | Applied AI Engineer",
    bio: "Full-Stack Developer & AI Integration Specialist experienced in designing, building, and shipping web and AI-driven applications end-to-end. Focused on applied AI: integrating LLMs into real products, building Retrieval-Augmented Generation (RAG) pipelines, fine-tuning models for domain-specific behavior, and creating Agentic AI systems. Comfortable across both JavaScript/TypeScript and Python stacks, with a track record of turning research-stage AI ideas into working, user-facing features.",
    skills: {
        core: {
            "Full-Stack": ["JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Node.js", "Express.js", "NestJS"],
            "Applied AI · LLM": ["LLM Integration", "RAG Pipelines", "Agentic AI", "Model Fine-Tuning", "Prompt Engineering"],
        },
        stack: {
            "Front-End": ["HTML5", "CSS3", "Redux", "Bootstrap", "Angular"],
            "Back-End": ["REST APIs", "WebSockets", "OAuth Authentication", "Python", "PHP"],
            "Databases & ORM": ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Prisma ORM"],
        },
        tools: {
            "AI Libraries": ["LangChain", "PyTorch", "TensorFlow", "OpenCV", "Generative AI", "AI Automation", "n8n", "Zapier"],
            "Platforms": ["GitHub", "Docker", "Kubernetes", "Linux CLI", "Figma", "Cloudinary", "Vercel", "Postman"],
        },
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
            title: "VisionIQ — Image Quality Analysis",
            description: "Built an image-quality analysis application that detects blur, motion blur, noise, compression artifacts, and exposure issues using a hierarchical ML pipeline. Implemented a two-stage Random Forest classification flow with independent computer-vision gates and final quality scoring; evaluated on 112 samples with 73.21% final accuracy.",
            image: "/vision.png",
            link: "https://github.com/gouthamx67/visioniq",
            tags: ["AI", "Machine Learning", "Computer Vision", "FastAPI", "React"],
        },
        {
            id: "2",
            title: "Enterprise Research Intelligence — RAG Engine",
            description: "Built a modular document-ingestion and preprocessing foundation for enterprise research intelligence / RAG workflows. Implemented layout-aware PDF extraction with PyMuPDF, including page/block metadata and font, size, flags, and bounding-box information. Added conservative text normalization, artifact filtering, repeated header/footer classification, deduplication, and content hashing to improve downstream document quality.",
            image: "/rag.png",
            link: "https://github.com/gouthamx67/enterprise-rag",
            tags: ["AI", "RAG", "LLM", "PyMuPDF", "Python"],
        },
        {
            id: "3",
            title: "AI Gym Trainer",
            description: "AI Gym Trainer corrects your workout form in real time using camera-based pose detection, and suggests personalized corrections to help you train safely and effectively.",
            image: "/image.png",
            link: "https://github.com/gouthamx67/ai-gym-trainer",
            tags: ["AI", "Pose Detection", "Computer Vision"],
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
