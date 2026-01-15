"use client";

import Container from "@/components/layout/Container";
import { projects } from "@/app/content/projects";
import { motion } from "framer-motion";
import Link from "next/link";

const card = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export default function SelectedWork() {
  return (
    <section id="work" className="relative py-24">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm tracking-[0.18em] text-muted">
              SELECTED WORK
            </p>
            <h2 className="mt-4 font-display text-3xl tracking-[-0.02em] md:text-4xl">
              Projects with a premium UI finish
            </h2>
          </div>

          <p className="hidden max-w-sm text-sm text-muted md:block">
            Three case studies. Clean architecture, disciplined motion, and
            strong visual identity.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.08, delayChildren: 0.05 }}
          className="mt-12 grid gap-6 lg:grid-cols-3"
        >
          {projects.map((p) => (
            <motion.div
              key={p.slug}
              variants={card}
              transition={{ duration: 0.7 }}
            >
              <Link
                href={`/work/${p.slug}`}
                className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
              >
                {/* media placeholder */}
                <div className="relative h-44 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent">
                  <div className="absolute inset-0 opacity-50 [mask-image:radial-gradient(circle_at_50%_45%,black_35%,transparent_75%)] bg-accent/10" />
                  <div className="absolute inset-0 scale-[1.02] transition duration-700 group-hover:scale-[1.08]" />
                </div>

                <div className="mt-6 flex items-center justify-between gap-3">
                  <h3 className="font-display text-xl tracking-[-0.01em]">
                    {p.title}
                  </h3>
                  <span className="text-xs text-muted">{p.year}</span>
                </div>

                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {p.subtitle}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted transition group-hover:text-foreground/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 text-sm font-medium text-foreground/80">
                  View case study{" "}
                  <span className="inline-block transition group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
