"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero({ name, role, bio }: { name: string; role: string; bio: string }) {
    const roleLines = role.split(" | ");

    return (
        <section
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <div
                className="container hero-grid"
                style={{
                    width: '100%',
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 0.85fr)',
                    gap: 'clamp(2.5rem, 6vw, 5rem)',
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: 1,
                    paddingTop: '4rem',
                    paddingBottom: '3rem',
                }}
            >
                {/* Left: copy */}
                <div>
                    {/* whoami terminal line */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <span
                            style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.82rem',
                                color: 'var(--text-secondary)',
                                letterSpacing: '0.05em',
                                display: 'block',
                                marginBottom: '1.5rem',
                            }}
                        >
                            $ whoami <span style={{ color: 'var(--accent)' }}>{`// ${name}`}</span>
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.7, ease: 'easeOut' }}
                        style={{
                            fontSize: 'clamp(2.6rem, 6vw, 4.5rem)',
                            lineHeight: 1.05,
                            marginBottom: '1rem',
                        }}
                    >
                        {roleLines.map((line, i) => (
                            <span key={i} style={{ display: 'block' }}>
                                {i === roleLines.length - 1 ? (
                                    <span style={{ color: 'var(--accent)' }}>{line}</span>
                                ) : (
                                    line
                                )}
                            </span>
                        ))}
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.25, duration: 0.7 }}
                        style={{
                            marginBottom: '1.75rem',
                            fontFamily: 'var(--font-mono)',
                            fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)',
                            color: 'var(--accent)',
                            fontWeight: 500,
                        }}
                    >
                        $ I don&rsquo;t just build the stack — I make it think.
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.35, duration: 0.7 }}
                        style={{
                            color: 'var(--text-secondary)',
                            lineHeight: 1.65,
                            maxWidth: '42ch',
                            fontSize: '1rem',
                            marginBottom: '2.25rem',
                        }}
                    >
                        {bio}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap', alignItems: 'center' }}
                    >
                        <a href="mailto:gouthamec27@gmail.com" className="btn btn-primary">
                            Get in touch
                        </a>
                        <a href="#projects" className="btn btn-ghost">
                            View work &rarr;
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        style={{
                            marginTop: '2.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.65rem',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.75rem',
                            color: 'var(--text-secondary)',
                        }}
                    >
                        <span
                            style={{
                                width: '7px',
                                height: '7px',
                                borderRadius: '50%',
                                background: '#22c55e',
                                boxShadow: '0 0 8px rgba(34,197,94,0.5)',
                            }}
                        />
                        Available for opportunities
                    </motion.div>
                </div>

                {/* Right: portrait */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <div style={{ position: 'relative' }}>
                        {/* accent halo */}
                        <div
                            style={{
                                position: 'absolute',
                                inset: -14,
                                borderRadius: '50%',
                                background: 'radial-gradient(circle, rgba(109,93,255,0.16) 0%, transparent 68%)',
                                zIndex: 0,
                            }}
                        />
                        {/* ring */}
                        <div
                            style={{
                                position: 'absolute',
                                inset: -4,
                                borderRadius: '50%',
                                border: '1px solid var(--accent-line)',
                                zIndex: 1,
                            }}
                        />
                        <div
                            style={{
                                width: 'clamp(13rem, 30vw, 22rem)',
                                height: 'clamp(13rem, 30vw, 22rem)',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                border: '6px solid var(--bg-color)',
                                position: 'relative',
                                zIndex: 2,
                                background: 'var(--card-bg)',
                            }}
                        >
                            <Image
                                src="/portrait.png"
                                alt={`Portrait of ${name}`}
                                width={400}
                                height={400}
                                priority
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    {/* terminal-style caption */}
                    <span
                        style={{
                            marginTop: '1.25rem',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.72rem',
                            color: 'var(--text-secondary)',
                            letterSpacing: '0.04em',
                        }}
                    >
                        <span style={{ color: 'var(--accent)' }}>~/</span>me.png
                    </span>
                    <span
                        style={{
                            marginTop: '0.6rem',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.85rem',
                            color: 'var(--text-primary)',
                            letterSpacing: '0.02em',
                            textAlign: 'center',
                        }}
                    >
                        retrieved · grounded · shipped<span style={{ color: 'var(--accent)' }}>.</span>
                    </span>
                </motion.div>
            </div>

            {/* Subtle background gradient — restrained, not decorative blobs */}
            <div
                style={{
                    position: 'absolute',
                    top: '25%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '60vw',
                    height: '60vw',
                    background: 'radial-gradient(circle, rgba(109,93,255,0.05) 0%, transparent 65%)',
                    pointerEvents: 'none',
                    zIndex: 0,
                }}
            />
        </section>
    );
}