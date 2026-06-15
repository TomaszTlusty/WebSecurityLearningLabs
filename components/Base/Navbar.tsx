"use client";

import React, { useState, useRef, useEffect } from "react";
import { TbTargetArrow } from "react-icons/tb";
import { LuBookOpen } from "react-icons/lu";
import { IoTerminalOutline } from "react-icons/io5";
import { PiUserLight } from "react-icons/pi";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FaUserPlus } from "react-icons/fa6";
import Link from "next/link";

type NavItem = {
  icon: React.ReactNode;
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  {
    icon: <IoTerminalOutline size={24} strokeWidth={1.25} />,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: <LuBookOpen size={24} strokeWidth={1.25} />,
    label: "Learn",
    href: "/learn",
  },
  {
    icon: <TbTargetArrow size={24} strokeWidth={1.25} />,
    label: "Practice",
    href: "/labs",
  },
];

const isLoggedIn = false;

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-lg"
    >
      {/* Desktop Navbar */}
      <div className="hidden md:block">
        <div className="flex items-center justify-center bg-white/2 backdrop-blur-xl shadow-2xl rounded-full border border-white/6 px-4 h-16">
          <ul className="flex items-center gap-1">
            {navItems.map(({ icon, label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="flex flex-col items-center gap-1 px-5 py-2 rounded-lg text-white/40 hover:text-white transition-colors duration-200 focus-visible:outline-none"
                >
                  <span aria-hidden="true">{icon}</span>
                  <span className="text-[0.8rem] font-light tracking-widest">
                    {label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 ml-6">
            <div className="w-px h-6 bg-white/10" />
            <Link
              href="/profile"
              className="w-9 h-9 text-white/50 hover:text-white rounded-full border border-white/20 bg-white/4 flex items-center justify-center hover:border-white/50 hover:bg-white/10 transition-all duration-300"
              aria-label="User profile"
            >
              <PiUserLight size={18} strokeWidth={1.25} />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden">
        <div className="flex items-center justify-between bg-white/2 backdrop-blur-xl shadow-2xl rounded-full border border-white/6 px-4 h-14">
          <span className="text-white/60 text-[10px] sm:text-sm font-light tracking-widest">
            Web Security Learning Labs
          </span>
          <div className="flex items-center gap-3">
            <Link
              href="/profile"
              className="w-8 h-8 text-white/50 hover:text-white rounded-full border border-white/20 bg-white/4 flex items-center justify-center hover:border-white/50 hover:bg-white/10 transition-all duration-200"
              aria-label="User profile"
            >
              <PiUserLight size={16} strokeWidth={1.25} />
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-8 h-8 text-white/50 hover:text-white rounded-full border border-white/20 bg-white/4 flex items-center justify-center hover:border-white/50 hover:bg-white/10 transition-all duration-200"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <HiOutlineX size={16} />
              ) : (
                <HiOutlineMenuAlt3 size={16} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile rollout panel */}
        <div
          className={`mt-2 bg-white/3 backdrop-blur-2xl border rounded-2xl shadow-2xl overflow-hidden transition-all duration-400 ease-out origin-top ${
            mobileOpen
              ? "max-h-96 opacity-100 scale-100 border-white/8 p-2"
              : "max-h-0 opacity-0 scale-[0.97] border-transparent p-0"
          }`}
        >
          <div className="flex flex-col gap-0.5">
            {navItems.map(({ icon, label, href }, index) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-white/40 hover:text-white hover:bg-white/4 transition-all duration-300 ${
                  mobileOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-2 opacity-0"
                }`}
                style={{
                  transitionDelay: mobileOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                <span aria-hidden="true">{icon}</span>
                <span className="text-sm font-light tracking-widest">
                  {label}
                </span>
              </Link>
            ))}
          </div>

          <div
            className={`transition-all duration-300 ${
              mobileOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-2 opacity-0"
            }`}
            style={{
              transitionDelay: mobileOpen ? `${navItems.length * 50}ms` : "0ms",
            }}
          >
            <div className="h-px bg-white/6 mx-3 my-2" />
            {!isLoggedIn && (
              <Link
                href="/signup"
                onClick={() => setMobileOpen(false)}
                className="flex flex-row justify-center gap-2 mx-2 mb-2 items-center font-bold text-center text-black bg-white hover:bg-white/85 px-5 py-2.5 rounded-full transition-all duration-200 shadow-lg"
              >
                <FaUserPlus aria-hidden />
                <span>Register</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
