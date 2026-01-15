"use client";

import type { Project } from "@/app/content/projects";
import CaseStudyShell from "./CaseStudyShell";
import Container from "@/components/layout/Container";
import { motion } from "framer-motion";
import MedicalIASection from "@/components/case-studies/sections/MedicalIASection";
import { accentForSlug } from "@/app/lib/theme";

type Props = { project: Project };

const reveal = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export default function MedicalOfficeCaseStudy({ project }: Props) {
  const theme = accentForSlug(project.slug);
  return (
    <CaseStudyShell
      project={project}
      accentClassName={theme.text}
      glowClassName={theme.glow}
    >
      <section className="pb-24">
        <Container>
          <motion.div
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.08, delayChildren: 0.08 }}
            className="grid gap-8 md:grid-cols-12"
          >
            <motion.div
              variants={reveal}
              transition={{ duration: 0.7 }}
              className="md:col-span-7"
            >
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <div className="text-xs tracking-[0.18em] text-muted">
                  PROBLEM
                </div>
                <h2 className="mt-4 font-display text-2xl">
                  Clinic workflows were fragmented
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Appointment scheduling, patient records, and operational
                  tracking were spread across multiple screens and inconsistent
                  UX patterns, increasing time-to-task and errors.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={reveal}
              transition={{ duration: 0.7 }}
              className="md:col-span-5"
            >
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <div className="text-xs tracking-[0.18em] text-muted">
                  SOLUTION
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  A dashboard-first information architecture with clear
                  hierarchy, quick actions, and consistent form patterns to
                  reduce cognitive load and speed up daily operations.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={reveal}
              transition={{ duration: 0.7 }}
              className="md:col-span-12"
            >
              <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur">
                <div className="text-xs tracking-[0.18em] text-muted">
                  HIGHLIGHTS
                </div>
                <div className="mt-6 grid gap-6 md:grid-cols-3">
                  <Feature
                    title="Dashboard clarity"
                    text="Prioritized KPIs and tasks with clean density control."
                  />
                  <Feature
                    title="Form consistency"
                    text="Unified input patterns and validation feedback."
                  />
                  <Feature
                    title="Workflow speed"
                    text="Reduced steps for common tasks via quick actions."
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>
      <MedicalIASection />
    </CaseStudyShell>
  );
}

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="font-display text-lg">{title}</div>
      <p className="mt-2 text-sm text-muted">{text}</p>
    </div>
  );
}
