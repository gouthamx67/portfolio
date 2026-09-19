"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Play } from "lucide-react";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
    demo?: string;
}

export default function ProjectCard({ title, description, image, tags, link, demo }: ProjectCardProps) {
    const [demoOpen, setDemoOpen] = useState(false);

    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="glass transition-standard"
            style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', borderRadius: '12px' }}
        >
            <div style={{ position: 'relative', height: '200px', width: '100%' }}>
                <Image
                    src={image}
                    alt={title}
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                    {tags.map(tag => (
                        <span key={tag} style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', border: '1px solid var(--card-border)', padding: '0.15rem 0.6rem', borderRadius: '100px' }}>
                            {tag}
                        </span>
                    ))}
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.4, marginBottom: '1.5rem', flexGrow: 1 }}>{description}</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-ghost"
                        style={{
                            width: 'fit-content',
                            fontSize: '0.78rem',
                            padding: '0.6rem 1.2rem',
                        }}
                    >
                        View project &rarr;
                    </a>
                    {demo && (
                        <button
                            type="button"
                            onClick={() => setDemoOpen(true)}
                            className="btn btn-primary"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                width: 'fit-content',
                                fontSize: '0.78rem',
                                padding: '0.6rem 1.2rem',
                            }}
                        >
                            <Play size={14} />
                            Watch demo
                        </button>
                    )}
                </div>
            </div>

            <AnimatePresence>
                {demoOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setDemoOpen(false)}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            zIndex: 1000,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '2rem',
                            backgroundColor: 'rgba(0, 0, 0, 0.85)',
                            backdropFilter: 'blur(6px)',
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                position: 'relative',
                                width: '100%',
                                maxWidth: '960px',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                backgroundColor: '#000',
                            }}
                        >
                            <button
                                type="button"
                                onClick={() => setDemoOpen(false)}
                                aria-label="Close demo"
                                style={{
                                    position: 'absolute',
                                    top: '12px',
                                    right: '12px',
                                    zIndex: 10,
                                    width: '36px',
                                    height: '36px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '50%',
                                    border: 'none',
                                    cursor: 'pointer',
                                    background: 'rgba(0, 0, 0, 0.6)',
                                    color: '#fff',
                                }}
                            >
                                <X size={20} />
                            </button>
                            <video
                                src={demo}
                                controls
                                autoPlay
                                playsInline
                                style={{ display: 'block', width: '100%', maxHeight: '80vh' }}
                            />
                            <p style={{ padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                {title} — Demo
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
