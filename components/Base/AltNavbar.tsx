"use client"

import Link from "next/link"
import { useState, useEffect, useCallback } from "react"
import { LuFlame, LuStar } from "react-icons/lu"

export interface NavSection {
    heading: string
    links: NavLink[]
}

export interface NavLink {
    label: string
    href: string
}

interface SideNavbarProps {
    username?: string
    userRank?: string
    streak?: number
    level?: number
    sections?: NavSection[]
}

const defaultSections: NavSection[] = [
    {
        heading: "GENERAL",
        links: [
            { label: "Dashboard", href: "/learn" },
            { label: "Paths", href: "/learn/paths" },
            { label: "Modules", href: "/learn/modules" },
        ],
    },
    {
        heading: "MANAGEMENT",
        links: [
            { label: "My Badges", href: "/badges" },
            { label: "Settings", href: "/settings" },
        ],
    },
    {
        heading: "GET HELP",
        links: [
            { label: "FAQ", href: "/faq" },
            { label: "GitHub", href: "https://github.com/FarciarzYT/WebSecurityLearningLabs" },
        ],
    },
]

function NavContent({
    username,
    userRank,
    streak,
    level,
    sections,
    onLinkClick,
}: {
    username: string
    userRank: string
    streak: number
    level: number
    sections: NavSection[]
    onLinkClick?: () => void
}) {
    return (
        <>
            <header className="flex flex-col items-center gap-1 px-6 py-8 border-b border-white/8">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/8 text-xl font-bold text-white">
                    {username.charAt(0).toUpperCase()}
                </div>
                <h2 className="mt-2 text-base font-semibold text-white">{username}</h2>
                <span className="text-xs text-white/50">{userRank}</span>
            </header>

            <div className="px-4 py-3 border-b border-white/8">
                <div className="flex gap-2">
                    <div className="flex-1 flex flex-col items-center gap-0.5 bg-white/3 rounded-2xl py-3">
                        <LuFlame className="size-4 text-orange-400" />
                        <span className="text-white text-sm font-bold tabular-nums">{streak}</span>
                        <span className="text-white/30 text-[9px] uppercase tracking-wider">Streak</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-0.5 bg-white/3 rounded-2xl py-3">
                        <LuStar className="size-4 text-white/40" fill="currentColor" />
                        <span className="text-white text-sm font-bold tabular-nums">{level}</span>
                        <span className="text-white/30 text-[9px] uppercase tracking-wider">Level</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-1 flex-col gap-6 px-4 py-6 overflow-y-auto">
                {sections.map((section) => (
                    <div key={section.heading}>
                        <h4 className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-wider text-white/30">
                            {section.heading}
                        </h4>
                        <ul className="flex flex-col gap-0.5">
                            {section.links.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        onClick={onLinkClick}
                                        className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/60 transition-colors hover:bg-white/5 hover:text-white"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="border-t border-white/8 px-4 py-4">
                <Link
                    href="#"
                    onClick={onLinkClick}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/40 transition-colors hover:bg-white/5 hover:text-white"
                >
                    Log out
                </Link>
            </div>
        </>
    )
}

export default function AltNavbar({
    username = "UserName",
    userRank = "UserRank",
    streak = 0,
    level = 0,
    sections = defaultSections,
}: SideNavbarProps) {
    const [open, setOpen] = useState(false)
    const close = useCallback(() => setOpen(false), [])

    useEffect(() => {
        function handleKey(e: KeyboardEvent) {
            if (e.key === "Escape") close()
        }
        if (open) {
            window.addEventListener("keydown", handleKey)
            return () => window.removeEventListener("keydown", handleKey)
        }
    }, [open, close])

    return (
        <>
            {/* Mobile hamburger */}
            <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Toggle navigation"
                className="fixed top-4 left-4 z-50 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-md transition-colors hover:bg-white/10 2xl:hidden"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <line x1="4" x2="20" y1="12" y2="12" />
                    <line x1="4" x2="20" y1="6" y2="6" />
                    <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
            </button>

            {/* Mobile backdrop */}
            <div
                className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 2xl:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
                onClick={close}
                aria-hidden="true"
            />

            {/* Mobile drawer */}
            <nav
                role="dialog"
                aria-modal={open}
                aria-label="Navigation"
                className={`fixed top-0 left-0 z-50 flex h-full w-72 flex-col border-r border-white/10 bg-black/90 backdrop-blur-xl transition-transform duration-300 ease-in-out 2xl:hidden ${open ? "translate-x-0" : "-translate-x-full"}`}
            >
                <button
                    type="button"
                    onClick={close}
                    aria-label="Close navigation"
                    className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-lg text-white/40 transition-colors hover:text-white"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                    </svg>
                </button>
                <NavContent username={username} userRank={userRank} streak={streak} level={level} sections={sections} onLinkClick={close} />
            </nav>

            {/* Desktop sidebar — fixed, touches the left edge */}
            <nav
                aria-label="Navigation"
                className="hidden 2xl:flex fixed left-0 top-0 h-screen w-64 flex-col border-r border-white/8 bg-black/50 backdrop-blur-xl z-40"
            >
                <NavContent username={username} userRank={userRank} streak={streak} level={level} sections={sections} />
            </nav>
        </>
    )
}
