"use client";

import Container from "@/components/layout/Container";
import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

const capabilities = [
  {
    title: "Cinematic UI Motion",
    text: "Disciplined transitions and interaction design that guide attention without noise.",
  },
  {
    title: "Frontend Architecture",
    text: "Reusable component systems, strong patterns, and clean routing for scalable builds.",
  },
  {
    title: "Polished Visual Systems",
    text: "Typography hierarchy, spacing control, and glass/lighting effects with restraint.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          transition={{ staggerChildren: 0.08, delayChildren: 0.05 }}
          className="grid gap-10 md:grid-cols-12"
        >
          <motion.div
            variants={reveal}
            transition={{ duration: 0.7 }}
            className="md:col-span-5"
          >
            <p className="text-sm tracking-[0.18em] text-muted">ABOUT</p>
            <h2 className="mt-4 font-display text-3xl tracking-[-0.02em] md:text-4xl">
              Frontend-first, detail-driven
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
              I build interfaces that look premium and feel fast. My focus is
              the intersection of modern frontend engineering and cinematic
              presentation: motion, 3D accents, and high clarity UX.
            </p>

            <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-xs tracking-[0.18em] text-muted">
                CURRENT FOCUS
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "TypeScript",
                  "Tailwind v4",
                  "Framer Motion",
                  "R3F",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={reveal}
            transition={{ duration: 0.7 }}
            className="md:col-span-7"
          >
            <div className="grid gap-6">
              {capabilities.map((c) => (
                <div
                  key={c.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur"
                >
                  <div className="font-display text-xl">{c.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {c.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
