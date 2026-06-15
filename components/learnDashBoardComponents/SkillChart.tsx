"use client"

import Link from "next/link";
import { FaArrowRight, FaBookSkull } from "react-icons/fa6";

const STATS = [
    { label: "Mindset", value: 34, color: "from-violet-500 to-purple-400" },
    { label: "Defense", value: 67, color: "from-sky-500 to-cyan-400" },
    { label: "Offense", value: 47, color: "from-rose-500 to-orange-400" },
]

export default function SkillChart() {
    return (
        <div className="bg-white/2 w-full max-w-xl mx-auto 2xl:mx-0 backdrop-blur-xl rounded-3xl p-6 border border-white/10 mb-8 2xl:mb-0 flex flex-col">
            <span className="block mb-4 text-sm tracking-widest uppercase font-mono text-primary/90">
                {"// your stats"}
            </span>
            <h2 className="text-white text-2xl font-bold tracking-tight mb-8">Skill Breakdown</h2>

            <div className="flex flex-col gap-6 flex-1">
                {STATS.map((stat) => (
                    <div key={stat.label} className="flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-white/60 font-medium tracking-wide">{stat.label}</span>
                            <span className="text-sm text-white font-bold tabular-nums">{stat.value}<span className="text-white/30 font-normal">/100</span></span>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-white/8 overflow-hidden">
                            <div
                                className={`h-full rounded-full bg-gradient-to-r ${stat.color}`}
                                style={{ width: `${stat.value}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 pt-5 border-t border-white/8 flex items-center justify-between gap-3">
                <p className="text-white/40 text-sm">Boost your skills</p>
                <Link
                    href="/modules"
                    className="flex items-center gap-1.5 text-sm font-semibold text-white/60 hover:text-white transition-colors duration-150 group/cta"
                >
                    <FaBookSkull className="text-xs" />
                    <span>Get Started</span>
                    <FaArrowRight className="text-xs opacity-0 -translate-x-1 group-hover/cta:opacity-100 group-hover/cta:translate-x-0 transition-all duration-150" />
                </Link>
            </div>
        </div>
    )
}
