"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

export default function MedicalHeroMedia() {
  const ref = useRef<HTMLDivElement | null>(null);

  // Motion values for parallax tilt (very subtle)
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);

  // Spring to keep it smooth, not twitchy
  const srx = useSpring(rx, { stiffness: 140, damping: 18, mass: 0.5 });
  const sry = useSpring(ry, { stiffness: 140, damping: 18, mass: 0.5 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width; // 0..1
    const py = (e.clientY - r.top) / r.height; // 0..1

    // tilt ranges (keep small to avoid nausea)
    const tiltY = (px - 0.5) * 6; // rotateY
    const tiltX = (0.5 - py) * 6; // rotateX

    rx.set(tiltX);
    ry.set(tiltY);
  }

  function onLeave() {
    rx.set(0);
    ry.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      style={{
        transformStyle: "preserve-3d",
        rotateX: srx,
        rotateY: sry,
      }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
    >
      {/* Accent glow */}
      <div className="pointer-events-none absolute inset-0 opacity-45 [mask-image:radial-gradient(circle_at_50%_35%,black_35%,transparent_75%)] bg-emerald-400/10" />

      {/* Specular sweep (subtle) */}
      <motion.div
        aria-hidden="true"
        initial={{ x: "-120%", opacity: 0 }}
        whileHover={{ x: "120%", opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute top-[-40%] h-[180%] w-[40%] rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />

      {/* Content */}
      <div
        style={{ transform: "translateZ(14px)" }}
        className="relative grid gap-5 md:grid-cols-12"
      >
        {/* left: nav */}
        <div className="md:col-span-3">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <div className="text-xs tracking-[0.18em] text-muted">CLINIC</div>

            <div className="mt-3 space-y-2">
              {["Dashboard", "Appointments", "Patients", "Reports"].map(
                (x, idx) => (
                  <div
                    key={x}
                    className={[
                      "rounded-xl border px-3 py-2 text-xs transition",
                      idx === 0
                        ? "border-emerald-200/20 bg-emerald-200/10 text-emerald-100"
                        : "border-white/10 bg-white/5 text-muted",
                    ].join(" ")}
                  >
                    {x}
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* right: content */}
        <div className="md:col-span-9">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { k: "Today", v: "18 appts" },
              { k: "Checked-in", v: "9" },
              { k: "Avg wait", v: "7m" },
            ].map((c) => (
              <div
                key={c.k}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <div className="text-xs text-muted">{c.k}</div>
                <div className="mt-2 font-display text-xl text-foreground/90">
                  {c.v}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center justify-between">
              <div className="text-xs tracking-[0.18em] text-muted">
                SCHEDULE
              </div>
              <div className="text-xs text-emerald-200/90">Live</div>
            </div>

            <div className="mt-4 space-y-3">
              {[
                ["09:00", "Consultation", "Amine A."],
                ["09:30", "Follow-up", "Salma E."],
                ["10:00", "New patient", "Yassine M."],
              ].map((r) => (
                <div
                  key={r.join("-")}
                  className="grid grid-cols-12 items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
                >
                  <div className="col-span-2 text-xs text-muted">{r[0]}</div>
                  <div className="col-span-6 text-xs text-foreground/90">
                    {r[1]}
                  </div>
                  <div className="col-span-4 text-right text-xs text-muted">
                    {r[2]}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Micro-status bar */}
          <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">
            <div className="flex items-center justify-between text-xs text-muted">
              <span>System status</span>
              <span className="text-emerald-200/80">Stable</span>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full border border-white/10 bg-white/5">
              <motion.div
                initial={{ width: "42%" }}
                whileHover={{ width: "78%" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="h-full bg-emerald-200/20"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
