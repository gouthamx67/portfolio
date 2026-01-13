"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

export default function Typewriter({ text }: { text: string }) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) => text.slice(0, latest));
    const [done, setDone] = useState(false);

    useEffect(() => {
        const controls = animate(count, text.length, {
            type: "tween",
            duration: 3,
            ease: "linear",
            onComplete: () => setDone(true),
        });
        return controls.stop;
    }, [text.length, count]);

    return (
        <span className="typewriter">
            <motion.span>{displayText}</motion.span>
            {!done && (
                <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    style={{
                        display: "inline-block",
                        width: "2px",
                        height: "1em",
                        backgroundColor: "white",
                        marginLeft: "2px",
                        verticalAlign: "middle",
                    }}
                />
            )}
        </span>
    );
}
