"use client";

import Container from "@/components/layout/Container";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";

const reveal = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

type Tag = "Design" | "Web" | "Mobile" | "AI" | "Brand";

const allTags: Tag[] = ["Design", "Web", "Mobile", "AI", "Brand"];

type Card = { name: string; title: string; rate: string; tags: Tag[] };

const cards: Card[] = [
  {
    name: "Nora",
    title: "UI Designer",
    rate: "€35/hr",
    tags: ["Design", "Brand"],
  },
  { name: "Yassine", title: "Frontend Dev", rate: "€40/hr", tags: ["Web"] },
  { name: "Salma", title: "Mobile Dev", rate: "€38/hr", tags: ["Mobile"] },
  { name: "Omar", title: "AI Engineer", rate: "€50/hr", tags: ["AI", "Web"] },
  {
    name: "Lina",
    title: "Brand Designer",
    rate: "€45/hr",
    tags: ["Brand", "Design"],
  },
  { name: "Hicham", title: "Full-stack", rate: "€55/hr", tags: ["Web", "AI"] },
];

export default function FreelanceFiltersSection() {
  const [active, setActive] = useState<Tag | "All">("All");

  const filtered = useMemo(() => {
    if (active === "All") return cards;
    return cards.filter((c) => c.tags.includes(active));
  }, [active]);

  return (
    <section className="pb-24">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          transition={{ staggerChildren: 0.08 }}
          className="grid gap-10 md:grid-cols-12"
        >
          <motion.div
            variants={reveal}
            transition={{ duration: 0.7 }}
            className="md:col-span-5"
          >
            <p className="text-sm tracking-[0.18em] text-muted">
              FILTERING EXPERIENCE
            </p>
            <h3 className="mt-4 font-display text-2xl tracking-[-0.02em]">
              Fast discovery, zero friction
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Filters should feel instant and lightweight. Motion is used to
              confirm changes and preserve context, not to decorate.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Chip
                label="All"
                active={active === "All"}
                onClick={() => setActive("All")}
              />
              {allTags.map((t) => (
                <Chip
                  key={t}
                  label={t}
                  active={active === t}
                  onClick={() => setActive(t)}
                />
              ))}
            </div>

            <div className="mt-4 text-sm text-muted">
              Showing{" "}
              <span className="text-foreground/80">{filtered.length}</span>{" "}
              results
            </div>
          </motion.div>

          <motion.div
            variants={reveal}
            transition={{ duration: 0.7 }}
            className="md:col-span-7"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <AnimatePresence mode="popLayout">
                <motion.div layout className="grid gap-4 sm:grid-cols-2">
                  {filtered.map((c) => (
                    <motion.div
                      key={c.name}
                      layout
                      initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: 10, filter: "blur(6px)" }}
                      transition={{ duration: 0.35 }}
                      className="rounded-2xl border border-white/10 bg-white/5 p-5"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="font-display text-lg">{c.name}</div>
                          <div className="mt-1 text-sm text-muted">
                            {c.title}
                          </div>
                        </div>
                        <div className="text-sm text-violet-200/90">
                          {c.rate}
                        </div>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {c.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

function Chip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={[
        "rounded-full border px-4 py-2 text-xs transition",
        active
          ? "border-violet-200/30 bg-violet-200/10 text-violet-100"
          : "border-white/10 bg-white/5 text-muted hover:bg-white/10",
      ].join(" ")}
    >
      {label}
    </button>
  );
}
