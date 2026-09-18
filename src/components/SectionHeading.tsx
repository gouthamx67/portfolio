"use client";
import { motion } from "framer-motion";

interface SectionHeadingProps {
    title: string;
}

export default function SectionHeading({ title }: SectionHeadingProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ marginBottom: '3rem' }}
        >
            <h2 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.5rem)', lineHeight: 1.05 }}>{title}</h2>
        </motion.div>
    );
}