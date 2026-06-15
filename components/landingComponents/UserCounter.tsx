"use client";

import { motion } from "motion/react";
import NumberFlow from "@number-flow/react";
import { ImLab } from "react-icons/im";
import { FaUser, FaCrosshairs } from "react-icons/fa6";

const LabsItems = [
    { title: "Labs\nAvailable", icon: <ImLab size={28} aria-hidden="true" />, value: 3 },
    { title: "Users\nActive", icon: <FaUser size={28} aria-hidden="true" />, value: 124 },
    { title: "Exploits\nCompleted", icon: <FaCrosshairs size={28} aria-hidden="true" />, value: 624 },
];

export default function UserCounter() {
    return (
        <section aria-labelledby="stats-heading" className="mt-16 mb-16 text-center">
            <motion.h2
                id="stats-heading"
                className="font-extrabold text-3xl mb-12 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                Stats
            </motion.h2>

            <dl className="flex items-start justify-center gap-20 flex-wrap">
                {LabsItems.map(({ title, icon, value }, i) => (
                    <motion.div
                        key={title}
                        className="flex flex-col items-center gap-2"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                        <span className="text-white/90 mb-1">{icon}</span>
                        <dt className="text-sm text-white/85 leading-snug whitespace-pre-line">
                            {title}
                        </dt>
                        <dd className="font-bold text-white text-3xl mt-1">
                            <NumberFlow
                                transformTiming={{ duration: 600, easing: "ease-out" }}
                                value={value}
                            />
                        </dd>
                    </motion.div>
                ))}
            </dl>
        </section>
    );
}
