"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Users, Zap, Container, BarChart3 } from "lucide-react";

const metrics = [
    {
        icon: <Users className="w-8 h-8" />,
        value: 100,
        suffix: "+",
        label: "Concurrent WebSocket Users",
        description: "Real-time whiteboard supports 100+ simultaneous collaborators with sub-50ms latency.",
        gradient: "from-cyan-400 to-blue-600",
        shadow: "hover:shadow-glow-cyan",
    },
    {
        icon: <Zap className="w-8 h-8" />,
        value: 95,
        suffix: "%",
        label: "TF-IDF Accuracy",
        description: "Recommendation engine ranks matching jobs using precision TF-IDF similarity scoring models.",
        gradient: "from-purple-400 to-violet-600",
        shadow: "hover:shadow-glow-violet",
    },
    {
        icon: <Container className="w-8 h-8" />,
        value: 3,
        suffix: "",
        label: "Dockerized Services",
        description: "Backend microservices containerized for scalable, isolated, and reproducible CI/CD deployment.",
        gradient: "from-pink-400 to-rose-600",
        shadow: "hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]",
    },
    {
        icon: <BarChart3 className="w-8 h-8" />,
        value: 15,
        suffix: "+",
        label: "REST API Endpoints",
        description: "Well-designed secure REST APIs with strict HTTP standards, role-based auth, and rate limiting.",
        gradient: "from-amber-400 to-orange-600",
        shadow: "hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]",
    },
];

function AnimatedCounter({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const duration = 2000;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [inView, target]);

    return (
        <span className="text-5xl sm:text-6xl font-black tabular-nums tracking-tighter drop-shadow-md text-white">
            {count}
            <span className="text-4xl text-white/70 ml-1">{suffix}</span>
        </span>
    );
}

function MetricCard({ metric, index, isInView }: { metric: any, index: number, isInView: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="h-full"
        >
            <div className={`relative h-full rounded-3xl bg-transparent p-[1px] transition-all duration-300 hover:-translate-y-2 ${metric.shadow} group overflow-hidden`}>
                {/* Gradient Border Mask */}
                <div className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} rounded-3xl opacity-30 group-hover:opacity-100 transition-opacity duration-300 -z-20`} />
                
                {/* Card Body */}
                <div className="h-full w-full rounded-[23px] glass-heavy p-8 flex flex-col items-center text-center">
                    {/* Icon Hexagon */}
                    <div className={`w-20 h-20 mb-8 rounded-2xl bg-gradient-to-br ${metric.gradient} flex items-center justify-center text-white shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                        {metric.icon}
                    </div>

                    <div className="mb-4">
                        <AnimatedCounter target={metric.value} suffix={metric.suffix} inView={isInView} />
                    </div>

                    <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 mb-3 uppercase tracking-wider">
                        {metric.label}
                    </h3>

                    <p className="text-sm text-muted/90 leading-relaxed font-medium">
                        {metric.description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default function Metrics() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-32 px-6 relative overflow-hidden" ref={ref}>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10" />

            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
                        Performance <span className="gradient-text">Metrics</span>
                    </h2>
                    <p className="text-lg text-muted/80 max-w-2xl mx-auto glass px-6 py-3 rounded-full border border-white/5 inline-block">
                        Quantifiable systemic impacts demonstrating scale, speed, and reliability.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {metrics.map((metric, idx) => (
                        <MetricCard key={metric.label} metric={metric} index={idx} isInView={isInView} />
                    ))}
                </div>
            </div>
        </section>
    );
}
