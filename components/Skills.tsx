"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Palette,
  FileSearch,
  Users,
  Wrench,
  Monitor,
} from "lucide-react";

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
    title: "Programming Languages",
    color: "#CAA9F3",
    skills: ["Python", "JavaScript", "Java", "C / C++", "SQL"],
  },
  {
    icon: <Wrench size={20} />,
    title: "Developer Tools",
    color: "#B37AD4",
    skills: ["Git", "GitHub", "Visual Studio Code", "Google Colab"],
  },
  {
    icon: <Monitor size={20} />,
    title: "Libraries & Frameworks",
    color: "#7997E6",
    skills: ["STL (C/C++)", "Java Standard Library", "Collections & IO (Java)"],
  },
  {
    icon: <Palette size={20} />,
    title: "Design & Collaboration",
    color: "#206ABC",
    skills: ["Figma", "Canva"],
  },
  {
    icon: <FileSearch size={20} />,
    title: "Office & Productivity",
    color: "#CAA9F3",
    skills: [
      "Microsoft Word",
      "Microsoft Excel",
      "Microsoft PowerPoint",
      "Google Docs",
      "Google Sheets",
      "Google Slides",
      "Google Drive",
    ],
  },
  {
    icon: <Users size={20} />,
    title: "Soft Skills & Competencies",
    color: "#B37AD4",
    skills: [
      "Requirements Analysis",
      "Software Testing",
      "Technical Documentation",
      "Product Conceptualization",
      "Team Leadership",
      "Event Coordination",
      "Public Communication",
      "Community Building",
    ],
  },
];

function SkillTag({ name, color }: { name: string; color: string }) {
  return (
    <span
      className="text-sm px-3 py-1.5 rounded-full transition-all duration-200 hover:scale-105"
      style={{
        background: `${color}12`,
        color: `${color}cc`,
        border: `1px solid ${color}22`,
      }}
    >
      {name}
    </span>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div
        className="blob w-[500px] h-[500px] bottom-0 right-[-200px]"
        style={{
          background:
            "radial-gradient(circle, rgba(179,122,212,0.1) 0%, transparent 70%)",
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
          <span className="section-label">Skills</span>
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
          <span className="text-white/90">Tools of</span>
          <br />
          <span className="gradient-text italic">my craft</span>
        </motion.h2>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-white/45 max-w-md mb-14 text-[1.05rem]"
        >
          Languages, tools, and competencies I&apos;ve built through coursework,
          projects, and community work.
        </motion.p>

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
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: `${cat.color}18`,
                    color: cat.color,
                    border: `1px solid ${cat.color}22`,
                  }}
                >
                  {cat.icon}
                </div>
                <h3 className="text-white/85 font-medium text-sm">
                  {cat.title}
                </h3>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <SkillTag key={skill} name={skill} color={cat.color} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
