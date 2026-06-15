import RoomType from "@/types/RoomType";
import DifficultyBadge from "@/components/ui/DifficultyBadge";
import Link from "next/link";
import { FaArrowRight, FaDoorOpen } from "react-icons/fa6";

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
        slug: "1002",
    },
]

export default function SuggestedModules() {
    return (
        <section className="mb-8 w-full">
            <span className="block mb-4 text-xs tracking-widest uppercase font-mono text-primary/80">
                {"// for you"}
            </span>
            <h2 className="text-lg font-bold text-white tracking-tight mb-4">Suggested Next</h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {SUGGESTED.map((module, i) => (
                    <div
                        key={module.title}
                        className="group flex flex-col gap-3 bg-white/2 backdrop-blur-xl border border-white/8 hover:border-white/20 hover:bg-white/4 rounded-3xl p-5 transition-all duration-200"
                    >
                        <div className="flex items-start justify-between gap-2">
                            <span className="text-xs font-mono text-white/20 tabular-nums">
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <DifficultyBadge difficulty={module.difficulty} />
                        </div>

                        <div className="flex-1">
                            <h3 className="text-white font-semibold text-sm leading-snug mb-2">
                                {module.title}
                            </h3>
                            <p className="text-white/35 text-xs leading-relaxed line-clamp-3">
                                {module.description}
                            </p>
                        </div>

                        <Link
                            href={`/module/${module.slug}`}
                            className="flex items-center gap-1.5 text-xs font-semibold text-white/50 hover:text-white w-fit transition-colors duration-150 group/link mt-1"
                        >
                            <FaDoorOpen className="text-[10px]" />
                            <span>Enroll</span>
                            <FaArrowRight className="text-[10px] opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-150" />
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}
