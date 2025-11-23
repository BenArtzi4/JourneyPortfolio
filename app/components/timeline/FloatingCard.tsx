"use client";

import { motion } from "framer-motion";

export default function FloatingCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.01,
        y: -2,
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
      }}
      whileTap={{ scale: 0.99 }}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="h-full group"
    >
      {children}
    </motion.div>
  );
}
