import { ModuleType } from "@/types/ModuleType"

export const ModulesData: ModuleType[] = [
    {
        id: "0001",
        title: "IDOR - User Profile Access",
        description: "Access other users' data by manipulating object identifiers in requests. A great first vulnerability to understand broken access control.",
        estimatedHours: 4,
        difficulty: "Easy",
    },
    {
        id: "0002",
        title: "SQL Injection - Login Bypass",
        description: "Bypass authentication using classic SQL injection techniques. Learn how unsanitized inputs can break an entire login system.",
        estimatedHours: 5,
        difficulty: "Easy",
    },
    {
        id: "0003",
        title: "Directory Traversal - Basic",
        description: "Access restricted files on the server using path traversal payloads. Understand how file system boundaries can be broken.",
        estimatedHours: 4,
        difficulty: "Easy",
    },
    {
        id: "0004",
        title: "XSS - Reflected Payload",
        description: "Craft and execute reflected cross-site scripting attacks. Learn how malicious scripts get injected into a victim's browser.",
        estimatedHours: 6,
        difficulty: "Easy",
    },
    {
        id: "0005",
        title: "SQL Injection - UNION Based",
        description: "Extract database contents using UNION-based SQL injection. Go beyond login bypass and pull real data from the backend.",
        estimatedHours: 8,
        difficulty: "Medium",
    },
    {
        id: "0006",
        title: "XSS - Stored Injection",
        description: "Inject persistent malicious scripts into application storage. Unlike reflected XSS, stored payloads hit every user who loads the page.",
        estimatedHours: 8,
        difficulty: "Medium",
    },
    {
        id: "0007",
        title: "CSRF - Password Change",
        description: "Force authenticated users to perform actions without their knowledge. Learn how to exploit missing CSRF protections.",
        estimatedHours: 6,
        difficulty: "Medium",
    },
    {
        id: "0008",
        title: "Command Injection - Basics",
        description: "Execute arbitrary system commands through unsanitized user input. One of the most dangerous vulnerability classes in web apps.",
        estimatedHours: 7,
        difficulty: "Medium",
    },
]
