"use client";

import Container from "@/components/layout/Container";
import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

const lanes = [
  {
    title: "Reception workflow",
    items: [
      "Appointments",
      "Patient search",
      "Quick check-in",
      "Daily schedule",
    ],
  },
  {
    title: "Clinical workflow",
    items: [
      "Patient record",
      "History and notes",
      "Prescription",
      "Visit timeline",
    ],
  },
  {
    title: "Admin workflow",
    items: [
      "Staff management",
      "Reporting",
      "Settings",
      "Audit-friendly states",
    ],
  },
];

export default function MedicalIASection() {
  return (
    <section className="pb-24">
      <Container>
        <div className="grid gap-10 md:grid-cols-12">
          {/* Sticky rail */}
          <div className="md:col-span-4">
            <div className="md:sticky md:top-24">
              <p className="text-sm tracking-[0.18em] text-muted">
                INFORMATION ARCHITECTURE
              </p>
              <h3 className="mt-4 font-display text-2xl tracking-[-0.02em]">
                Dashboard-first clarity
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                The UI is organized by real clinic roles. Each workflow has
                predictable navigation, consistent forms, and a clear hierarchy
                for time-critical tasks.
              </p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-xs tracking-[0.18em] text-muted">
                  DESIGN RULES
                </div>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  <li>Single primary action per screen</li>
                  <li>Consistent validation and feedback</li>
                  <li>Dense data, readable spacing</li>
                  <li>Clear system status everywhere</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Flow lanes */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            transition={{ staggerChildren: 0.08 }}
            className="md:col-span-8"
          >
            <div className="grid gap-6">
              {lanes.map((lane) => (
                <motion.div
                  key={lane.title}
                  variants={reveal}
                  transition={{ duration: 0.7 }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="font-display text-xl">{lane.title}</div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-emerald-200/90">
                      optimized
                    </span>
                  </div>

                  <div className="mt-5 grid gap-3 md:grid-cols-2">
                    {lane.items.map((it) => (
                      <div
                        key={it}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-muted"
                      >
                        {it}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
