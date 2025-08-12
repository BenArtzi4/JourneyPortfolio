"use client";

import { motion } from "framer-motion";

export default function FloatingCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0, transition: { type: "spring", stiffness: 260, damping: 20 } }}
      viewport={{ once: true }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}
