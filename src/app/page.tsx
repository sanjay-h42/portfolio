"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Architecture from "@/components/Architecture";
import Metrics from "@/components/Metrics";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Terminal from "@/components/Terminal";
import { Monitor, TerminalSquare } from "lucide-react";

export default function Home() {
  const [isTerminalMode, setIsTerminalMode] = useState(false);

  return (
    <div className={`min-h-screen transition-all duration-500 ${isTerminalMode ? "bg-[#0a0a0a]" : "bg-background"}`}>
      {/* Mode Toggle Button */}
      <button
        onClick={() => setIsTerminalMode(!isTerminalMode)}
        className={`fixed top-6 right-6 z-50 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer ${isTerminalMode
            ? "bg-[#333] text-[#4ade80] hover:bg-[#4ade80] hover:text-[#0a0a0a]"
            : "bg-white/10 backdrop-blur-sm text-primary hover:bg-primary hover:text-white shadow-glow"
          }`}
        title={isTerminalMode ? "Switch to Minimal Mode" : "Switch to Terminal Mode"}
      >
        {isTerminalMode ? <Monitor className="w-5 h-5" /> : <TerminalSquare className="w-5 h-5" />}
      </button>

      {isTerminalMode ? (
        <Terminal />
      ) : (
        <>
          <Navbar />
          <main>
            <Hero />
            <TechStack />
            <Projects />
            <Architecture />
            <Metrics />
            <About />
            <Contact />
          </main>
          <footer className="border-t border-border py-8 text-center text-muted text-sm">
            <p>© 2026 Sanjay Supaiya. Built with Next.js, TypeScript & TailwindCSS.</p>
          </footer>
        </>
      )}
    </div>
  );
}
