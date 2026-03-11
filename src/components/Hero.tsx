"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Github, FileText, ArrowDown, ChevronRight } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section
            id="home"
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
        >
            {/* Animated Background Mesh */}
            <div className="absolute inset-0 bg-grid z-0" />

            {/* Floating Geometric Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                {/* Cyan Torus/Orb */}
                <motion.div 
                    animate={{ y: [-15, 15, -15] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" 
                />
                
                {/* Violet Prism/Orb */}
                <motion.div 
                    animate={{ y: [15, -15, 15] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[100px]" 
                />
                
                {/* Center Core */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/10 rounded-full blur-[60px] animate-pulse-glow" />

                {/* Wireframe Elements */}
                <motion.div 
                    className="absolute top-[20%] right-[15%] w-32 h-32 border border-primary/30 rounded-xl glass"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                />

                <motion.div 
                    className="absolute bottom-[20%] left-[15%] w-24 h-24 border border-accent/40 rounded-full mix-blend-screen"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <motion.div 
                style={{ y, opacity }}
                className="relative z-10 max-w-5xl mx-auto px-6 text-center"
            >
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass border border-primary/30 text-primary text-sm font-semibold mb-10 shadow-glow cursor-default"
                >
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                    </span>
                    Open for Software Engineering roles
                </motion.div>

                {/* Name */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.1 }}
                >
                    <h1 className="text-6xl sm:text-7xl md:text-8xl font-black mb-6 tracking-tighter drop-shadow-2xl">
                        Sanjay{" "}
                        <span className="gradient-text relative inline-block">
                            Supaiya
                            <span className="absolute left-0 top-0 blur-[20px] opacity-60 z-[-1] gradient-text">
                                Supaiya
                            </span>
                        </span>
                    </h1>
                </motion.div>

                {/* Title */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-2xl sm:text-3xl text-muted font-bold mb-8 drop-shadow-md"
                >
                    Backend-Leaning <span className="text-foreground">Full-Stack Software Engineer</span>
                </motion.p>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="text-lg sm:text-xl text-muted/80 max-w-3xl mx-auto mb-12 leading-relaxed glass p-6 rounded-2xl"
                >
                    I build scalable backend systems, real-time applications, and intelligent
                    recommendation platforms using <span className="text-primary font-bold drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">Java, Spring Boot, SQL/NoSQL, Docker</span>, and
                    modern web technologies. Focused on performance, clean architecture, and production-grade system design.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="flex flex-wrap items-center justify-center gap-6"
                >
                    <a
                        href="#projects"
                        className="group relative px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-xl shadow-glow-lg hover:scale-105 transition-transform"
                    >
                        <span className="flex items-center gap-2">
                            Explore Systems
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>

                    <a
                        href="https://github.com/sanjay-h42"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 glass-heavy hover:bg-white/10 border border-primary/20 text-foreground font-bold rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform flex items-center gap-2"
                    >
                        <Github className="w-5 h-5" />
                        GitHub
                    </a>
                    
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 glass-heavy hover:bg-white/10 border border-accent/20 text-foreground font-bold rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform flex items-center gap-2"
                    >
                        <FileText className="w-5 h-5 text-accent" />
                        Resume
                    </a>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-[-80px] left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        className="p-3 glass rounded-full border border-primary/20 shadow-glow"
                    >
                        <ArrowDown className="w-6 h-6 text-primary" />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
