"use client";

import Container from "@/components/layout/Container";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur"
        >
          <div className="pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(circle_at_50%_40%,black_30%,transparent_75%)] bg-accent/10" />

          <div className="relative grid gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="text-sm tracking-[0.18em] text-muted">CONTACT</p>
              <h2 className="mt-4 font-display text-3xl tracking-[-0.02em] md:text-4xl">
                Want a frontend that looks premium?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
                If you are building a product or portfolio and want strong
                motion + clean UI systems, I can help design and implement the
                interface end to end.
              </p>
            </div>

            <div className="md:col-span-5 md:pl-6">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
                <div className="text-xs tracking-[0.18em] text-muted">
                  REACH ME
                </div>
                <div className="mt-4 space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted">Email</span>
                    <span className="text-foreground/90">your@email.com</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted">GitHub</span>
                    <span className="text-foreground/90">
                      github.com/username
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted">LinkedIn</span>
                    <span className="text-foreground/90">
                      linkedin.com/in/username
                    </span>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href="mailto:your@email.com"
                    className="inline-flex flex-1 items-center justify-center rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background hover:opacity-90"
                  >
                    Email me
                  </a>
                  <a
                    href="#work"
                    className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-foreground/90 hover:bg-white/10"
                  >
                    View work
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
