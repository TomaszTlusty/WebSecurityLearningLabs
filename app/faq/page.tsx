"use client"

import { useState } from "react"
import Link from "next/link"

interface FAQItem {
    id: number
    question: string
    answer: string
    category: string
}

const faqs: FAQItem[] = [
    {
        id: 1,
        category: "GENERAL",
        question: "What is WebSecurity Learning Labs?",
        answer:
            "WebSecurity Learning Labs is a hands-on platform for learning web security concepts through structured paths, interactive modules, and real-world challenges. Whether you're a beginner or an experienced developer, there's a path for you.",
    },
    {
        id: 2,
        category: "GENERAL",
        question: "How do I get started?",
        answer:
            "Head to the Dashboard and pick a Learning Path that matches your skill level. Each path is broken into focused modules — complete them in order to build a solid foundation, or jump to topics you need most.",
    },
    {
        id: 3,
        category: "PROGRESS",
        question: "How are badges earned?",
        answer:
            "Badges are awarded automatically when you complete a module, finish a learning path, or hit certain milestones. You can view all your earned and available badges from the My Badges page.",
    },
    {
        id: 4,
        category: "PROGRESS",
        question: "Does my progress save automatically?",
        answer:
            "Yes — your progress is saved in real time. You can close the browser and pick up exactly where you left off. Nothing is lost between sessions.",
    },
    {
        id: 5,
        category: "ACCOUNT",
        question: "How do I change my username or password?",
        answer:
            "Visit the Settings page from the sidebar. From there you can update your display name, email, password, and notification preferences.",
    },
    {
        id: 6,
        category: "ACCOUNT",
        question: "Can I delete my account?",
        answer:
            "Yes. Go to Settings → Account → Danger Zone. Account deletion is permanent and removes all your progress and badges.",
    },
]

const categories = Array.from(new Set(faqs.map((f) => f.category)))

export default function FAQPage() {
    const [openId, setOpenId] = useState<number | null>(null)
    const [activeCategory, setActiveCategory] = useState<string>("ALL")

    const toggle = (id: number) => setOpenId(openId === id ? null : id)

    const filtered =
        activeCategory === "ALL"
            ? faqs
            : faqs.filter((f) => f.category === activeCategory)

    return (
        <main className="min-h-screen bg-black px-6 py-16 text-white">
            <div className="mx-auto max-w-2xl">

                {/* Header */}
                <div className="mb-12">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/40">
                        Get Help
                    </p>
                    <h1 className="mb-4 text-4xl font-bold tracking-tight text-white">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-sm leading-relaxed text-white/50">
                        Can&#39;t find what you&#39;re looking for?{" "}
                        <Link
                            href="https://github.com/FarciarzYT/WebSecurityLearningLabs"
                            className="text-white/80 underline underline-offset-4 transition-colors hover:text-white"
                        >
                            Open an issue on GitHub →
                        </Link>
                    </p>
                </div>

                {/* Category filter */}
                <div className="mb-8 flex flex-wrap gap-2">
                    {["ALL", ...categories].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`rounded-lg border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                                activeCategory === cat
                                    ? "border-white/20 bg-white/10 text-white"
                                    : "border-white/10 bg-transparent text-white/40 hover:border-white/20 hover:text-white/70"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Accordion */}
                <div className="flex flex-col gap-2">
                    {filtered.map((faq, i) => {
                        const isOpen = openId === faq.id
                        return (
                            <div
                                key={faq.id}
                                className={`rounded-lg border transition-colors duration-200 ${
                                    isOpen
                                        ? "border-white/10 bg-white/5"
                                        : "border-white/10 bg-transparent hover:bg-white/4"
                                }`}
                            >
                                <button
                                    onClick={() => toggle(faq.id)}
                                    aria-expanded={isOpen}
                                    className="flex w-full items-start gap-4 px-5 py-4 text-left"
                                >
                  <span className="mt-0.5 min-w-5 text-xs font-semibold tabular-nums text-white/25">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                                    <span className="flex-1 text-sm font-medium leading-snug text-white/80">
                    {faq.question}
                  </span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className={`mt-0.5 shrink-0 text-white/30 transition-transform duration-300 ${
                                            isOpen ? "rotate-180" : "rotate-0"
                                        }`}
                                    >
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                        isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                                >
                                    <p className="px-5 pb-5 pl-9 text-sm font-normal leading-relaxed text-white/50">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                
                <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-lg border border-white/10 bg-white/2 px-6 py-5 backdrop-blur-md">
                    <div>
                        <p className="text-sm font-semibold text-white">Still stuck?</p>
                        <p className="text-xs text-white/40">
                            The community and docs are here to help.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <Link
                            href="https://github.com/FarciarzYT/WebSecurityLearningLabs"
                            className="rounded-lg border border-white/10 bg-white/4 px-4 py-2 text-xs font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                        >
                            GitHub
                        </Link>
                        <Link
                            href="/dashboard"
                            className="rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-white/20"
                        >
                            Back to Dashboard
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}