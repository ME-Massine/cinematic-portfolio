"use client";

import Container from "@/components/layout/Container";
import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/app/content/projects";

type Props = {
  project: Project;
  accentClassName?: string;
  glowClassName?: string;
  heroMedia?: React.ReactNode;
  children: React.ReactNode;
};

const fadeUp = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export default function CaseStudyShell({
  project,
  accentClassName,
  glowClassName,
  heroMedia,
  children,
}: Props) {
  return (
    <main className="relative">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-background" />
        <div
          className={`absolute left-[-18%] top-[-25%] h-130 w-130 rounded-full blur-3xl ${
            glowClassName ?? "bg-accent/10"
          }`}
        />
        <div
          className={`absolute right-[-20%] top-[10%] h-105 w-105 rounded-full blur-3xl ${
            glowClassName ?? "bg-accent/10"
          }`}
        />
      </div>

      <Container>
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.08, delayChildren: 0.05 }}
          className="relative py-20"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.65 }}
            className="flex items-center justify-between"
          >
            <Link
              href="/"
              className="text-sm text-muted hover:text-foreground/90"
            >
              ← Back
            </Link>
            <div className="text-xs text-muted">{project.year}</div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.75 }}
            className="mt-8 font-display text-4xl tracking-[-0.02em] md:text-6xl"
          >
            {project.title}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.75 }}
            className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg"
          >
            {project.subtitle}
          </motion.p>
          {heroMedia ? (
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.75 }}
              className="mt-10"
            >
              {heroMedia}
            </motion.div>
          ) : null}

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.75 }}
            className="mt-8 grid gap-6 border-t border-white/10 pt-8 md:grid-cols-12"
          >
            <div className="md:col-span-5">
              <div className="text-xs tracking-[0.18em] text-muted">ROLE</div>
              <div
                className={`mt-2 text-sm ${
                  accentClassName ?? "text-foreground/90"
                }`}
              >
                {project.role ?? "Project"}
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="text-xs tracking-[0.18em] text-muted">STACK</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {(project.stack ?? project.tags).map((t) => (
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
        </motion.div>
      </Container>

      {children}

      <div className="py-16">
        <Container>
          <div className="border-t border-white/10 pt-10 text-sm text-muted">
            More case studies coming. Return to the homepage for selected work.
          </div>
        </Container>
      </div>
    </main>
  );
}
