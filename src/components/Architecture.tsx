"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
    MonitorSmartphone, Server, Database, ArrowRight, 
    ArrowDown, Activity, Layers, Cpu
} from "lucide-react";




// Helper for rendering a flat architecture node
interface NodeProps {
    icon: React.ElementType;
    title: string;
    desc: string;
    colorClass: string;
    borderClass: string;
}

const Node = ({ icon: Icon, title, desc, colorClass, borderClass }: NodeProps) => (
    <div className={`p-4 rounded-xl glass-heavy border ${borderClass} flex flex-col items-center text-center shadow-lg w-40 flex-shrink-0 z-10 bg-black/40`}>
        <div className={`p-3 rounded-full bg-gradient-to-br ${colorClass} mb-3 text-white`}>
            <Icon className="w-6 h-6" />
        </div>
        <h4 className="font-bold text-sm text-foreground">{title}</h4>
        <p className="text-[10px] text-muted font-medium mt-1">{desc}</p>
    </div>
);

export default function Architecture() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });


    return (
        <section id="architecture" className="py-32 px-6 relative overflow-hidden" ref={sectionRef}>
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 drop-shadow-lg">
                        System <span className="gradient-text">Architecture</span>
                    </h2>
                    <p className="text-lg text-muted/80 max-w-2xl mx-auto glass px-6 py-3 rounded-full border border-white/5 inline-block">
                        Clean, scalable, and highly available distributed systems design.
                    </p>
                </motion.div>

                <div className="space-y-24">
                    {/* Real-time Whiteboard Architecture */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="rounded-3xl glass border border-white/10 p-8 md:p-12"
                    >
                        <div className="flex items-center gap-3 mb-12">
                            <Activity className="w-6 h-6 text-cyan-400" />
                            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                                Scalable Real-time WebSocket Architecture
                            </h3>
                        </div>

                        {/* Whiteboard Flat Diagram */}
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                            <Node 
                                icon={MonitorSmartphone} 
                                title="Clients" 
                                desc="React + Canvas" 
                                colorClass="from-cyan-500 to-blue-600" 
                                borderClass="border-cyan-500/30"
                            />
                            
                            <ArrowRight className="w-8 h-8 text-cyan-500/50 hidden md:block" />
                            <ArrowDown className="w-8 h-8 text-cyan-500/50 block md:hidden" />

                            <Node 
                                icon={Layers} 
                                title="Load Balancer" 
                                desc="Nginx Gateway" 
                                colorClass="from-slate-500 to-slate-700" 
                                borderClass="border-slate-500/30"
                            />
                            
                            <ArrowRight className="w-8 h-8 text-cyan-500/50 hidden md:block" />
                            <ArrowDown className="w-8 h-8 text-cyan-500/50 block md:hidden" />

                            <div className="flex flex-col gap-4">
                                <Node 
                                    icon={Server} 
                                    title="Node WS-1" 
                                    desc="Express WS Server" 
                                    colorClass="from-blue-500 to-indigo-600" 
                                    borderClass="border-blue-500/30"
                                />
                                <Node 
                                    icon={Server} 
                                    title="Node WS-n" 
                                    desc="Express WS Server" 
                                    colorClass="from-blue-500 to-indigo-600" 
                                    borderClass="border-blue-500/30"
                                />
                            </div>

                            <ArrowRight className="w-8 h-8 text-purple-500/50 hidden md:block" />
                            <ArrowDown className="w-8 h-8 text-purple-500/50 block md:hidden" />

                            <div className="flex flex-col gap-4">
                                <Node 
                                    icon={Activity} 
                                    title="Redis Pub/Sub" 
                                    desc="Message Broker" 
                                    colorClass="from-red-500 to-pink-600" 
                                    borderClass="border-red-500/30"
                                />
                                <Node 
                                    icon={Database} 
                                    title="SQL/NoSQL" 
                                    desc="Persistent Storage" 
                                    colorClass="from-emerald-500 to-teal-600" 
                                    borderClass="border-emerald-500/30"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Recommendation Engine Architecture */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="rounded-3xl glass border border-white/10 p-8 md:p-12"
                    >
                        <div className="flex items-center gap-3 mb-12">
                            <Cpu className="w-6 h-6 text-violet-400" />
                            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-500">
                                Distributed ML Recommendation Pipeline
                            </h3>
                        </div>

                        {/* Recommendation Engine Flat Diagram */}
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                            <Node 
                                icon={MonitorSmartphone} 
                                title="Web UI" 
                                desc="React + Next.js" 
                                colorClass="from-purple-500 to-violet-600" 
                                borderClass="border-purple-500/30"
                            />
                            
                            <ArrowRight className="w-8 h-8 text-violet-500/50 hidden md:block" />
                            <ArrowDown className="w-8 h-8 text-violet-500/50 block md:hidden" />

                            <div className="flex flex-col gap-4 items-center">
                                <Node 
                                    icon={Server} 
                                    title="Spring Boot" 
                                    desc="Auth & Core API" 
                                    colorClass="from-green-500 to-emerald-600" 
                                    borderClass="border-green-500/30"
                                />
                                <div className="h-6 border-l-2 border-dashed border-violet-500/50 hidden md:block" />
                                <Node 
                                    icon={Database} 
                                    title="SQL/NoSQL" 
                                    desc="Relational Data" 
                                    colorClass="from-blue-500 to-indigo-600" 
                                    borderClass="border-blue-500/30"
                                />
                            </div>

                            <ArrowRight className="w-8 h-8 text-pink-500/50 hidden md:block" />
                            <ArrowDown className="w-8 h-8 text-pink-500/50 block md:hidden" />

                            <Node 
                                icon={Layers} 
                                title="Python Flask" 
                                desc="TF-IDF Engine" 
                                colorClass="from-pink-500 to-rose-600" 
                                borderClass="border-pink-500/30"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
