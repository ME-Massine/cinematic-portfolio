"use client";

import { useEffect } from "react";
import { motion, useAnimation, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function RouteOverlayTransition() {
  const pathname = usePathname();
  const controls = useAnimation();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    const run = async () => {
      controls.stop();
      controls.set({ opacity: 0 });
      await controls.start({
        opacity: 0.12,
        transition: { duration: 0.12, ease: [0.22, 1, 0.36, 1] },
      });

      await controls.start({
        opacity: 0,
        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
      });
    };

    run();
    return () => {
      controls.stop();
      controls.set({ opacity: 0 });
    };
  }, [pathname, controls, reduceMotion]);

  if (reduceMotion) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      className="pointer-events-none fixed inset-0 z-[100] bg-black"
    />
  );
}
