"use client";

import React, { useState } from "react";
import Link from "next/link";
import {FaArrowRight, FaDoorOpen, FaMagnifyingGlass} from "react-icons/fa6";
import { BadgesData } from "@/Data/BadgesData";

export default function BadgesBox() {
    const [search, setSearch] = useState("");
    const filtered = BadgesData.filter((m) => {
        return m.name.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <section className="w-full mx-auto mb-8">
            <span className="block mb-4 text-sm tracking-widest uppercase font-mono text-primary/90">
                {"// achievements"}
            </span>
            <h1 className="text-3xl font-bold text-white tracking-tight mb-6">My Badges</h1>
            <div className="bg-white/2 border border-white/10 p-4 rounded-3xl backdrop-blur-md mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="relative flex-1 max-w-xs">
                    <FaMagnifyingGlass className={"absolute left-3 top-1/2 -translate-y-1/2 text-white/25 w-4 h-4"}/>
                    <input
                        type="text"
                        placeholder="Search badges..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-2 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-white/30 focus:bg-white/8 transition-all"
                    />
                </div>
            </div>

            <p className="text-xs text-white/30 font-mono mb-4 px-1">
                {filtered.length} Badge{filtered.length !== 1 ? "s" : ""} found
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 min-h-16 w-full">
                {filtered.length === 0 ? (
                    <p className="col-span-full text-center text-sm text-white/40 py-12">
                        No badges match your search.
                    </p>
                ) : (
                    filtered.map((module) => (
                        <div
                            key={module.id}
                            className="group flex flex-col p-5 rounded-3xl border border-white/8 bg-white/2 hover:bg-white/5 hover:border-white/20 transition-all duration-200 backdrop-blur-md"
                        >
                            <div className="flex items-start justify-between gap-3 mb-3">
                                <h3 className="font-semibold text-sm leading-snug text-white/90">{module.name}</h3>
                            </div>
                            <p className="text-sm text-white/40 leading-relaxed flex-1 mb-5">
                                {module.locked ? "???" : module.description}
                            </p>
                            {!module.secret &&
                                <div className="flex items-center justify-between pt-3 border-t border-white/8">
                                    <Link
                                        href={module.id}
                                        className="flex items-center gap-1.5 text-xs font-semibold text-white/70 hover:text-white transition-colors duration-150 group/link"
                                    >
                                        <FaDoorOpen className="text-xs" />
                                        <span>Get Now</span>
                                        <FaArrowRight className="text-[10px] opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-150" />
                                    </Link>
                                </div>}
                        </div>
                    ))
                )}
            </div>
        </section>
    );
}