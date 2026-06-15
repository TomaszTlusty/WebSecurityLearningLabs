import Link from "next/link";
import { FaCheckCircle, FaPlayCircle, FaCircle } from "react-icons/fa";
import { FaArrowRight, FaDoorOpen } from "react-icons/fa6";
import React from "react";

const modules = [
    { id: 1, title: "Introduction to Networks",   status: "completed" as const },
    { id: 2, title: "Network Topologies",          status: "completed" as const },
    { id: 3, title: "The OSI Model",               status: "completed" as const },
    { id: 4, title: "TCP/IP Fundamentals",         status: "current"   as const },
    { id: 5, title: "Packet Analysis Basics",      status: "locked"    as const },
    { id: 6, title: "Wireshark Deep Dive",         status: "locked"    as const },
    { id: 7, title: "Traffic Pattern Recognition", status: "locked"    as const },
    { id: 8, title: "Final Assessment",            status: "locked"    as const },
];

const completedCount  = modules.filter((m) => m.status === "completed").length;
const progressPercent = Math.round((completedCount / modules.length) * 100);

function StatusIcon({ status }: { status: "completed" | "current" | "locked" }) {
    if (status === "completed") return <FaCheckCircle className="size-4 shrink-0 text-emerald-400" />;
    if (status === "current")   return <FaPlayCircle  className="size-4 shrink-0 text-sky-300" />;
    return                             <FaCircle      className="size-4 shrink-0 text-white/20" />;
}

export default function ModulesBox() {
    return (
        <section className="bg-white/2 mb-8 border border-white/10 w-full mx-auto rounded-3xl backdrop-blur-md p-6">

            {/* Header row */}
            <div className="flex items-start justify-between gap-4 max-w-lg mx-auto">
                <div>
                    <span className="text-xs text-white/40 uppercase tracking-widest font-medium">Current Path</span>
                    <h3 className="text-2xl text-white font-bold tracking-tight mt-0.5">
                        Intro to Network Analysis
                    </h3>
                </div>

                <Link
                    href="/modules/"
                    className="flex items-center gap-1.5 shrink-0 text-sm font-semibold text-white  mt-1 transition-colors duration-150 group/link"
                >
                    <FaDoorOpen className="text-xs" />
                    <span>Continue</span>
                    <FaArrowRight className="text-xs opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-150" />
                </Link>
            </div>

            {/* Progress bar */}
            <div className="mt-4 max-w-lg mx-auto flex flex-col gap-1.5">
                <div className="flex justify-between text-xs text-white/35">
                    <span>{completedCount} of {modules.length} modules complete</span>
                    <span>{progressPercent}%</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                    <div
                        className="h-full rounded-full bg-linear-to-r from-sky-400 to-emerald-400 transition-all duration-500"
                        style={{ width: `${progressPercent}%` }}
                    />
                </div>
            </div>

            {/* Module list */}
            <ol className="mt-6 flex flex-col gap-1 max-w-lg mx-auto">
                {modules.map((mod) => (
                    <li
                        key={mod.id}
                        className={`flex items-center gap-3 rounded-2xl px-4 py-2.5 transition-all duration-150 ${
                            mod.status === "current"
                                ? "bg-white/8 border border-white/15"
                                : mod.status === "locked"
                                    ? "opacity-40"
                                    : "hover:bg-white/2"
                        }`}
                    >
                        <StatusIcon status={mod.status} />

                        <span className="text-xs text-white/30 font-mono w-5 shrink-0">
                            {String(mod.id).padStart(2, "0")}
                        </span>

                        <span className={`text-sm flex-1 ${
                            mod.status === "completed" ? "text-white/50 line-through"  :
                                mod.status === "current"   ? "text-white font-medium"      :
                                    "text-white/50"
                        }`}>
                            {mod.title}
                        </span>

                        {mod.status === "current" && (
                            <span className="text-xs bg-sky-400/15 text-sky-300 px-2 py-0.5 rounded-full font-medium">
                                In Progress
                            </span>
                        )}
                    </li>
                ))}
            </ol>
        </section>
    );
}