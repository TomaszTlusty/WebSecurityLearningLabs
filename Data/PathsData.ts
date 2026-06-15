import { LearningPathType } from "@/types/PathsType"
import { ModulesData } from "@/Data/ModulesData"

const pickModules = (...ids: string[]) => ModulesData.filter(m => ids.includes(m.id))

export const PathsData: LearningPathType[] = [
    {
        id: "0001",
        title: "Web Security Foundations",
        description: "Start here. Learn the most common web vulnerabilities through hands-on labs — IDOR, SQLi, path traversal, and XSS.",
        difficulty: "Easy",
        estimatedHours: 19,
        bgImg: "/img/fox-celebrating-success.svg",
        modules: pickModules("0001", "0002", "0003", "0004"),
        modulesCount: 4,
    },
    {
        id: "0002",
        title: "Web Attack Techniques",
        description: "Go deeper. Build on the basics with UNION-based SQLi, stored XSS, CSRF, and command injection.",
        difficulty: "Medium",
        estimatedHours: 29,
        bgImg: "/img/hacker-laptop.svg",
        modules: pickModules("0005", "0006", "0007", "0008"),
        modulesCount: 4,
    },
]
