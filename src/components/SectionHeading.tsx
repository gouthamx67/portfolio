"use client";
import { motion } from "framer-motion";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: '4rem' }}
        >
            <h2 style={{ fontSize: '4rem', textTransform: 'uppercase', lineHeight: 1 }}>{title}</h2>
            {subtitle && <p className="script-text" style={{ fontSize: '1.5rem', marginTop: '0.5rem' }}>{subtitle}</p>}
        </motion.div>
    );
}
