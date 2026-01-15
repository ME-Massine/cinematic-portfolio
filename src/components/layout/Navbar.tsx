"use client";

import Container from "@/components/layout/Container";
import Link from "next/link";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const navItems = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.2,
  });
  const barOpacity = useTransform(scrollY, [0, 40], [0, 1]);

  const bg = useTransform(
    scrollY,
    [0, 120],
    ["rgba(255,255,255,0.00)", "rgba(255,255,255,0.06)"]
  );
  const border = useTransform(
    scrollY,
    [0, 120],
    ["rgba(255,255,255,0.00)", "rgba(255,255,255,0.10)"]
  );

  return (
    <motion.header
      style={{ backgroundColor: bg, borderColor: border }}
      className="sticky top-0 z-50 border-b backdrop-blur"
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-display text-sm tracking-[0.18em]">
            MASSINE
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((i) => (
              <a
                key={i.href}
                href={i.href}
                className="text-sm text-muted hover:text-foreground/90"
              >
                {i.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-foreground/90 hover:bg-white/10"
          >
            Let’s talk
          </a>
        </div>
      </Container>
      <div className="relative h-0.5 w-full overflow-hidden bg-white/5">
        <motion.div
          style={{
            opacity: barOpacity,
            scaleX: progress,
            transformOrigin: "0% 50%",
          }}
          className="h-full w-full bg-white/60"
        />
      </div>
    </motion.header>
  );
}
