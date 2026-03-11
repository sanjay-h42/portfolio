"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, TerminalSquare } from "lucide-react";

interface Principle {
    title: string;
    desc: string;
    icon: React.ReactNode;
    gradient: string;
    border: string;
}

const principles = [
    { 
        title: "Clean Architecture", 
        desc: "Separation of concerns, SOLID principles, scalable systems",
        icon: <Code2 className="w-6 h-6 text-cyan-400" />,
        gradient: "from-cyan-500/10 to-blue-500/0",
        border: "border-cyan-500/30"
    },
    { 
        title: "Cloud Native Systems", 
        desc: "Dockerized deployment, AWS scalable infrastructure",
        icon: <Server className="w-6 h-6 text-purple-400" />,
        gradient: "from-purple-500/10 to-indigo-500/0",
        border: "border-purple-500/30"
    },
    { 
        title: "Production Ready", 
        desc: "Extensive test coverage, CI/CD pipelines, documentation",
        icon: <TerminalSquare className="w-6 h-6 text-pink-400" />,
        gradient: "from-pink-500/10 to-rose-500/0",
        border: "border-pink-500/30"
    },
];

function PrincipleCard({ principle }: { principle: Principle }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className={`p-6 rounded-2xl glass border ${principle.border} bg-gradient-to-br ${principle.gradient} hover:shadow-glow transition-all duration-300 group hover:-translate-y-1`}>
                <div className="mb-4 p-3 rounded-xl bg-black/40 inline-flex border border-white/5 group-hover:bg-black/60 transition-colors">
                    {principle.icon}
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{principle.title}</h4>
                <p className="text-sm text-muted/80">{principle.desc}</p>
            </div>
        </motion.div>
    );
}

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="py-32 px-6 relative overflow-hidden" ref={ref}>
            {/* Background Decor */}
            <div className="absolute right-0 top-1/4 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
                        Engineering <span className="gradient-text">DNA</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="relative rounded-3xl border border-white/10 glass-heavy p-[1px] shadow-glow-lg"
                >
                    {/* Animated Border Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-3xl blur opacity-70" />
                    
                    <div className="bg-background/40 backdrop-blur-2xl rounded-[23px] p-8 md:p-12 relative z-10">
                        <div className="space-y-6 text-muted text-lg leading-relaxed mb-12">
                            <p>
                                I&apos;m <span className="text-foreground font-bold drop-shadow-md">Sanjay Supaiya</span>, a backend-leaning full-stack software engineer
                                driven by a passion for creating <span className="text-primary font-bold">highly scalable distributed systems</span> and{" "}
                                clean, maintainable microservice architectures.
                            </p>
                            <p>
                                My expertise lies at the intersection of powerful backend logic and responsive frontend rendering. Using tools like{" "}
                                <span className="text-cyan-400 font-medium bg-cyan-400/10 px-2 py-0.5 rounded">Java</span>,{" "}
                                <span className="text-green-400 font-medium bg-green-400/10 px-2 py-0.5 rounded">Spring Boot</span>, and{" "}
                                <span className="text-purple-400 font-medium bg-purple-400/10 px-2 py-0.5 rounded">React</span>, I architect systems capable of handling
                                massive concurrency — from real-time WebSocket drawing platforms to ML-driven recommendation pipelines.
                            </p>
                            <p>
                                I operate with a strict standard of engineering excellence. Whether it&apos;s optimizing complex SQL queries, 
                                securing REST APIs with OAuth, or orchestrating Docker containers, I build solutions that are not just functional, 
                                but built for production scale.
                            </p>
                        </div>

                        {/* Principles Grid */}
                        <div className="pt-10 border-t border-white/10">
                            <h3 className="text-sm font-bold text-foreground/50 uppercase tracking-[0.2em] mb-8 text-center">
                                Core Engineering Principles
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                {principles.map((principle) => (
                                    <PrincipleCard key={principle.title} principle={principle} />
                                ))}

                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
