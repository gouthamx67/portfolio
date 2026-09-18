"use client";
import { motion } from "framer-motion";
import Typewriter from "./Typewriter";

export default function Hero({ name, role, bio }: { name: string, role: string, bio: string }) {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
            <div className="container relative z-10 text-center max-w-4xl px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <span className="script-text text-2xl mb-4 block">
                        Hello, I am {name}
                    </span>
                    <h1 style={{ fontSize: 'clamp(3rem, 10vw, 7rem)', lineHeight: 1.1, marginBottom: '2rem' }}>
                        {role.split(' ').map((word, i) => (
                            <span key={i} style={{ display: 'inline-block', marginRight: '0.2em' }}>{word}</span>
                        ))}
                    </h1>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        style={{ maxWidth: '600px' }}
                    >
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                            <Typewriter text={bio} />
                        </p>
                    </motion.div>
                </motion.div>
            </div>

            {/* Background Glows */}
            <div style={{
                position: 'absolute',
                top: '10%',
                right: '5%',
                width: '40vw',
                height: '40vw',
                background: 'radial-gradient(circle, var(--glow-blue) 0%, transparent 70%)',
                zIndex: -1,
                borderRadius: '50%'
            }} />
        </section>
    );
}
