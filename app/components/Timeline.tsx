"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import TypewriterTitle from "./TypewriterTitle";

import ExperienceCard from "./timeline/ExperienceCard";
import EducationCard from "./timeline/EducationCard";
import FloatingCard from "./timeline/FloatingCard";
import { getTechnologyBadge } from "./timeline/getTechnologyBadge";

import {
  workHistoryData,
  educationData,
  volunteeringData,
  projectsData,
  certificationsData,
} from "./timeline/data";

export default function Timeline() {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 space-y-24 sm:space-y-32">
      {/* Work History */}
      <section>
        <TypewriterTitle text="Work History" className="typewriter-title mb-12" />
        <div className="relative">
          <div className="timeline-line absolute hidden md:block left-1/2 transform -translate-x-1/2 h-full w-px"></div>
          {workHistoryData.map((item, index) => (
            <ExperienceCard key={index} item={item} index={index} />
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <TypewriterTitle text="Education" className="typewriter-title mb-12" />
        <div className="relative">
          <div className="timeline-line absolute hidden md:block left-1/2 transform -translate-x-1/2 h-full w-px"></div>
          {educationData.map((item, index) => (
            <EducationCard key={index} item={item} index={index} />
          ))}
        </div>
      </section>

      {/* Volunteering */}
      <section>
        <TypewriterTitle text="Volunteering" className="typewriter-title mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {volunteeringData.map((item, index) => (
            <FloatingCard key={index}>
              <div className="relative bg-background-elevated border border-border rounded-xl p-6 h-full hover:border-border-subtle transition-colors duration-300 overflow-hidden group">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-accent-glow via-transparent to-transparent pointer-events-none" />
                <div className="relative">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                  {item.description && (
                    <div className="space-y-2">
                      {item.description.map((desc, i) => (
                        <p key={i} className="text-sm text-foreground-muted leading-relaxed">
                          {desc}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </FloatingCard>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section>
        <TypewriterTitle text="Projects" className="typewriter-title mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((item, index) => (
            <FloatingCard key={index}>
              <div className="relative bg-background-elevated border border-border rounded-xl p-6 h-full hover:border-accent transition-all duration-300 overflow-hidden group">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-accent-glow via-transparent to-transparent pointer-events-none" />
                <div className="relative flex flex-col h-full">
                  <Link href={item.link || "#"} target="_blank" rel="noopener noreferrer">
                    <h3 className="text-lg font-semibold mb-4 text-foreground group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                  </Link>
                  {item.technologies && (
                    <motion.div
                      className="flex flex-wrap gap-2 mt-auto"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.15, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      {item.technologies.map((tech, i) => {
                        const badge = getTechnologyBadge(tech);
                        return (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.05 * i, duration: 0.3 }}
                            viewport={{ once: true }}
                          >
                            <Image
                              src={badge.logo}
                              alt={tech}
                              width={100}
                              height={20}
                              className="h-5 w-auto opacity-80 hover:opacity-100 transition-opacity"
                            />
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  )}
                </div>
              </div>
            </FloatingCard>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section>
        <TypewriterTitle text="Certifications" className="typewriter-title mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((item, index) => (
            <FloatingCard key={index}>
              <div className="relative bg-background-elevated border border-border rounded-xl p-4 h-full hover:border-border-subtle transition-colors duration-300 overflow-hidden group">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-accent-glow via-transparent to-transparent pointer-events-none" />
                {item.image && (
                  <div className="relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={300}
                      unoptimized
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                )}
              </div>
            </FloatingCard>
          ))}
        </div>
      </section>
    </div>
  );
}
