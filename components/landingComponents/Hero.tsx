"use client";

import { LuBookOpenText } from "react-icons/lu";
import { FaGithub, FaArrowDown } from "react-icons/fa6";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

    return (
        <header className="relative flex flex-col items-center justify-center w-full min-h-screen text-center gap-8 px-4">
            <div ref={containerRef} className="absolute inset-0" />
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-primary/5 blur-3xl" />
            </div>

            <div className="relative z-10">
                <div className="bg-white/2 border border-white/10 backdrop-blur-md w-32 h-32 sm:w-48 sm:h-48 rounded-full mx-auto mb-6 ">
                <motion.div
                    className="flex justify-center "
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="relative p-4 sm:p-5 w-32 h-32 sm:w-48 sm:h-48">
                        <Image
                            src="/img/minimalist-fox-hacker-logo.svg"
                            alt="Logo"
                            fill
                        />
                    </div>
                </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
          <span className="inline-block font-mono text-[0.67rem] sm:text-sm text-primary mb-6 tracking-widest uppercase">
            {"// learn by breaking"}
          </span>
                </motion.div>

                <motion.h1
                    className="font-extrabold m-0 text-4xl sm:text-5xl lg:text-6xl  max-w-[20ch] mx-auto text-balance"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                >
                    Web Security Learning Labs
                </motion.h1>

                <motion.p
                    className="m-0 mt-4 text-[clamp(1.25rem,2.5vw,1.5rem)] font-light leading-relaxed max-w-[50ch] mx-auto text-muted-foreground"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    Break things, understand why they broke, fix your mindset.
                </motion.p>
            </div>

            <motion.div
                className="z-10 flex flex-row items-center text-base sm:text-lg gap-3 sm:gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
            >
                <Link href="">
                    <div className="items-center border-2 bg-white border-white text-black sm:text-lg text-sm w-fit px-6 py-3 rounded-full font-bold cursor-pointer transition duration-300 hover:translate-x-0.5 hover:-translate-y-1 flex gap-2">
                        <LuBookOpenText aria-hidden className="w-5 sm:w-6 h-5 sm:h-6" />
                        <span>Explore</span>
                    </div>
                </Link>

                <Link
                    href="https://github.com/FarciarzYT/WebSecurityLearningLabs"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                >
                    <div className="bg-white/2 border-2 backdrop-blur-md border-white items-center text-white sm:text-lg text-sm w-fit px-6 py-3 rounded-full font-bold hover:bg-black cursor-pointer transition duration-300 hover:translate-x-0.5 hover:-translate-y-1 flex gap-2">
                        <FaGithub aria-hidden className="w-5 sm:w-6 h-5 sm:h-6" />
                        <span>GitHub</span>
                    </div>
                </Link>
            </motion.div>

            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
                style={{ opacity }}
                animate={{ y: [0, 12, 0] }}
                transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <FaArrowDown aria-hidden size={32} />
            </motion.div>
        </header>
    );
}

