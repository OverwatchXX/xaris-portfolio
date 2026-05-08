"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Star } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.09, ease: [0.23, 1, 0.32, 1] },
  }),
};

const timeline = [
  {
    period: "2026 – Present",
    org: "DevCon Legazpi",
    role: "Vice President for Operations & Secretariat",
    type: "Leadership",
    color: "#CAA9F3",
    description:
      "Leading operations and secretariat functions for Legazpi's developer community chapter. Previously served as volunteer and Talents & Facilitators Coordinator for Unleash Hackathon 2025.",
    tags: ["Community Building", "Event Management", "Operations"],
    star: true,
  },
  {
    period: "July 2025 – Present",
    org: "BU ACCeSS",
    role: "President",
    type: "Leadership",
    color: "#B37AD4",
    description:
      "Serving as president of the Bicol University Academic Consortium of Computer Science Students. Previously Year Representative (2024–25) and Junior Councilor (2023–24). Planning Committee member.",
    tags: ["Student Leadership", "Planning", "Advocacy"],
    star: true,
  },
  {
    period: "July 2025 – Present",
    org: "BUCS Peer Councilors Organization",
    role: "Public Information Officer & Department Representative",
    type: "Leadership",
    color: "#7997E6",
    description:
      "Managing public communications and information campaigns for the peer counselors' organization. Previously served as Co-Head of Secretariat Committee and as a member.",
    tags: ["Communications", "Media", "Peer Support"],
    star: false,
  },
  {
    period: "July 2025 – Present",
    org: "BU Yeshua Heartbeat",
    role: "Public Information Officer",
    type: "Ministry",
    color: "#206ABC",
    description:
      "Handling social media, design, and information dissemination for the university ministry. Previously in Creatives Committee (2024–25) and member since 2023.",
    tags: ["Social Media", "Creative Design", "Communications"],
    star: false,
  },
  {
    period: "August 2025 – Present",
    org: "ELLA: English Literacy Learning App",
    role: "Lead Researcher & Product Conceptualizer",
    type: "Project",
    color: "#CAA9F3",
    description:
      "Proposed and conceptualized ELLA, a literacy app for Philippine public school children. Gathered user requirements, designed student- and teacher-centered features, and conducted usability testing.",
    tags: ["Research", "Product Design", "Educational Tech"],
    star: true,
  },
  {
    period: "Oct 2025 – Feb 2026",
    org: "DevCon Legazpi",
    role: "Talents & Facilitators Coordinator, Unleash Hackathon 2025",
    type: "Event",
    color: "#B37AD4",
    description:
      "Coordinated talent acquisition and facilitation logistics for Unleash Hackathon 2025, ensuring smooth event operations and participant experience.",
    tags: ["Event Coordination", "Hackathon", "Facilitation"],
    star: false,
  },
  {
    period: "Nov – Dec 2024",
    org: "SASACIAN System",
    role: "Backend Developer & Documentation Lead",
    type: "Project",
    color: "#7997E6",
    description:
      "Built CRUD operations for a Java-based car inventory and sales system. Contributed to GUI integration, testing, user manual authoring, and project documentation.",
    tags: ["Java", "Backend", "Documentation"],
    star: false,
  },
  {
    period: "Mar – May 2024",
    org: "E-PARADA System",
    role: "Developer & Document Reviewer",
    type: "Project",
    color: "#206ABC",
    description:
      "Developed and optimized a C-based parking management system. Designed core utility, security, and system modules; contributed to pseudocode and collaborative code reviews.",
    tags: ["C Language", "Systems", "Development"],
    star: false,
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div
        className="blob w-[500px] h-[500px] top-1/3 left-[-200px]"
        style={{ background: "radial-gradient(circle, rgba(121,151,230,0.1) 0%, transparent 70%)" }}
      />

      <div ref={ref} className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex items-center gap-3 mb-4"
        >
          <span className="section-label">Experience</span>
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
          <span className="text-white/90">Where I&apos;ve</span>
          <br />
          <span className="gradient-text italic">grown</span>
        </motion.h2>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-white/45 max-w-md mb-16 text-[1.05rem]"
        >
          Leadership roles, community work, and real projects — each one shaped how I think and build.
        </motion.p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[21px] top-0 bottom-0 w-px md:left-1/2"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, rgba(202,169,243,0.3) 10%, rgba(121,151,230,0.2) 90%, transparent 100%)",
            }}
          />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <motion.div
                key={`${item.org}-${item.role}`}
                custom={i + 3}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                className={`relative flex gap-6 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Node */}
                <div className="absolute left-[14px] md:left-1/2 md:-translate-x-1/2 top-6 z-10">
                  <div
                    className="timeline-node"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}, ${item.color}88)`,
                      boxShadow: `0 0 16px ${item.color}60`,
                    }}
                  />
                </div>

                {/* Content — offset for desktop alternating layout */}
                <div
                  className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                    i % 2 === 0 ? "md:pr-10" : "md:pl-10"
                  }`}
                >
                  <div className="glass rounded-2xl p-5 card-hover border border-white/5 glow-border">
                    {/* Type badge */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Briefcase size={12} style={{ color: item.color }} />
                        <span
                          className="text-xs font-medium tracking-wide uppercase"
                          style={{ color: item.color }}
                        >
                          {item.type}
                        </span>
                      </div>
                      {item.star && (
                        <Star size={12} className="text-phlox fill-phlox" />
                      )}
                    </div>

                    <p className="text-white/35 text-xs mb-1">{item.period}</p>
                    <h3 className="text-white/90 font-medium text-base mb-0.5">{item.role}</h3>
                    <p
                      className="text-sm font-medium mb-3"
                      style={{ color: item.color }}
                    >
                      {item.org}
                    </p>
                    <p className="text-white/50 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-full"
                          style={{
                            background: `${item.color}12`,
                            color: `${item.color}99`,
                            border: `1px solid ${item.color}20`,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating side */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
