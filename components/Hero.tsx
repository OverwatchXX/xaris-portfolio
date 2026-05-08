"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.23, 1, 0.32, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #060914 0%, #0B1028 60%, #0E155E 100%)",
      }}
    >
      {/* ── Ambient glow blobs ── */}
      <div
        className="blob w-[600px] h-[600px] top-[-100px] left-[-200px]"
        style={{
          background:
            "radial-gradient(circle, rgba(179,122,212,0.25) 0%, transparent 70%)",
        }}
      />
      <div
        className="blob w-[500px] h-[500px] bottom-[-80px] right-[-150px] animate-float-slow"
        style={{
          background:
            "radial-gradient(circle, rgba(121,151,230,0.2) 0%, transparent 70%)",
        }}
      />
      <div
        className="blob w-[300px] h-[300px] top-[30%] left-[40%] animate-drift"
        style={{
          background:
            "radial-gradient(circle, rgba(32,106,188,0.15) 0%, transparent 70%)",
        }}
      />

      {/* ── Jellyfish particles (SVG circles) ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${4 + (i % 3) * 3}px`,
              height: `${4 + (i % 3) * 3}px`,
              left: `${10 + ((i * 7.5) % 85)}%`,
              top: `${15 + ((i * 13) % 70)}%`,
              background:
                i % 3 === 0
                  ? "rgba(202,169,243,0.5)"
                  : i % 3 === 1
                    ? "rgba(121,151,230,0.4)"
                    : "rgba(179,122,212,0.4)",
              boxShadow:
                i % 3 === 0
                  ? "0 0 12px rgba(202,169,243,0.8)"
                  : "0 0 12px rgba(121,151,230,0.6)",
            }}
            animate={{
              y: [0, -(20 + (i % 4) * 10), 0],
              opacity: [0.4, 0.9, 0.4],
            }}
            transition={{
              duration: 4 + (i % 3) * 2,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* ── Content ── */}
      <div className="max-w-7xl mx-auto px-6 py-32 w-full grid md:grid-cols-2 gap-16 items-center">
        {/* Left — text */}
        <div className="flex flex-col gap-6 order-2 md:order-1">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex items-center gap-2"
          >
            <Sparkles size={14} className="text-phlox" />
            <span className="section-label">Hello, I&apos;m</span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-serif font-light leading-[1.1]"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4.2rem)" }}
          >
            <span className="gradient-text">Xaris Joy</span>
            <br />
            <span className="text-white/90">Delarosa</span>
            <br />
            <span className="text-white/80">Tabayag</span>
          </motion.h1>

          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-2"
          >
            {[
              "Computer Science Student",
              "Requirements Analyst",
              "Tech Community Leader",
            ].map((tag) => (
              <span
                key={tag}
                className="glass-light rounded-full px-4 py-1.5 text-sm text-phlox/90 border border-phlox/15"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-white/55 leading-relaxed max-w-md"
            style={{ fontSize: "1.05rem" }}
          >
            Turning ideas into structured, user-centered solutions through
            research, documentation, and community-driven development. 3rd Year
            CS student at{" "}
            <span className="text-periwinkle">Bicol University</span>, building
            things that matter — one requirement at a time.
          </motion.p>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-4 pt-2"
          >
            <a
              href="#projects"
              className="btn-primary flex items-center gap-2 text-sm"
            >
              View Projects
              <ArrowDown size={15} />
            </a>
            <a
              href="/resume.pdf"
              download
              className="btn-outline flex items-center gap-2 text-sm"
            >
              <Download size={15} />
              Download CV
            </a>
            <a
              href="#contact"
              className="btn-outline flex items-center gap-2 text-sm"
            >
              <Mail size={15} />
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right — portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="flex justify-center items-center order-1 md:order-2"
        >
          <div className="portrait-container">
            {/* Outer glow ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-16px] rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, rgba(202,169,243,0.4), rgba(121,151,230,0.2), rgba(179,122,212,0.4), transparent, rgba(202,169,243,0.4))",
              }}
            />
            {/* Inner soft border */}
            <div
              className="relative z-10 rounded-full overflow-hidden"
              style={{
                width: "clamp(260px, 32vw, 400px)",
                height: "clamp(260px, 32vw, 400px)",
                border: "2px solid rgba(202,169,243,0.2)",
                boxShadow:
                  "0 0 60px rgba(179,122,212,0.4), 0 0 120px rgba(121,151,230,0.2)",
              }}
            >
              <Image
                src="/portrait.jpg"
                alt="Xaris Joy Tabayag"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Soft gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 60%, rgba(6,9,20,0.4) 100%)",
                }}
              />
            </div>

            {/* Floating accent badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-8 glass rounded-2xl px-4 py-2.5 z-20 border border-phlox/20"
            >
              <p className="text-xs text-white/50 font-medium">CS Student</p>
              <p className="text-sm font-semibold text-phlox">
                Bicol University
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -top-4 -right-8 glass rounded-2xl px-4 py-2.5 z-20 border border-periwinkle/20"
            >
              <p className="text-xs text-white/50 font-medium">Currently</p>
              <p className="text-sm font-semibold text-periwinkle">
                President, BU ACCeSS
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="section-label text-white/30">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(202,169,243,0.5) 0%, transparent 100%)",
          }}
        />
      </motion.div>
    </section>
  );
}
