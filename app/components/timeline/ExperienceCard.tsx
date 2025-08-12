"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { CompanyExperienceItem } from "./types";

export default function ExperienceCard({ item, index }: { item: CompanyExperienceItem; index: number }) {
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
          <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800">{item.company}</h3>

          <div className="space-y-5">
            {item.roles.map((role, i) => (
              <div key={i}>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-primary font-semibold">{role.year}</span>
                  <span className="text-gray-500">•</span>
                  <h4 className="text-lg md:text-xl text-gray-700">{role.title}</h4>
                  {role.isStudent && (
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-100 border border-gray-200">
                      Student Role
                    </span>
                  )}
                </div>

                {role.description && (
                  <ul className="list-disc list-inside text-gray-700 custom-list">
                    {role.description.map((d, j) => (
                      <li key={j}>{d}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
