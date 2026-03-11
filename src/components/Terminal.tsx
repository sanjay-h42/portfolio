"use client";

import { useState, useRef, useEffect, FormEvent, KeyboardEvent } from "react";
import { motion } from "framer-motion";

interface TerminalLine {
    type: "input" | "output" | "error" | "system";
    content: string;
}

const portfolioData = {
    name: "Sanjay Supaiya",
    title: "Backend-Focused Full Stack Software Engineer",
    bio: "I'm Sanjay Supaiya, a backend-leaning full-stack engineer passionate about building highly scalable distributed systems, real-time architectures, and intelligent recommendation pipelines. Driven by a rigorous standard of engineering excellence and clean code architecture.",
    skills: {
        "Programming Languages": ["Java", "Python", "C++", "JavaScript", "TypeScript", "SQL"],
        "Frontend & Mobile": ["React.js", "Next.js", "React Native", "Expo", "HTML5", "Tailwind CSS"],
        "DevOps & Cloud": ["AWS (EC2, S3)", "Docker", "Git", "Postman", "CI/CD"],
        "Databases": ["SQL/NoSQL", "Supabase", "Firebase", "Prisma ORM"],
        "Tools & Analytics": ["PowerBI", "Jira"],
        "Backend & Architecture": ["Spring Boot", "Node.js", "Flask", "RESTful API Design", "Hibernate (JPA)", "Multithreading & Concurrency", "System Design & Scalability", "Database Indexing", "WebSockets"]
    },
    projects: {
        recommender: {
            name: "Internship & Job Recommender System",
            description: "A Dockerized full-stack platform recommending jobs via TF-IDF engine.",
            tech: "Spring Boot, Python, SQL/NoSQL, Docker, OAuth, React"
        },
        whiteboard: {
            name: "Real-Time Collaborative Whiteboard",
            description: "Low-latency distributed drawing system handling 100+ concurrent connections.",
            tech: "React, Node.js, WebSockets, Canvas API"
        },
        courseregistration: {
            name: "Course Registration System",
            description: "Spring Boot system with robust SQL optimizations and transactional enrollments.",
            tech: "Spring Boot, Java, SQL/NoSQL, JPA/Hibernate"
        }
    },
    contact: {
        email: "sanjaysupaiya@gmail.com",
        github: "https://github.com/sanjay-h42",
        linkedin: "https://www.linkedin.com/in/sanjaysupaiya",
        phone: "+91 9360870740"
    },
};

const commands: Record<string, (arg?: string) => string> = {
    help: () => `AVAILABLE COMMANDS:
  whoami           [Execute] Display biographical data
  skills           [Execute] List complete technical arsenal
  projects         [Execute] View production systems
  experience       [Execute] Access engineering metrics
  contact          [Execute] Establish communication vectors
  social           [Execute] Output external network links
  clear            [Execute] Purge terminal buffer
  
PROJECT TARGETS (Run 'projects <target>'):
  recommender      whiteboard       courseregistration`,

    whoami: () => `[IDENTITY: ${portfolioData.name.toUpperCase()}]\n[ROLE: ${portfolioData.title.toUpperCase()}]\n\n${portfolioData.bio}`,

    skills: () => {
        let result = "LOADING TECHNICAL ACCELERATORS...\n\n";
        Object.entries(portfolioData.skills).forEach(([category, items]) => {
            result += `[${category.toUpperCase()}]\n  => ${items.join(" :: ")}\n\n`;
        });
        return result.trim();
    },

    projects: (arg?: string) => {
        if (!arg) {
            return `SYSTEM ARCHITECTURES DEPLOYED:\n
  [1] recommender        : Internship & Job Recommender System
  [2] whiteboard         : Real-Time Collaborative Whiteboard
  [3] courseregistration : Course Registration System\n
Execute 'projects <target_name>' for payload details.`;
        }
        const project = portfolioData.projects[arg as keyof typeof portfolioData.projects];
        if (!project) return `ERR_NOT_FOUND: Architecutre '${arg}' offline or non-existent. Type 'projects' for roster.`;
        return `[TARGET: ${project.name}]\n\n* ${project.description}\n* TECH STACK: ${project.tech}`;
    },

    experience: () => `PERFORMANCE METRICS RETRIEVED:\n
  + 100+ concurrent WebSocket connections (sub-50ms latency)
  + TF-IDF ranking algorithms deployed
  + Containerized Docker cluster deployed (3+ microservices)
  + Sub-millisecond database queries via B-Tree Indexing`,

    contact: () => `INITIALIZING SECURE COMM CHANNELS...\n
  [EMAIL] : ${portfolioData.contact.email}
  [PHONE] : ${portfolioData.contact.phone}
  (Execute 'social' for external hyper-links)`,

    social: () => `EXTERNAL NETWORK VECTORS:\n
  [GITHUB]   : ${portfolioData.contact.github}
  [LINKEDIN] : ${portfolioData.contact.linkedin}`,

    clear: () => "CLEAR_TERMINAL",
};

