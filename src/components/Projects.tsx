"use client";

import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Internship Opportunity Discovery System",
    description:
      "Engineered a content-based recommendation engine using TF-IDF vectorization and cosine similarity to rank internships. Optimized database indexing, reducing search response time by 40%.",
    highlights: [
      "Custom relevance-ranking algorithm",
      "Improved precision by 42%",
      "Scalable search queries with pagination",
      "Spring Boot + PostgreSQL + Flask",
    ],
    techStack: ["React", "Flask", "REST API", "TF-IDF", "PostgreSQL", "Docker"],
    gradient: "from-blue-500/20 to-purple-500/20",
    accentBorder: "border-blue-500/30",
    accentDot: "bg-blue-500",
    github: "https://github.com/sanjay-h42/Internship-Recommender-System",
    live: "#",
  },
  {
    title: "Real-time Collaborative Whiteboard",
    description:
      "Built a low-latency collaborative platform using WebSockets for multi-user canvas interaction. Designed event-driven state synchronization to maintain consistency and improved responsiveness by 30%.",
    highlights: [
      "Event-driven state synchronization",
      "Optimized message broadcasting",
      "Low-latency communication",
      "JavaScript + WebSockets + Canvas",
    ],
    techStack: ["JavaScript", "WebSockets", "Canvas", "Node.js", "Express"],
    gradient: "from-green-500/20 to-teal-500/20",
    accentBorder: "border-green-500/30",
    accentDot: "bg-green-500",
    github: "https://github.com/sanjay-h42/Realtime-Whiteboard",
    live: "#",
  },
  {
    title: "Course Registration and Management System",
    description:
      "Developed a scalable full-stack platform using Java and Spring Boot. Implemented authentication and role-based authorization using Spring Security, ensuring secure admin and student operations.",
    highlights: [
      "Spring Security + Role-based access",
      "Optimized relational database schema",
      "Reduced API response time by 45%",
      "Java + Spring Boot + JavaScript",
    ],
    techStack: ["Spring Boot", "Spring Security", "JPA", "Hibernate", "Java", "SQL"],
    gradient: "from-orange-500/20 to-red-500/20",
    accentBorder: "border-orange-500/30",
    accentDot: "bg-orange-500",
    github: "https://github.com/sanjay-h42/Course-Registration-System",
    live: "#",
  },
];

function TiltCard({ children, gradient, accentBorder }: { children: React.ReactNode; gradient: string; accentBorder: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`group relative rounded-2xl border ${accentBorder} bg-gradient-to-br ${gradient} backdrop-blur-sm overflow-hidden hover:shadow-glow transition-all duration-500`}
    >
      <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted max-w-lg mx-auto">
            Deep diving into technical implementations and engineering impacts.
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <TiltCard gradient={project.gradient} accentBorder={project.accentBorder}>
                <div className="p-8 md:p-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <span className={`w-3 h-3 rounded-full ${project.accentDot}`} />
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/15 hover:border-primary/50 transition-all duration-300"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={project.live}
                        className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/15 hover:border-primary/50 transition-all duration-300"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  <p className="text-muted/90 mb-6 leading-relaxed max-w-3xl">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {project.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-center gap-2 text-sm text-foreground/70"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${project.accentDot}`} />
                        {highlight}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-foreground/70 hover:bg-white/10 hover:text-foreground transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
