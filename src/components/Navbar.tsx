"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Architecture", href: "#architecture" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 perspective-1000 ${
                isScrolled
                    ? "py-3"
                    : "py-5"
            }`}
        >
            <div className={`max-w-6xl mx-auto px-6 transition-all duration-500 ${
                isScrolled 
                ? "glass-heavy rounded-2xl mx-4 mt-2 shadow-glow" 
                : "bg-transparent"
            }`}>
                <div className="flex items-center justify-between py-3">
                    {/* Logo */}
                    <motion.a
                        href="#home"
                        className="text-2xl font-black tracking-tighter preserve-3d"
                        whileHover={{ scale: 1.05, rotateX: 10, rotateY: -10 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <span className="gradient-text drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">Sanjay</span>
                    </motion.a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8 preserve-3d">
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: -20, rotateX: 90 }}
                                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                                whileHover={{ 
                                    scale: 1.1, 
                                    translateZ: 20,
                                    textShadow: "0px 0px 8px rgba(6,182,212,0.6)" 
                                }}
                                className="text-muted hover:text-foreground transition-all duration-300 text-sm font-medium relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                            </motion.a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        className="md:hidden text-foreground p-2 rounded-lg hover:bg-white/10 transition-colors"
                    >
                        {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0, rotateX: -90 }}
                        animate={{ opacity: 1, height: "auto", rotateX: 0 }}
                        exit={{ opacity: 0, height: 0, rotateX: -90 }}
                        className="md:hidden glass-heavy mt-2 mx-4 rounded-2xl overflow-hidden origin-top perspective-1000"
                    >
                        <div className="px-6 py-6 flex flex-col gap-5">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    onClick={() => setIsMobileOpen(false)}
                                    className="text-muted hover:text-foreground transition-colors text-base font-medium flex items-center gap-3"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
