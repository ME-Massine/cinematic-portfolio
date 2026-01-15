"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";

const fadeUp = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute left-[-20%] top-[-30%] h-[520px] w-[520px] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute right-[-15%] top-[10%] h-[420px] w-[420px] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <Container>
        <div className="relative grid min-h-[92vh] items-center gap-10 py-24 lg:grid-cols-12">
          {/* Left: headline */}
          <div className="lg:col-span-7">
            <motion.div
              initial="hidden"
              animate="show"
              transition={{ staggerChildren: 0.08, delayChildren: 0.05 }}
            >
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="text-sm tracking-[0.18em] text-muted"
              >
                MASSINE AMAKHTARI
              </motion.p>

              <motion.h1
                variants={fadeUp}
                transition={{ duration: 0.8 }}
                className="mt-5 font-display text-5xl leading-[1.02] tracking-[-0.02em] md:text-7xl"
              >
                Cinematic Frontend
                <span className="block text-foreground/80">Experiences</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.75 }}
                className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg"
              >
                I build interaction-driven interfaces with disciplined motion,
                modern architecture, and a premium visual finish.
              </motion.p>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.75 }}
                className="mt-10 flex flex-wrap gap-3"
              >
                <a
                  href="#work"
                  className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:opacity-90"
                >
                  View selected work
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition hover:bg-white/10"
                >
                  Contact
                </a>
              </motion.div>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.75 }}
                className="mt-10 flex flex-wrap gap-2 text-xs text-muted"
              >
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  Next.js
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  TypeScript
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  Motion
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  3D (R3F)
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: 3D placeholder */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="relative h-105 w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur"
            >
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent" />
              </div>

              <div className="relative flex h-full items-center justify-center text-sm text-muted">
                3D scene goes here
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
