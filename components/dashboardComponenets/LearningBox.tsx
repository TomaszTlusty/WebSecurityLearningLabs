"use client"

import Link from 'next/link';
import { LuBookOpenText } from "react-icons/lu";
import { ImLab } from "react-icons/im";
import {FaArrowRight, FaBookSkull, FaRedhat} from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";



import Image from "next/image";
import React from "react";

const articleItems = [
    {
        title: "WebSecurityLearning",
        description: "Learn the fundamentals of web security, including common vulnerabilities and defenses.",
        btnText: "Start Learning",
        icon: <LuBookOpenText aria-hidden />,
        btnIcon:<FaGraduationCap aria-hidden/>,
        href: "/learn"
    },
    {
        title: "WebSecurityLabs",
        description: "Practice hands-on labs to test and strengthen your security skills in real-world scenarios.",
        btnText: "Start Hacking",
        icon: <ImLab aria-hidden />,
        btnIcon: <FaRedhat aria-hidden />,
        href: "/labs"
    }
];

export function LearningBox() {
    return (
        <>
            <section className={"grid grid-rows mx-auto mt-24 sm:mt-32 mb-10 px-4"}>
                <div className="w-full max-w-3xl mx-auto">
                    <header
                        className={"p-6 sm:p-8 rounded-3xl flex flex-col gap-x-6 items-center mx-auto"}>
                        <Image
                            src="/img/minimalist-fox-hacker-logo.svg"
                            alt="Logo"
                            width="100"
                            height="100"
                        />
                        <div className={"flex flex-col items-center text-center"}>
                        <h2 className={"text-white font-bold leading-tight text-3xl sm:text-5xl xl:text-6xl"}>
                            UserName
                        </h2>
                            <span>@username</span>
                        </div>

                        <span className={"text-white/85 font-bold leading-tight text-xl sm:text-3xl"}>
                            UserRank
                        </span>

                    </header>
                    <div className={"grid grid-cols-1 xl:grid-cols-2 gap-6 max-w-3xl mx-auto"}>
                        {articleItems.map((item) => {
                            return (
                                <article key={item.title}
                                         className={"bg-white/2 border backdrop-blur-md p-8 rounded-3xl border-white/10"}>
                                    <h3 className="flex items-center font-bold text-lg lg:text-2xl  mb-6 gap-2">
                                        {item.icon}
                                        {item.title}
                                    </h3>
                                    <p className={" mb-6"}>{item.description}</p>
                                    <Link
                                        href={item.href}
                                        className="flex items-center gap-1.5 text-base font-semibold text-white/70 hover:text-white w-fit mt-1 transition-colors duration-150 group/link"
                                    >
                                        {item.btnIcon}
                                        <span>{item.btnText}</span>
                                        <FaArrowRight className="text-xs opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-150" />
                                    </Link>
                                </article>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
)
};