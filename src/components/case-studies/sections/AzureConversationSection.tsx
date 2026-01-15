"use client";

import Container from "@/components/layout/Container";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const reveal = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

type StateKey = "idle" | "thinking" | "answering" | "handoff";

const stateCopy: Record<StateKey, { label: string; hint: string }> = {
  idle: { label: "Idle", hint: "Prompts and suggestions ready" },
  thinking: { label: "Thinking", hint: "System status visible and calm" },
  answering: { label: "Answering", hint: "Readable chunks, no overload" },
  handoff: { label: "Handoff", hint: "Escalate to human when needed" },
};

export default function AzureConversationSection() {
  const [state, setState] = useState<StateKey>("idle");

  useEffect(() => {
    const order: StateKey[] = ["idle", "thinking", "answering", "handoff"];
    let i = 0;
    const t = setInterval(() => {
      i = (i + 1) % order.length;
      setState(order[i]);
    }, 3800);
    return () => clearInterval(t);
  }, []);

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
              CONVERSATION STATES
            </p>
            <h3 className="mt-4 font-display text-2xl tracking-[-0.02em]">
              Trust through visible system status
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              The interface makes AI behavior legible. Users always know what is
              happening, what the system needs, and what comes next.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {(Object.keys(stateCopy) as StateKey[]).map((k) => {
                const active = k === state;
                return (
                  <button
                    key={k}
                    onClick={() => setState(k)}
                    className={[
                      "rounded-full border px-3 py-1 text-xs transition",
                      active
                        ? "border-sky-200/30 bg-sky-200/10 text-sky-100"
                        : "border-white/10 bg-white/5 text-muted hover:bg-white/10",
                    ].join(" ")}
                  >
                    {stateCopy[k].label}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 text-sm text-muted">
              <span className="text-foreground/80">
                {stateCopy[state].label}:
              </span>{" "}
              {stateCopy[state].hint}
            </div>
          </motion.div>

          <motion.div
            variants={reveal}
            transition={{ duration: 0.7 }}
            className="md:col-span-7"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(circle_at_50%_45%,black_35%,transparent_75%)] bg-accent/10" />

              <div className="relative space-y-4">
                <Bubble
                  side="user"
                  text="I am stressed about exams. Can you help me plan?"
                />
                {state === "thinking" && (
                  <Bubble
                    side="ai"
                    text="Thinking... gathering a plan based on your schedule."
                    tone="thinking"
                  />
                )}
                {state === "answering" && (
                  <>
                    <Bubble
                      side="ai"
                      text="Here is a simple 7-day plan with 3 blocks per day."
                    />
                    <Bubble
                      side="ai"
                      text="We can adjust it if you tell me your weakest subjects."
                    />
                  </>
                )}
                {state === "handoff" && (
                  <>
                    <Bubble
                      side="ai"
                      text="This looks like a high-stakes case. I can connect you to a counselor or advisor."
                      tone="handoff"
                    />
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-muted">
                      Suggested actions: Contact advisor, See resources,
                      Schedule appointment
                    </div>
                  </>
                )}
                {state === "idle" && (
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-muted">
                    Suggestions: Study plan, Time management, Motivation, Past
                    papers
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

function Bubble({
  side,
  text,
  tone,
}: {
  side: "user" | "ai";
  text: string;
  tone?: "thinking" | "handoff";
}) {
  const isUser = side === "user";
  const base =
    "max-w-[85%] rounded-2xl border px-4 py-3 text-sm leading-relaxed";
  const cls = isUser
    ? "ml-auto border-white/10 bg-white/10 text-foreground"
    : tone === "handoff"
    ? "mr-auto border-sky-200/20 bg-sky-200/10 text-sky-100"
    : tone === "thinking"
    ? "mr-auto border-white/10 bg-white/5 text-muted"
    : "mr-auto border-white/10 bg-white/5 text-foreground/90";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${base} ${cls}`}
    >
      {text}
    </motion.div>
  );
}
