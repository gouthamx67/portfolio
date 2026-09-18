"use client";
import { motion } from "framer-motion";

interface SkillBadgeProps {
    name: string;
    variant?: "core" | "stack" | "tools";
}

export default function SkillBadge({ name, variant = "stack" }: SkillBadgeProps) {
    return (
        <motion.span
            whileHover={{ y: -2, transition: { duration: 0.15 } }}
            className={`skill-chip ${variant}`}
        >
            {name}
        </motion.span>
    );
}