"use client";

import type { Project } from "@/app/content/projects";
import CaseStudyShell from "./CaseStudyShell";
import Container from "@/components/layout/Container";
import { motion } from "framer-motion";
import AzureConversationSection from "@/components/case-studies/sections/AzureConversationSection";
import { accentForSlug } from "@/app/lib/theme";
import AzureHeroMedia from "@/components/case-studies/media/AzureHeroMedia";

type Props = { project: Project };

const reveal = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export default function AzureStudentSupportCaseStudy({ project }: Props) {
  const theme = accentForSlug(project.slug);
  return (
    <CaseStudyShell
      project={project}
      accentClassName={theme.text}
      glowClassName={theme.glow}
      heroMedia={<AzureHeroMedia />}
    >
      <section className="pb-24">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            transition={{ staggerChildren: 0.08 }}
            className="grid gap-8 md:grid-cols-12"
          >
            <motion.div
              variants={reveal}
              transition={{ duration: 0.7 }}
              className="md:col-span-6"
            >
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <div className="text-xs tracking-[0.18em] text-muted">GOAL</div>
                <h2 className="mt-4 font-display text-2xl">
                  Support students without friction
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  The interface needed to feel calm, guiding, and intelligent,
                  while keeping control and trust visible through transparent UI
                  states.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={reveal}
              transition={{ duration: 0.7 }}
              className="md:col-span-6"
            >
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <div className="text-xs tracking-[0.18em] text-muted">
                  UX PRINCIPLES
                </div>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  <li>Clear system status and response states</li>
                  <li>Guided flows for high-stakes actions</li>
                  <li>Short, readable content density</li>
                  <li>Accessible, predictable interactions</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              variants={reveal}
              transition={{ duration: 0.7 }}
              className="md:col-span-12"
            >
              <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur">
                <div className="text-xs tracking-[0.18em] text-muted">
                  KEY FLOWS
                </div>
                <div className="mt-6 grid gap-6 md:grid-cols-3">
                  <Flow
                    title="Ask"
                    text="Chat-first input with structured suggestions."
                  />
                  <Flow
                    title="Guide"
                    text="Step-by-step assistance when context is needed."
                  />
                  <Flow
                    title="Resolve"
                    text="Action confirmation and next-best steps."
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>
      <AzureConversationSection />
    </CaseStudyShell>
  );
}

function Flow({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="font-display text-lg">{title}</div>
      <p className="mt-2 text-sm text-muted">{text}</p>
    </div>
  );
}
