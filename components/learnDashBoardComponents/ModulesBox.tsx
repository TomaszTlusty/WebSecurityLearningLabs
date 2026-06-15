"use client";

import Link from "next/link";
import { FaLock } from "react-icons/fa";
import { FaArrowRight, FaCircleCheck, FaCirclePlay } from "react-icons/fa6";

const modules = [
    { id: "0001", title: "IDOR - User Profile Access",   status: "completed" as const, progress: 100 },
    { id: "0002", title: "SQL Injection - Login Bypass",  status: "completed" as const, progress: 100 },
    { id: "0003", title: "Directory Traversal - Basic",   status: "current"   as const, progress: 45  },
    { id: "0004", title: "XSS - Reflected Payload",       status: "locked"    as const, progress: 0   },
];

const completedCount  = modules.filter((m) => m.status === "completed").length;
const progressPercent = Math.round((completedCount / modules.length) * 100);

export default function ModulesBox() {
    return (
        <section className="mb-8 w-full rounded-3xl backdrop-blur-xl overflow-hidden bg-white/2 border border-white/10">

            {/* Header */}
            <div className="px-6 pt-6 pb-5 border-b border-white/8">
                <span className="block mb-3 text-[10px] tracking-widest uppercase font-mono text-primary/70">
                    {"// current path"}
                </span>
                <div className="flex items-center justify-between gap-4 mb-5">
                    <div>
                        <h3 className="text-lg font-bold text-white tracking-tight">
                            Web Security Foundations
                        </h3>
                        <p className="text-xs text-white/30 mt-0.5 font-mono">
                            4 modules · ~19h estimated
                        </p>
                    </div>
                    <Link
                        href="/module/0003"
                        className="shrink-0 flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200 group/link"
                    >
                        <span>Continue</span>
                        <FaArrowRight className="text-[10px] -translate-x-0.5 group-hover/link:translate-x-0 transition-transform duration-150" />
                    </Link>
                </div>

                {/* Progress */}
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between text-[10px] text-white/30 font-mono">
                        <span>{completedCount} / {modules.length} completed</span>
                        <span>{progressPercent}%</span>
                    </div>
                    <div className="h-1 w-full rounded-full bg-white/8 overflow-hidden">
                        <div
                            className="h-full rounded-full bg-gradient-to-r from-sky-500 to-emerald-400 transition-all duration-700"
                            style={{ width: `${progressPercent}%` }}
                        />
                    </div>
                </div>
            </div>

            {/* Module list */}
            <ol className="flex flex-col">
                {modules.map((mod, i) => (
                    <li
                        key={mod.id}
                        className={`relative flex items-center gap-4 px-6 py-4 border-b border-white/5 last:border-0 transition-all duration-150 ${
                            mod.status === "current"  ? "bg-sky-500/5" :
                            mod.status === "locked"   ? "opacity-30"   :
                            "hover:bg-white/2"
                        }`}
                    >
                        {/* Active indicator */}
                        {mod.status === "current" && (
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 rounded-full bg-sky-400" />
                        )}

                        {/* Icon */}
                        <div className="shrink-0">
                            {mod.status === "completed" && <FaCircleCheck className="size-4 text-emerald-400" />}
                            {mod.status === "current"   && <FaCirclePlay  className="size-4 text-sky-400" />}
                            {mod.status === "locked"    && <FaLock         className="size-3.5 text-white/30" />}
                        </div>

                        {/* Number */}
                        <span className="text-[10px] text-white/20 font-mono w-4 shrink-0 tabular-nums">
                            {String(i + 1).padStart(2, "0")}
                        </span>

                        {/* Title */}
                        <span className={`text-sm flex-1 leading-snug ${
                            mod.status === "completed" ? "text-white/40 line-through decoration-white/20" :
                            mod.status === "current"   ? "text-white font-medium" :
                                                         "text-white/50"
                        }`}>
                            {mod.title}
                        </span>

                        {/* Right side */}
                        <div className="shrink-0 flex items-center gap-3">
                            {mod.status === "completed" && (
                                <span className="text-[10px] font-mono text-emerald-400/50 uppercase tracking-wider">Done</span>
                            )}
                            {mod.status === "current" && (
                                <div className="flex items-center gap-2">
                                    <div className="w-16 h-0.5 rounded-full bg-white/10 overflow-hidden hidden sm:block">
                                        <div className="h-full rounded-full bg-sky-400" style={{ width: `${mod.progress}%` }} />
                                    </div>
                                    <span className="text-[10px] font-mono text-sky-400 tabular-nums w-7 text-right">
                                        {mod.progress}%
                                    </span>
                                </div>
                            )}
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    );
}
