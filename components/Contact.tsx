"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Github, Linkedin, Facebook, Download, Send, MapPin, CheckCircle, AlertCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] },
  }),
};

const socials = [
  {
    label: "Email",
    value: "xjdt2023-1405-55608@bicol-u.edu.ph",
    href: "mailto:xjdt2023-1405-55608@bicol-u.edu.ph",
    icon: <Mail size={18} />,
    color: "#CAA9F3",
  },
  {
    label: "GitHub",
    value: "github.com/Aexreii",
    href: "https://github.com/Aexreii",
    icon: <Github size={18} />,
    color: "#7997E6",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/xaris-tabayag",
    href: "https://linkedin.com/in/xaris-tabayag",
    icon: <Linkedin size={18} />,
    color: "#B37AD4",
  },
  {
    label: "Facebook",
    value: "facebook.com/xaris.tabayag",
    href: "https://facebook.com",
    icon: <Facebook size={18} />,
    color: "#206ABC",
  },
];

type Status = "idle" | "success" | "error";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    // In production, wire this to Formspree, Resend, or your email provider
    await new Promise((r) => setTimeout(r, 800));
    setStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <>
      <section id="contact" className="relative py-32 overflow-hidden">
        <div
          className="blob w-[600px] h-[600px] bottom-[-100px] left-1/2 -translate-x-1/2"
          style={{ background: "radial-gradient(circle, rgba(179,122,212,0.12) 0%, transparent 70%)" }}
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
            <span className="section-label">Contact</span>
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
            <span className="text-white/90">Let&apos;s</span>
            <br />
            <span className="gradient-text italic">work together</span>
          </motion.h2>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="text-white/45 max-w-md mb-14 text-[1.05rem]"
          >
            Open to internships, project collaborations, and conversations about design & technology.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left — form */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="glass rounded-3xl p-8 border border-white/5 glow-border"
            >
              <h3 className="font-serif text-2xl text-white/85 mb-6">Send a message</h3>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-white/40 mb-1.5 block">Name *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-white/40 mb-1.5 block">Email *</label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      type="email"
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-white/40 mb-1.5 block">Subject</label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Internship, collaboration, etc."
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="text-xs text-white/40 mb-1.5 block">Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me what you have in mind..."
                    rows={5}
                    className="form-input resize-none"
                  />
                </div>

                {status === "success" && (
                  <div className="flex items-center gap-2 text-green-400 text-sm">
                    <CheckCircle size={16} />
                    <span>Message sent! I&apos;ll get back to you soon.</span>
                  </div>
                )}
                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-400 text-sm">
                    <AlertCircle size={16} />
                    <span>Something went wrong. Please try again.</span>
                  </div>
                )}

                <button
                  onClick={handleSubmit}
                  className="btn-primary w-full flex items-center justify-center gap-2 text-sm"
                  disabled={status === "success"}
                >
                  <Send size={15} />
                  Send Message
                </button>
              </div>
            </motion.div>

            {/* Right — info */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="space-y-6"
            >
              {/* Location */}
              <div className="flex items-center gap-3 text-white/50">
                <MapPin size={16} className="text-phlox shrink-0" />
                <span className="text-sm">Legazpi City, Albay, Philippines</span>
              </div>

              {/* Socials */}
              <div className="space-y-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 glass-light rounded-2xl px-5 py-4 border border-white/5 hover:border-phlox/20 transition-all group"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all group-hover:scale-110"
                      style={{
                        background: `${s.color}15`,
                        color: s.color,
                        border: `1px solid ${s.color}20`,
                      }}
                    >
                      {s.icon}
                    </div>
                    <div>
                      <p className="text-xs text-white/35 mb-0.5">{s.label}</p>
                      <p className="text-sm text-white/70 group-hover:text-white transition-colors">{s.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Resume download */}
              <a
                href="/resume.pdf"
                download
                className="flex items-center justify-center gap-2 btn-outline w-full text-sm mt-6"
              >
                <Download size={15} />
                Download Resume / CV
              </a>

              {/* Availability note */}
              <p className="text-white/30 text-xs text-center italic">
                Currently open to internship opportunities and project collaborations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-serif text-xl gradient-text">XJT</p>
          <p className="text-white/25 text-sm text-center">
            © {new Date().getFullYear()} Xaris Joy Delarosa Tabayag. Designed with love in Bicol.
          </p>
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="text-white/25 hover:text-phlox transition-colors"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
