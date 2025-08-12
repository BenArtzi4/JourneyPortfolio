"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { BasicTimelineItem } from "./types";

export default function TimelineCard({ item, index }: { item: BasicTimelineItem; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className={`mb-8 flex flex-col sm:flex-row ${index % 2 === 0 ? "sm:flex-row-reverse" : ""}`}
    >
      <div className="timeline-item sm:pl-8 sm:pr-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {item.year && <span className="text-primary font-semibold">{item.year}</span>}
          <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800">{item.title}</h3>
          {item.subtitle && <h4 className="text-lg md:text-xl text-gray-600 mb-2">{item.subtitle}</h4>}
          {item.description && (
            <ul className="list-disc list-inside text-gray-700 custom-list">
              {item.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.div>
  );
}
