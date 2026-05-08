"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, BookOpen, Layers, Database } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] },
  }),
};

const projects = [
  {
    title: "ELLA",
    subtitle: "English Literacy Learning App",
    description:
      "An educational literacy platform designed to help Philippine public school children improve English reading comprehension through interactive, accessible, and student-centered learning experiences.",
    role: "Requirements Analysis · Research · Testing · Product Design",
    tags: [
      "Educational Tech",
      "UX Research",
      "Product Design",
      "Accessibility",
    ],
    github: "https://github.com/Aexreii/ELLA-App.git",
    live: null,
    icon: <BookOpen size={22} />,
    color: "#CAA9F3",
    gradient: "from-phlox/10 via-verbena/5 to-transparent",
    highlights: [
      "Proposed & conceptualized the literacy app",
      "User requirements gathering",
      "Student-centered feature design",
      "Usability testing & feedback",
    ],
    featured: true,
  },
  {
    title: "SASACIAN",
    subtitle: "Sales, Car Inventory & Analysis System",
    description:
      "A Java-based desktop application for managing car inventory and sales transactions, featuring robust CRUD operations, GUI integration, and comprehensive documentation.",
    role: "Backend Development · Documentation · Testing",
    tags: ["Java", "CRUD", "Desktop App", "SQL"],
    github: "https://github.com/madgallego/car_Inventory.git",
    live: null,
    icon: <Database size={22} />,
    color: "#B37AD4",
    gradient: "from-verbena/10 via-phlox/5 to-transparent",
    highlights: [
      "Backend CRUD operations",
      "GUI-backend integration",
      "User manual authoring",
      "System debugging",
    ],
    featured: true,
  },
  {
    title: "E-PARADA",
    subtitle: "Electronic Parking & Documentation Algorithm",
    description:
      "A C-based parking management system that automates operations and improves parking space management through core utility, security, and system modules.",
    role: "Developer · Documentation Review",
    tags: ["C Language", "Systems", "Algorithms", "Documentation"],
    github: "https://github.com/madgallego/E-PARADA.git",
    live: null,
    icon: <Layers size={22} />,
    color: "#206ABC",
    gradient: "from-atlantis/10 via-periwinkle/5 to-transparent",
    highlights: [
      "C-based system design",
      "Core module development",
      "Performance debugging",
      "Pseudocode & documentation",
    ],
    featured: false,
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className={`glass rounded-3xl overflow-hidden card-hover border border-white/5 glow-border relative ${
        project.featured ? "md:col-span-1" : ""
      }`}
    >
      {/* Top gradient accent */}
      <div
        className="h-[2px] w-full"
        style={{
          background: `linear-gradient(90deg, ${project.color}, transparent)`,
        }}
      />

      <div className="p-7">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
            style={{
              background: `${project.color}18`,
              color: project.color,
              border: `1px solid ${project.color}25`,
            }}
          >
            {project.icon}
          </div>
          <div className="flex gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 glass rounded-full flex items-center justify-center text-white/50 hover:text-white hover:border-phlox/30 border border-white/10 transition-all"
                aria-label="GitHub repository"
              >
                <Github size={15} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 glass rounded-full flex items-center justify-center text-white/50 hover:text-white border border-white/10 transition-all"
                aria-label="Live demo"
              >
                <ExternalLink size={15} />
              </a>
            )}
          </div>
        </div>

        {/* Title */}
        <div className="mb-1">
          <span
            className="section-label text-xs"
            style={{ color: project.color }}
          >
            {project.subtitle}
          </span>
        </div>
        <h3 className="font-serif text-2xl font-medium text-white/90 mb-3">
          {project.title}
        </h3>
        <p className="text-white/50 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Role */}
        <p className="text-xs text-white/35 mb-4 italic">{project.role}</p>

        {/* Highlights */}
        <ul className="space-y-1.5 mb-5">
          {project.highlights.map((h) => (
            <li
              key={h}
              className="flex items-center gap-2 text-xs text-white/50"
            >
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: project.color }}
              />
              {h}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full"
              style={{
                background: `${project.color}12`,
                color: `${project.color}cc`,
                border: `1px solid ${project.color}22`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Ambient */}
      <div
        className="blob w-[600px] h-[400px] top-1/4 left-[-250px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(202,169,243,0.08) 0%, transparent 70%)",
        }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex items-center gap-3 mb-4"
        >
          <span className="section-label">Projects</span>
          <div
            className="h-px flex-1 max-w-[60px]"
            style={{
              background:
                "linear-gradient(90deg, rgba(202,169,243,0.5), transparent)",
            }}
          />
        </motion.div>

        <motion.h2
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="font-serif font-light text-5xl md:text-6xl mb-4"
        >
          <span className="text-white/90">Work I&apos;m</span>
          <br />
          <span className="gradient-text italic">proud of</span>
        </motion.h2>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-white/45 max-w-md mb-14 text-[1.05rem]"
        >
          From educational apps to systems that keep things running — each
          project taught me something new.
        </motion.p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
