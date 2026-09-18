"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {

    const [active, setActive] = useState<string>("");
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        const sections = navItems
            .map(i => document.querySelector(i.href))
            .filter((el): el is Element => el !== null);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(`#${entry.target.id}`);
                    }
                });
            },
            { rootMargin: "-45% 0px -50% 0px" }
        );

        sections.forEach(s => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div style={{
                position: 'fixed',
                top: '2rem',
                left: '2rem',
                zIndex: 101,
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
            }}>
                <div className="monogram">GRK</div>
                <span className="brand-mark" style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', letterSpacing: '0.18em' }}>
                    GOUTHAM<span className="brand-cursor" style={{ width: '0.5em', height: '1em' }} />
                </span>
            </div>

            {/* Desktop nav */}
            <nav style={{
                position: 'fixed',
                top: '2.1rem',
                right: '2rem',
                zIndex: 100,
                width: 'fit-content',
            }}>
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="glass desktop-nav"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1.9rem',
                        padding: '0.7rem 1.6rem',
                        borderRadius: '14px',
                    }}
                >
                    {navItems.map(item => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`nav-link ${active === item.href ? 'active' : ''}`}
                        >
                            {active === item.href && <span className="nav-dot" />}
                            {item.name}
                        </Link>
                    ))}
                </motion.div>
            </nav>

            {/* Mobile hamburger */}
            <button
                aria-label="Toggle navigation menu"
                onClick={() => setMenuOpen(prev => !prev)}
                className="glass mobile-nav-toggle"
                style={{
                    position: 'fixed',
                    top: '2.1rem',
                    right: '1.25rem',
                    zIndex: 102,
                    display: 'none',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    border: 'none',
                    color: 'var(--text-primary)',
                    cursor: 'pointer',
                }}
            >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Mobile menu panel */}
            {menuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="glass mobile-menu"
                    style={{
                        position: 'fixed',
                        top: '5.5rem',
                        left: '1.25rem',
                        right: '1.25rem',
                        zIndex: 101,
                        borderRadius: '14px',
                        padding: '0.75rem',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    {navItems.map(item => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setMenuOpen(false)}
                            className={`nav-link ${active === item.href ? 'active' : ''}`}
                            style={{
                                padding: '0.9rem 1rem',
                                borderRadius: '10px',
                                fontSize: '0.95rem',
                            }}
                        >
                            {active === item.href && <span className="nav-dot" />}
                            {item.name}
                        </Link>
                    ))}
                </motion.div>
            )}
        </>
    );
}