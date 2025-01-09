"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypewriterTitleProps {
  text: string;
  className?: string;
}

export default function TypewriterTitle({
  text,
  className,
}: TypewriterTitleProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <motion.h2
      className={`text-4xl font-bold mb-12 text-center font-serif ${
        className || "text-gray-800"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="ml-1 inline-block"
      >
        |
      </motion.span>
    </motion.h2>
  );
}
