"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Server, Layout, Database, Container,
  Code2, Blocks, Globe, GitBranch, FileCode, Braces, Terminal,
  Smartphone, Cloud, Wrench, Layers, Network, MessageSquare, ShieldCheck
} from "lucide-react";


const skillGroups = [
  {
    title: "Programming Languages",
    icon: <Code2 className="w-5 h-5" />,
    gradient: "from-blue-500 to-blue-600",
    borderColor: "border-blue-500/20",
    bgColor: "bg-blue-500/5",
    skills: [
      { name: "Java", icon: <Code2 className="w-4 h-4" /> },
      { name: "Python", icon: <FileCode className="w-4 h-4" /> },
      { name: "C++", icon: <Code2 className="w-4 h-4" /> },
      { name: "JavaScript", icon: <Code2 className="w-4 h-4" /> },
      { name: "TypeScript", icon: <FileCode className="w-4 h-4" /> },
      { name: "SQL", icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: "Frontend & Mobile",
    icon: <Layout className="w-5 h-5" />,
    gradient: "from-purple-500 to-purple-600",
    borderColor: "border-purple-500/20",
    bgColor: "bg-purple-500/5",
    skills: [
      { name: "React.js", icon: <Braces className="w-4 h-4" /> },
      { name: "Next.js", icon: <Globe className="w-4 h-4" /> },
      { name: "React Native", icon: <Smartphone className="w-4 h-4" /> },
      { name: "Expo", icon: <Smartphone className="w-4 h-4" /> },
      { name: "HTML5/CSS3", icon: <Layout className="w-4 h-4" /> },
      { name: "Tailwind CSS", icon: <Blocks className="w-4 h-4" /> },
    ],
  },
  {
    title: "Backend & Architecture",
    icon: <Server className="w-5 h-5" />,
    gradient: "from-green-500 to-green-600",
    borderColor: "border-green-500/20",
    bgColor: "bg-green-500/5",
    skills: [
      { name: "SpringBoot", icon: <Blocks className="w-4 h-4" /> },
      { name: "Node.js", icon: <Terminal className="w-4 h-4" /> },
      { name: "Flask", icon: <Server className="w-4 h-4" /> },
      { name: "RESTful API", icon: <Network className="w-4 h-4" /> },
      { name: "Hibernate", icon: <Layers className="w-4 h-4" /> },
      { name: "System Design", icon: <ShieldCheck className="w-4 h-4" /> },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: <Container className="w-5 h-5" />,
    gradient: "from-orange-500 to-orange-600",
    borderColor: "border-orange-500/20",
    bgColor: "bg-orange-500/5",
    skills: [
      { name: "AWS (EC2, S3)", icon: <Cloud className="w-4 h-4" /> },
      { name: "Docker", icon: <Container className="w-4 h-4" /> },
      { name: "Git", icon: <GitBranch className="w-4 h-4" /> },
      { name: "Postman", icon: <MessageSquare className="w-4 h-4" /> },
      { name: "Jira", icon: <Wrench className="w-4 h-4" /> },
    ],
  },
  {
    title: "Databases & Tools",
    icon: <Database className="w-5 h-5" />,
    gradient: "from-teal-500 to-teal-600",
    borderColor: "border-teal-500/20",
    bgColor: "bg-teal-500/5",
    skills: [
      { name: "PostgreSQL", icon: <Database className="w-4 h-4" /> },
      { name: "NoSQL", icon: <Database className="w-4 h-4" /> },
      { name: "Supabase", icon: <Cloud className="w-4 h-4" /> },
      { name: "Firebase", icon: <Cloud className="w-4 h-4" /> },
      { name: "Prisma ORM", icon: <Layers className="w-4 h-4" /> },
      { name: "PowerBI", icon: <Blocks className="w-4 h-4" /> },
    ],
  },
];

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-muted max-w-lg mx-auto">
            Comprehensive skill set extracted from real-world engineering experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, groupIdx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
              className={`rounded-2xl border ${group.borderColor} ${group.bgColor} p-6 hover:shadow-glow transition-all duration-500 hover:-translate-y-1 group relative overflow-hidden`}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${group.gradient} text-white`}>
                  {group.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{group.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {group.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: groupIdx * 0.1 + skillIdx * 0.05 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all duration-300 cursor-default"
                  >
                    <span className="text-muted group-hover:text-foreground transition-colors shrink-0">{skill.icon}</span>
                    <span className="text-xs font-medium text-foreground/80 truncate">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
