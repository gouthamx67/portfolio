"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
    const navItems = [
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Blogs", href: "#blogs" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <>
            <div style={{
                position: 'fixed',
                top: '2.5rem',
                left: '2rem',
                zIndex: 101,
            }}>
                <span className="logo-silver">GRK</span>
            </div>
            <nav style={{
                position: 'fixed',
                top: '2rem',
                right: '5rem',
                zIndex: 100,
                width: 'fit-content'
            }}>
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="glass"
                    style={{
                        display: 'flex',
                        gap: '2rem',
                        padding: '1rem 3rem',
                        borderRadius: '100px',
                    }}
                >
                    {navItems.map(item => (
                        <Link key={item.name} href={item.href} style={{
                            fontSize: '0.9rem',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            color: 'var(--text-secondary)',
                            transition: 'color 0.2s'
                        }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
                            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                        >
                            {item.name}
                        </Link>
                    ))}
                </motion.div>
            </nav>
        </>
    );
}
