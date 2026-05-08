"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Heart, Users, Lightbulb } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] },
  }),
};

const orgData = [
  {
    org: "BU ACCeSS",
    role: "President",
    period: "2025–2026",
    prior: "Year Rep (2024–25), Junior Councilor (2023–24)",
    color: "#CAA9F3",
  },
  {
    org: "BUCS Peer Councilors Org.",
    role: "PIO & Dept. Representative",
    period: "2025–2026",
    prior: "Co-Head Secretariat, Member (2023–24)",
    color: "#7997E6",
  },
  {
    org: "DevCon Legazpi",
    role: "VP for Operations",
    period: "2026",
    prior: "Volunteer & Hackathon Coordinator (2025)",
    color: "#B37AD4",
  },
  {
    org: "BU Yeshua Heartbeat",
    role: "Public Information Officer",
    period: "2025–2026",
    prior: "Creatives Committee (2024–25), Member (2023–24)",
    color: "#206ABC",
  },
  {
    org: "BUCS RCYC",
    role: "Department Representative",
    period: "2025–2026",
    prior: "Member (2024–25)",
    color: "#CAA9F3",
  },
];

const highlights = [
  {
    icon: <GraduationCap size={20} />,
    title: "Academic Foundation",
    text: "3rd Year BS Computer Science at Bicol University, expected graduation 2027.",
  },
  {
    icon: <Users size={20} />,
    title: "Community Leader",
    text: "President of BU ACCeSS & VP Operations at DevCon Legazpi — connecting students and the tech industry.",
  },
  {
    icon: <Heart size={20} />,
    title: "People-Centered Approach",
    text: "Passionate about educational technology and solutions that are built around how real users actually think and work.",
  },
  {
    icon: <Lightbulb size={20} />,
    title: "Research & Analysis",
    text: "Experienced in requirements gathering, product conceptualization, software testing, and technical documentation.",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Ambient */}
      <div
        className="blob w-[500px] h-[500px] top-0 right-[-200px]"
        style={{
          background:
            "radial-gradient(circle, rgba(121,151,230,0.12) 0%, transparent 70%)",
        }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Label */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex items-center gap-3 mb-4"
        >
          <span className="section-label">About Me</span>
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
          className="font-serif font-light text-5xl md:text-6xl mb-6"
        >
          <span className="text-white/90">Building with</span>
          <br />
          <span className="gradient-text italic">purpose & care</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 mt-12">
          {/* Left — bio */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="space-y-5"
          >
            <p className="text-white/65 leading-relaxed text-[1.05rem]">
              I&apos;m{" "}
              <strong className="text-phlox font-medium">Xaris Joy</strong> — a
              Computer Science student from Legazpi City, Albay with a strong
              background in requirements analysis, software testing, and
              technical documentation. I find meaning in understanding what
              users actually need and translating that into software that
              genuinely works for them.
            </p>
            <p className="text-white/55 leading-relaxed text-[1.05rem]">
              Outside the classroom, I&apos;m deeply involved in the Bicol
              University community — currently serving as President of{" "}
              <span className="text-periwinkle">BU ACCeSS</span> and VP for
              Operations at{" "}
              <span className="text-periwinkle">DevCon Legazpi</span>. These
              roles have sharpened how I lead teams, coordinate large-scale
              events, and communicate across different audiences.
            </p>
            <p className="text-white/55 leading-relaxed text-[1.05rem]">
              I&apos;m especially drawn to{" "}
              <span className="text-phlox">educational technology</span> and
              tools that help underserved communities. My current project, ELLA,
              is a literacy app for Philippine public school children —
              something I proposed, researched, and helped shape from the ground
              up.
            </p>

            {/* Education card */}
            <div className="glass rounded-2xl p-5 border border-phlox/10 mt-6">
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(202,169,243,0.2), rgba(121,151,230,0.15))",
                  }}
                >
                  <GraduationCap size={18} className="text-phlox" />
                </div>
                <div>
                  <p className="text-white font-medium">Bicol University</p>
                  <p className="text-white/55 text-sm mt-0.5">
                    BS Computer Science · 2023 — Present
                  </p>
                  <p className="text-phlox/70 text-xs mt-1.5 tracking-wide uppercase">
                    3rd Year · Expected 2027
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — highlights + orgs */}
          <div className="space-y-6">
            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  custom={i + 3}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  className="glass rounded-2xl p-4 card-hover border border-white/5 glow-border"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center mb-3 text-phlox"
                    style={{ background: "rgba(202,169,243,0.12)" }}
                  >
                    {h.icon}
                  </div>
                  <p className="text-white/90 text-sm font-medium mb-1">
                    {h.title}
                  </p>
                  <p className="text-white/45 text-xs leading-relaxed">
                    {h.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Orgs */}
            <motion.div
              custom={7}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            >
              <p className="section-label mb-4">Organizations</p>
              <div className="space-y-2">
                {orgData.map((o) => (
                  <div
                    key={o.org}
                    className="glass-light rounded-xl px-4 py-3 flex items-start gap-3 border border-white/5 hover:border-phlox/20 transition-colors"
                  >
                    <div
                      className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                      style={{
                        background: o.color,
                        boxShadow: `0 0 8px ${o.color}80`,
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <p className="text-white/85 text-sm font-medium">
                          {o.org}
                        </p>
                        <span className="text-white/35 text-xs">
                          {o.period}
                        </span>
                      </div>
                      <p className="text-xs mt-0.5" style={{ color: o.color }}>
                        {o.role}
                      </p>
                      <p className="text-white/35 text-xs mt-0.5">{o.prior}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
