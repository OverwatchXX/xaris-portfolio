"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, FileSearch, Users, Wrench } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] },
  }),
};

const skillCategories = [
  {
    icon: <Code2 size={20} />,
    title: "Frontend Development",
    color: "#CAA9F3",
    skills: [
      { name: "HTML / CSS", level: 85 },
      { name: "JavaScript", level: 78 },
      { name: "React", level: 70 },
      { name: "Tailwind CSS", level: 80 },
      { name: "TypeScript", level: 60 },
      { name: "Next.js", level: 60 },
    ],
  },
  {
    icon: <Palette size={20} />,
    title: "UI/UX Design",
    color: "#B37AD4",
    skills: [
      { name: "Figma", level: 82 },
      { name: "Canva", level: 90 },
      { name: "UI Prototyping", level: 78 },
      { name: "User Research", level: 75 },
      { name: "Wireframing", level: 80 },
      { name: "Design Systems", level: 65 },
    ],
  },
  {
    icon: <FileSearch size={20} />,
    title: "Research & Documentation",
    color: "#7997E6",
    skills: [
      { name: "Requirements Analysis", level: 80 },
      { name: "Technical Writing", level: 78 },
      { name: "User Testing", level: 75 },
      { name: "Research Writing", level: 80 },
      { name: "Pseudocode / Docs", level: 82 },
      { name: "Product Conceptualization", level: 76 },
    ],
  },
  {
    icon: <Users size={20} />,
    title: "Leadership & Collaboration",
    color: "#206ABC",
    skills: [
      { name: "Team Leadership", level: 90 },
      { name: "Event Coordination", level: 88 },
      { name: "Public Communication", level: 85 },
      { name: "Project Management", level: 80 },
      { name: "Community Building", level: 85 },
      { name: "Mentoring", level: 78 },
    ],
  },
  {
    icon: <Wrench size={20} />,
    title: "Tools & Technologies",
    color: "#CAA9F3",
    skills: [
      { name: "Git / GitHub", level: 72 },
      { name: "Python", level: 68 },
      { name: "Java", level: 65 },
      { name: "C / C++", level: 62 },
      { name: "SQL", level: 65 },
      { name: "Firebase", level: 55 },
    ],
  },
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm text-white/70">{name}</span>
        <span className="text-xs text-white/35">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}cc, ${color}55)` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: [0.23, 1, 0.32, 1] }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  // Pill tags for quick view
  const allTags = [
    "React", "Next.js", "TypeScript", "Tailwind CSS", "Figma", "Canva",
    "Git", "GitHub", "Firebase", "Python", "Java", "C/C++", "SQL",
    "UI Research", "Prototyping", "Documentation", "Product Design",
  ];

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div
        className="blob w-[500px] h-[500px] bottom-0 right-[-200px]"
        style={{ background: "radial-gradient(circle, rgba(179,122,212,0.1) 0%, transparent 70%)" }}
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
          <span className="section-label">Skills</span>
          <div
            className="h-px flex-1 max-w-[60px]"
            style={{ background: "linear-gradient(90deg, rgba(202,169,243,0.5), transparent)" }}
          />
        </motion.div>

        <motion.h2
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="font-serif font-light text-5xl md:text-6xl mb-4"
        >
          <span className="text-white/90">Tools of</span>
          <br />
          <span className="gradient-text italic">my craft</span>
        </motion.h2>

        {/* Quick tags */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex flex-wrap gap-2 mb-14"
        >
          {allTags.map((tag) => (
            <span key={tag} className="skill-pill">{tag}</span>
          ))}
        </motion.div>

        {/* Skill category cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              custom={ci + 3}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="glass rounded-3xl p-6 card-hover border border-white/5 glow-border"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${cat.color}18`, color: cat.color, border: `1px solid ${cat.color}22` }}
                >
                  {cat.icon}
                </div>
                <h3 className="text-white/85 font-medium text-sm">{cat.title}</h3>
              </div>

              {/* Skill bars */}
              <div className="space-y-4">
                {cat.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={cat.color}
                    delay={si * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
