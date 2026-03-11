"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail, Phone, ExternalLink } from "lucide-react";

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const contacts = [
        {
            name: "Email",
            value: "sanjaysupaiya@gmail.com",
            icon: <Mail className="w-5 h-5" />,
            href: "mailto:sanjaysupaiya@gmail.com",
            color: "text-blue-400",
            glow: "shadow-[0_0_15px_rgba(59,130,246,0.5)]"
        },
        {
            name: "Phone",
            value: "+91 9360870740",
            icon: <Phone className="w-5 h-5" />,
            href: "tel:+919360870740",
            color: "text-cyan-400",
            glow: "shadow-[0_0_15px_rgba(6,182,212,0.5)]"
        },
        {
            name: "LinkedIn",
            value: "Sanjay Supaiya",
            icon: <Linkedin className="w-5 h-5" />,
            href: "https://www.linkedin.com/in/sanjaysupaiya",
            color: "text-indigo-400",
            glow: "shadow-[0_0_15px_rgba(129,140,248,0.5)]"
        }
    ];

    return (
        <section id="contact" className="py-24 px-6 relative bg-[#050510] overflow-hidden" ref={ref}>
            <div className="absolute inset-0 cyber-grid opacity-5 pointer-events-none" />
            
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6">
                        Contact <span className="gradient-text">Information</span>
                    </h2>
                    <div className="h-[3px] w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {contacts.map((contact, idx) => (
                        <motion.a
                            key={contact.name}
                            href={contact.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.02, y: -8 }}
                            className="group relative flex flex-col items-center justify-center gap-6 p-10 rounded-3xl bg-black/40 border border-white/10 hover:border-blue-500/40 transition-all duration-500 min-h-[320px] overflow-hidden shadow-2xl"
                        >
                            <div className="scanline opacity-10" />
                            
                            {/* Animated Background Pulse */}
                            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            <div className={`relative p-6 rounded-2xl bg-black/60 border border-white/10 ${contact.color} ${contact.glow} group-hover:scale-110 transition-transform duration-500`}>
                                {contact.icon}
                                <div className="absolute inset-0 rounded-2xl bg-current opacity-20 blur-xl animate-pulse" />
                            </div>

                            <div className="relative text-center space-y-3">
                                <p className="text-xs text-muted-foreground font-bold uppercase tracking-[0.3em]">{contact.name}</p>
                                <p className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                                    {contact.value}
                                </p>
                            </div>

                            <div className="absolute bottom-6 flex items-center gap-2 text-xs font-bold text-blue-500/40 uppercase tracking-widest group-hover:text-blue-500 transition-colors">
                                <span>Establish Connection</span>
                                <ExternalLink className="w-4 h-4" />
                            </div>

                            {/* Corner Accents */}
                            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/5 group-hover:border-blue-500/40 transition-colors" />
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/5 group-hover:border-blue-500/40 transition-colors" />
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
