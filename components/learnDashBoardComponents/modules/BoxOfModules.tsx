"use client";

import React, { useState } from "react";
import Link from "next/link";
import DifficultyBadge from "@/components/ui/DifficultyBadge";
import RoomType from "@/types/RoomType";
import {FaArrowRight, FaDoorOpen, FaClock,} from "react-icons/fa6";
import { ModulesData } from "@/Data/ModulesData";
import FilterHeader from "@/components/learnDashBoardComponents/BoxHeader";

export default function ModulesBox() {
    const [search, setSearch] = useState("")
    const [difficulty, setDifficulty] =
        useState<"All" | RoomType["difficulty"]>("All")

    const filtered = ModulesData.filter(m => {
        const matchesSearch =
            m.title.toLowerCase().includes(search.toLowerCase())

        const matchesDifficulty =
            difficulty === "All" || m.difficulty === difficulty

        return matchesSearch && matchesDifficulty
    })

    return (
        <section className="w-full mx-auto mb-8">
            <span className="block mb-4 text-sm tracking-widest uppercase font-mono text-primary/90">
                {"// learn"}
            </span>
            <h1 className="text-3xl font-bold text-white tracking-tight mb-6">Modules</h1>
            <FilterHeader
                search={search}
                setSearch={setSearch}
                difficulty={difficulty}
                setDifficulty={setDifficulty}
                placeholder="Search Modules..."
            />

            <p className="text-xs text-white/30 font-mono mb-4 px-1">
                {filtered.length} module{filtered.length !== 1 ? "s" : ""} found
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 min-h-100 w-full">
                {filtered.length === 0 ? (
                    <p className="col-span-full text-center text-sm text-white/40 py-12">
                        No modules match your search.
                    </p>
                ) : (
                    filtered.map((module) => (
                        <div
                            key={module.id}
                            className="group flex flex-col p-5 rounded-3xl border border-white/8 bg-white/2 hover:bg-white/5 hover:border-white/20 transition-all duration-200 backdrop-blur-md"
                        >
                            <div className="flex items-start justify-between gap-3 mb-3">
                                <h3 className="font-semibold text-sm leading-snug text-white/90">{module.title}</h3>
                                <DifficultyBadge difficulty={module.difficulty} />
                            </div>

                            <p className="text-sm text-white/40 leading-relaxed flex-1 mb-5">
                                {module.description}
                            </p>

                            <div className="flex items-center justify-between pt-3 border-t border-white/8">
                                <Link
                                    href={`/module/${module.id}`}
                                    className="flex items-center gap-1.5 text-xs font-semibold text-white/70 hover:text-white transition-colors duration-150 group/link"
                                >
                                    <FaDoorOpen className="text-xs" />
                                    <span>Enroll</span>
                                    <FaArrowRight className="text-[10px] opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-150" />
                                </Link>

                                <span className="flex items-center gap-1 text-xs text-white/30 font-mono">
                                    <FaClock className="text-[10px]" />
                                    {module.estimatedHours}h
                                </span>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
}