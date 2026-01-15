"use client";

import Container from "@/components/layout/Container";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    time: "08:45",
    title: "Check-in",
    detail:
      "Fast reception flow. Patient search, verification, and a single primary action.",
  },
  {
    time: "09:00",
    title: "Vitals and intake",
    detail:
      "Consistent form patterns with clear validation and error prevention.",
  },
  {
    time: "09:15",
    title: "Consultation",
    detail:
      "Timeline-based notes, history visibility, and focused screen hierarchy.",
  },
  {
    time: "09:35",
    title: "Prescription",
    detail:
      "Action confirmation and clear system status for high-stakes actions.",
  },
  {
    time: "09:45",
    title: "Billing and follow-up",
    detail: "Close the loop with next steps and minimal friction scheduling.",
  },
];

export default function MedicalTimelineSection() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.85", "end 0.25"],
  });

  // Progress bar fills as the user scrolls this section
  const fill = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  // Subtle rail glow intensity
  const glow = useTransform(scrollYProgress, [0, 1], [0.15, 0.45]);

  return (
    <section ref={sectionRef} className="pb-24">
      <Container>
        <div className="grid gap-10 md:grid-cols-12">
          {/* Sticky rail */}
          <div className="md:col-span-4">
            <div className="md:sticky md:top-24">
              <p className="text-sm tracking-[0.18em] text-muted">
                VISIT TIMELINE
              </p>
              <h3 className="mt-4 font-display text-2xl tracking-[-0.02em]">
                A workflow that reads like a story
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                The experience mirrors real clinic flow. Each stage has a clear
                primary action, predictable patterns, and visible system status.
              </p>

              <div className="mt-7 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="flex items-center justify-between">
                  <div className="text-xs tracking-[0.18em] text-muted">
                    PROGRESS
                  </div>
                  <div className="text-xs text-emerald-200/90">Clinic flow</div>
                </div>

                <div className="mt-5 relative h-40 overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="absolute left-6 top-4 bottom-4 w-px bg-white/10" />

                  {!reduceMotion ? (
                    <>
                      <motion.div
                        style={{ height: fill, opacity: glow }}
                        className="absolute left-6 top-4 w-px bg-emerald-200/60"
                      />
                      <motion.div
                        style={{ opacity: glow }}
                        className="pointer-events-none absolute inset-0 bg-emerald-400/10 [mask-image:radial-gradient(circle_at_30%_40%,black_20%,transparent_70%)]"
                      />
                    </>
                  ) : (
                    <div className="absolute left-6 top-4 h-[70%] w-px bg-emerald-200/40" />
                  )}

                  <div className="relative ml-10 space-y-3 text-xs text-muted">
                    <div className="flex items-center gap-2">
                      <Dot active />
                      <span>Check-in</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Dot />
                      <span>Intake</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Dot />
                      <span>Consultation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Dot />
                      <span>Prescription</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Dot />
                      <span>Follow-up</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-xs text-muted">
                  Motion is used to confirm progress and preserve context.
                </div>
              </div>
            </div>
          </div>

          {/* Timeline cards */}
          <div className="md:col-span-8">
            <div className="space-y-6">
              {steps.map((s, idx) => (
                <TimelineCard key={s.title} step={s} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Dot({ active }: { active?: boolean }) {
  return (
    <span
      className={[
        "inline-block h-2.5 w-2.5 rounded-full border",
        active
          ? "border-emerald-200/40 bg-emerald-200/20"
          : "border-white/15 bg-white/5",
      ].join(" ")}
    />
  );
}

function TimelineCard({
  step,
  index,
}: {
  step: { time: string; title: string; detail: string };
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.03,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(circle_at_15%_30%,black_20%,transparent_70%)] bg-emerald-400/10" />

      <div className="relative flex items-start gap-6">
        <div className="shrink-0">
          <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-2 text-xs text-muted">
            {step.time}
          </div>
        </div>

        <div className="min-w-0">
          <h4 className="font-display text-xl tracking-[-0.01em]">
            {step.title}
          </h4>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {step.detail}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {["Primary action", "Clear status", "Consistent patterns"].map(
              (t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted"
                >
                  {t}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
