"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { CompanyExperienceItem } from "./types";

export default function ExperienceCard({ item, index }: { item: CompanyExperienceItem; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-12 md:mb-16 flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
    >
      <div className="timeline-item md:pl-12 md:pr-12">
        <div className="relative bg-background-elevated border border-border rounded-xl p-6 md:p-8 hover:border-border-subtle transition-colors duration-300 overflow-hidden group">
          {/* Subtle gradient overlay on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-accent-glow via-transparent to-transparent pointer-events-none" />

          {/* Content */}
          <div className="relative">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground tracking-tight mb-6">{item.company}</h3>

            <div className="space-y-6">
              {item.roles.map((role, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-medium text-accent">{role.year}</span>
                    <span className="text-foreground-subtle">·</span>
                    <h4 className="text-base md:text-lg font-medium text-foreground-muted">{role.title}</h4>
                    {role.isStudent && (
                      <span className="text-xs px-2.5 py-1 rounded-md bg-background-surface border border-border text-foreground-muted">
                        Student Role
                      </span>
                    )}
                  </div>

                  {role.description && (
                    <ul className="space-y-2 text-sm text-foreground-muted leading-relaxed">
                      {role.description.map((d, j) => (
                        <li key={j} className="flex gap-3">
                          <span className="text-accent mt-1.5">•</span>
                          <span className="flex-1">{d}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
