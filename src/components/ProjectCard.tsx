"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
}

export default function ProjectCard({ title, description, image, tags, link }: ProjectCardProps) {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="glass transition-standard"
            style={{ overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}
        >
            <div style={{ position: 'relative', height: '240px', width: '100%' }}>
                <Image
                    src={image}
                    alt={title}
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                    {tags.map(tag => (
                        <span key={tag} style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', border: '1px solid var(--card-border)', padding: '0.2rem 0.8rem', borderRadius: '100px' }}>
                            {tag}
                        </span>
                    ))}
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.5, marginBottom: '2rem', flexGrow: 1 }}>{description}</p>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-block',
                        width: 'fit-content',
                        padding: '0.8rem 1.5rem',
                        borderRadius: '100px',
                        background: 'white',
                        color: 'black',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        textTransform: 'uppercase'
                    }}
                >
                    View Project
                </a>
            </div>
        </motion.div>
    );
}
