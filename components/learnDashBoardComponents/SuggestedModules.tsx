import RoomType from "@/types/RoomType";
import DifficultyBadge from "@/components/ui/DifficultyBadge";

import Link from "next/link";
import React from "react";
import { FaBookSkull, FaArrowRight } from "react-icons/fa6";

const SUGGESTED: {
    title: string
    difficulty: RoomType["difficulty"]
    description: string
    slug: string
}[] = [
    {
        title: "Linux Fundamentals",
        description: "Master the command line, file systems, and core Unix tools used in every professional environment.",
        difficulty: "Easy",
        slug: "1000",
    },
    {
        title: "Networking Basics",
        description: "Understand TCP/IP, DNS, and how data moves across the modern internet.",
        difficulty: "Medium",
        slug: "1001",
    },
    {
        title: "Web Exploitation",
        description: "Discover common vulnerabilities like XSS, SQLi, and IDOR through hands-on challenges.",
        difficulty: "Hard",
        slug: "1001",
    },
];

export default function SuggestedModules() {
    return (
        <section className="bg-white/2 w-full max-w-xl mx-auto 2xl:mx-0 backdrop-blur-md rounded-3xl p-6 border border-white/10">
            <header className="mb-6">
                <h2 className="text-white text-2xl font-bold tracking-tight">
                    Suggested Modules
                </h2>
                <p className="text-white/50 text-sm mt-1">Curated paths to level up your skills</p>
            </header>

            <ul className="flex flex-col gap-3">
                {SUGGESTED.map((module) => (
                    <li
                        key={module.title}
                        className="group flex flex-col gap-2 bg-white/2  border border-white/10 hover:border-white/20 rounded-3xl p-4 transition-all duration-200"
                    >
                        <div className="flex items-start justify-between gap-2">
                            <h3 className="text-white font-semibold text-base leading-tight">
                                {module.title}
                            </h3>
                            <DifficultyBadge difficulty={module.difficulty} />
                        </div>

                        <p className="text-white/55 text-sm leading-relaxed line-clamp-2">
                            {module.description}
                        </p>

                        <Link
                            href={`/module/${module.slug}`}
                            className="flex items-center gap-1.5 text-sm font-semibold text-white/70 hover:text-white w-fit mt-1 transition-colors duration-150 group/link"
                        >
                            <FaBookSkull className="text-xs" />
                            <span>Enroll</span>
                            <FaArrowRight className="text-xs opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-150" />
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}