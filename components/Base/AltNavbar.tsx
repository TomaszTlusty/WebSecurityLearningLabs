"use client"

import Link from "next/link"
import { useState, useEffect, useCallback } from "react"

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
                        sections,
                        onLinkClick,
                    }: {
    username: string
    userRank: string
    sections: NavSection[]
    onLinkClick?: () => void
}) {
    return (
        <>
                <header className="flex flex-col  items-center gap-1 border-b border-white/10 px-6 py-8">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/10 text-2xl font-bold text-white">
                        {username.charAt(0).toUpperCase()}
                    </div>
                    <h2 className="mt-2 text-lg font-semibold text-white">
                        {username}
                    </h2>
                    <span className="text-sm text-white/60">{userRank}</span>
                </header>

                <div className="flex flex-1 flex-col gap-6 px-4 py-6">
                    {sections.map((section) => (
                        <div key={section.heading}>
                            <h4 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-white/40">
                                {section.heading}
                            </h4>
                            <ul className="flex flex-col gap-1">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            onClick={onLinkClick}
                                            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-white/70 transition-colors hover:bg-white/4 hover:text-white"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-white/10 px-4 py-4">
                    <Link
                        href="#"
                        onClick={onLinkClick}
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-white/50 transition-colors hover:bg-white/4 hover:text-white"
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
            {/* Mobile hamburger*/}
            <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Toggle navigation"
                className="fixed top-4 left-4 z-50 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/2 backdrop-blur-md transition-colors hover:bg-white/10 2xl:hidden"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                >
                    <line x1="4" x2="20" y1="12" y2="12" />
                    <line x1="4" x2="20" y1="6" y2="6" />
                    <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
            </button>

            <div
                className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 2xl:hidden ${
                    open
                        ? "opacity-100"
                        : "pointer-events-none opacity-0"
                }`}
                onClick={close}
                aria-hidden="true"
            />

            {/* Mobile drawer */}
            <nav
                role="dialog"
                aria-modal={open}
                aria-label="Navigation"
                className={`fixed top-0 left-0 z-50 flex h-full w-72 flex-col border-r border-white/10 bg-black backdrop-blur-xl transition-transform duration-300 ease-in-out 2xl:hidden ${
                    open ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <button
                    type="button"
                    onClick={close}
                    aria-label="Close navigation"
                    className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-md text-white/50 transition-colors hover:text-white"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                    </svg>
                </button>

                <NavContent
                    username={username}
                    userRank={userRank}
                    sections={sections}
                    onLinkClick={close}
                />
            </nav>

            <nav
                aria-label="Navigation"
                className="hidden h-fit w-64 flex-col rounded-3xl border mt-16 mb-4 mx-32 border-white/10 bg-white/2 backdrop-blur-md 2xl:flex"
            >
                <NavContent
                    username={username}
                    userRank={userRank}
                    sections={sections}
                />
            </nav>
        </>
    )
}