export default function Terminal() {
    const [lines, setLines] = useState<TerminalLine[]>([
        {
            type: "system",
            content: `BOOT_SEQ_INITALIZED... 100%\nWelcome to SYSTEM_OS v2.0 (user: sanjay)\nSecure connection established. Execute 'help' for command directory.`,
        },
    ]);
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<string[]>([]);
    const [historyIdx, setHistoryIdx] = useState(-1);
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    const executeCommand = (cmd: string) => {
        const [command, ...args] = cmd.toLowerCase().trim().split(" ");

        if (command === "clear") {
            setLines([]);
            return;
        }

        let output: string;
        if (command === "projects" && args.length > 0) {
            output = commands.projects(args[0]);
        } else if (commands[command]) {
            output = commands[command]();
        } else if (cmd.trim() === "") {
            output = "";
        } else {
            output = `ERR_BAD_COMMAND: '${command}' not recognized in core system.`;
        }

        setLines((prev) => {
            const newLines = [...prev, { type: "input", content: `sanjay@system:~# Execute: ${cmd}` } as TerminalLine];
            if (output) {
                newLines.push({ type: command in commands ? "output" : "error", content: output });
            }
            return newLines;
        });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setHistory((prev) => [...prev, input]);
        setHistoryIdx(-1);
        executeCommand(input);
        setInput("");
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "ArrowUp") {
            e.preventDefault();
            if (history.length > 0) {
                const idx = historyIdx === -1 ? history.length - 1 : Math.max(0, historyIdx - 1);
                setHistoryIdx(idx);
                setInput(history[idx]);
            }
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            if (historyIdx !== -1) {
                const idx = historyIdx + 1;
                if (idx >= history.length) {
                    setHistoryIdx(-1);
                    setInput("");
                } else {
                    setHistoryIdx(idx);
                    setInput(history[idx]);
                }
            }
        }
    };

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [lines]);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <div className="min-h-screen p-6 font-mono text-xs sm:text-sm bg-[#050510] flex items-center justify-center perspective-1000">
            {/* Background glowing effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-900/10 rounded-full blur-[150px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95, rotateX: 10 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="w-full max-w-5xl preserve-3d"
            >
                <div
                    ref={scrollRef}
                    onClick={() => inputRef.current?.focus()}
                    className="h-[85vh] overflow-y-auto bg-black/80 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 sm:p-8 shadow-[0_0_50px_rgba(6,182,212,0.15)] relative isolate cursor-text"
                    style={{ scrollbarWidth: "thin", scrollbarColor: "#06b6d4 #000" }}
                >
                    {/* CRT Screen Scanline Overlay */}
                    <div className="absolute inset-0 pointer-events-none z-50 rounded-2xl bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-20" />

                    {/* Terminal header bar */}
                    <div className="sticky top-0 bg-black/90 backdrop-blur-md pb-4 pt-2 -mt-2 -mx-2 px-2 mb-6 border-b border-cyan-500/30 flex items-center justify-between z-40">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                            <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
                            <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                        </div>
                        <span className="text-cyan-500/60 font-bold uppercase tracking-widest text-[10px]">OS_CORE_TERMINAL // ENCRYPTED</span>
                    </div>

                    <div className="space-y-4 relative z-10 pb-10">
                        {lines.map((line, idx) => (
                            <div key={idx} className="leading-relaxed">
                                {line.type === "input" ? (
                                    <div className="text-pink-400 font-bold drop-shadow-[0_0_5px_rgba(236,72,153,0.5)]">{line.content}</div>
                                ) : line.type === "error" ? (
                                    <div className="text-red-500 font-semibold drop-shadow-[0_0_5px_rgba(239,68,68,0.5)]">[FAILED] {line.content}</div>
                                ) : line.type === "system" ? (
                                    <div className="text-violet-400 font-bold whitespace-pre-line drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]">{line.content}</div>
                                ) : (
                                    <div className="text-cyan-400 whitespace-pre-line drop-shadow-[0_0_5px_rgba(6,182,212,0.6)]">{line.content}</div>
                                )}
                            </div>
                        ))}

                        <form onSubmit={handleSubmit} className="flex flex-wrap items-center mt-4">
                            <span className="text-violet-400 font-bold drop-shadow-[0_0_5px_rgba(139,92,246,0.5)] mr-3 shrink-0">sanjay@system:~#</span>
                            <div className="flex-1 relative">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    onFocus={() => setIsFocused(true)}
                                    onBlur={() => setIsFocused(false)}
                                    className="w-full bg-transparent border-none outline-none text-cyan-400 caret-transparent font-bold tracking-wide"
                                    autoComplete="off"
                                    spellCheck="false"
                                />
                                {/* Custom block cursor matching text position */}
                                <span 
                                    className="absolute top-0 bottom-0 w-2.5 bg-cyan-400 animate-pulse-glow"
                                    style={{ 
                                        left: `${input.length}ch`,
                                        opacity: isFocused ? 1 : 0 
                                    }}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
