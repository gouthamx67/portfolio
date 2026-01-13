"use client";
import { motion } from "framer-motion";

export default function SkillBadge({ name }: { name: string }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05, borderColor: 'white' }}
            style={{
                padding: '0.8rem 2rem',
                borderRadius: '100px',
                border: '1px solid var(--card-border)',
                fontSize: '1.2rem',
                fontWeight: 500,
                cursor: 'default',
                background: 'rgba(255, 255, 255, 0.02)'
            }}
            className="transition-standard"
        >
            {name}
        </motion.div>
    );
}
