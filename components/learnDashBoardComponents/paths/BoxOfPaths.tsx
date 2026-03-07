"use client";

import React, { useState } from "react";
import Link from "next/link";
import DifficultyBadge from "@/components/ui/DifficultyBadge";
import RoomType from "@/types/RoomType";
import { FaArrowRight, FaDoorOpen, FaClock } from "react-icons/fa6";
import { PathsData } from "@/Data/PathsData";
import BackgroundSVG from "@/components/ui/BackgroundSVG";
import FilterHeader from "@/components/learnDashBoardComponents/BoxHeader";

export default function PathsBox() {

    const [search, setSearch] = useState("")
    const [difficulty, setDifficulty] =
        useState<"All" | RoomType["difficulty"]>("All")

    const filtered = PathsData.filter(m => {
        const matchesSearch =
            m.title.toLowerCase().includes(search.toLowerCase())

        const matchesDifficulty =
            difficulty === "All" || m.difficulty === difficulty

        return matchesSearch && matchesDifficulty
    })

    return (
        <section className="w-full max-w-4xl 2xl:min-w-4xl mx-auto mt-16 mb-8 px-4 sm:px-0">
            <FilterHeader
                search={search}
                setSearch={setSearch}
                difficulty={difficulty}
                setDifficulty={setDifficulty}
                placeholder="Search Paths..."
            />
            <p className="text-xs text-white/30 font-mono mb-4 px-1">
                {filtered.length} Path{filtered.length !== 1 ? "s" : ""} found
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {filtered.length === 0 ? (
                    <p className="col-span-full text-center text-sm text-white/40 py-12">
                        No paths match your search.
                    </p>
                ) : (
                    filtered.map((Path) => (
                        <div
                            key={Path.id}
                            className="group flex flex-col p-5 w-full rounded-3xl border border-white/10 bg-white/2 hover:bg-white/5 hover:border-white/20 transition-all duration-200 backdrop-blur-md min-h-64"
                        >
                            <BackgroundSVG srcImg={Path.bgImg} />
                            <div className="flex items-center justify-between gap-3 mb-3">
                                <h3 className="font-semibold text-lg leading-snug text-white/90">{Path.title}</h3>
                                <DifficultyBadge difficulty={Path.difficulty} />
                            </div>

                            <p className="text-sm text-white/40 leading-relaxed flex-1 mb-5">
                                {Path.description}
                            </p>

                            <h4 className={"font-medium text-white/50"}>
                                Contains {Path.modulesCount} Modules
                            </h4>

                            <div className="flex items-center justify-between pt-3 border-t border-white/8">
                                <Link
                                    href={`/path/${Path.id}`}
                                    className="flex items-center gap-1.5 text-xs font-semibold text-white/70 hover:text-white transition-colors duration-150 group/link"
                                >
                                    <FaDoorOpen className="text-xs" />
                                    <span>Enroll</span>
                                    <FaArrowRight className="text-[10px] opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-150" />
                                </Link>

                                <span className="flex items-center gap-1 text-xs text-white/30 font-mono">
                                    <FaClock className="text-[10px]" />
                                    {Path.estimatedHours}h
                                </span>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
}