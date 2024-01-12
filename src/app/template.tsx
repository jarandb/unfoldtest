// app/template.tsx
"use client";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence initial={true} mode="wait">
      <motion.main
        variants={variants}
        initial="enter"
        transition={{ type: "linear" }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
