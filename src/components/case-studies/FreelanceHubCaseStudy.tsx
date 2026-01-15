"use client";

import type { Project } from "@/app/content/projects";
import CaseStudyShell from "./CaseStudyShell";
import Container from "@/components/layout/Container";
import { motion } from "framer-motion";
import FreelanceFiltersSection from "@/components/case-studies/sections/FreelanceFiltersSection";
import { accentForSlug } from "@/app/lib/theme";

type Props = { project: Project };

const reveal = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export default function FreelanceHubCaseStudy({ project }: Props) {
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
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            transition={{ staggerChildren: 0.08 }}
            className="grid gap-8 md:grid-cols-12"
          >
            <motion.div
              variants={reveal}
              transition={{ duration: 0.7 }}
              className="md:col-span-7"
            >
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <div className="text-xs tracking-[0.18em] text-muted">
                  CHALLENGE
                </div>
                <h2 className="mt-4 font-display text-2xl">
                  Discovery and conversion
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Marketplaces live and die on navigation clarity. The UI must
                  make browsing fast, filtering obvious, and profiles instantly
                  trustworthy.
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
                  APPROACH
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  Strong card design, clean filter UX, and motion that
                  reinforces hierarchy without slowing the user.
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
                  INTERACTION DESIGN
                </div>
                <div className="mt-6 grid gap-6 md:grid-cols-3">
                  <Point
                    title="Card hierarchy"
                    text="Clear metadata, rates, and CTA emphasis."
                  />
                  <Point
                    title="Filters"
                    text="Fast scanning, minimal friction, instant feedback."
                  />
                  <Point
                    title="Motion"
                    text="Hover, focus, and transitions that guide attention."
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>
      <FreelanceFiltersSection />
    </CaseStudyShell>
  );
}

function Point({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="font-display text-lg">{title}</div>
      <p className="mt-2 text-sm text-muted">{text}</p>
    </div>
  );
}
