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
    <div className="space-y-16">
      <section>
        <TypewriterTitle text="Work History" className="typewriter-title text-white" />
        <div className="relative">
          <div className="timeline-line absolute hidden sm:block left-1/2 transform -translate-x-1/2 h-full w-1"></div>
          {workHistoryData.map((item, index) => (
            <ExperienceCard key={index} item={item} index={index} />
          ))}
        </div>
      </section>

      <section className="my-16">
        <TypewriterTitle text="Education" className="typewriter-title text-white" />
        <div className="relative">
          <div className="timeline-line absolute hidden sm:block left-1/2 transform -translate-x-1/2 h-full w-1"></div>
          {educationData.map((item, index) => (
            <EducationCard key={index} item={item} index={index} />
          ))}
        </div>
      </section>

      <section className="my-16">
        <TypewriterTitle text="Volunteering" className="typewriter-title text-white" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {volunteeringData.map((item, index) => (
            <FloatingCard key={index}>
              <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                {item.description && (
                  <div className="text-gray-700">
                    {item.description.map((desc, i) => (
                      <p key={i} className="mb-1">
                        {desc}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </FloatingCard>
          ))}
        </div>
      </section>

      <section className="my-16">
        <TypewriterTitle text="Projects" className="typewriter-title text-white" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((item, index) => (
            <FloatingCard key={index}>
              <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                <Link href={item.link || "#"} target="_blank" rel="noopener noreferrer">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-600 hover:text-gray-800 hover:underline">
                    {item.title}
                  </h3>
                </Link>
                {item.technologies && (
                  <motion.div
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {item.technologies.map((tech, i) => {
                      const badge = getTechnologyBadge(tech);
                      return (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.1 * i }}
                        >
                          <Image
                            src={badge.logo}
                            alt={tech}
                            width={100}
                            height={20}
                            className="h-5 w-auto"
                          />
                        </motion.div>
                      );
                    })}
                  </motion.div>
                )}
              </div>
            </FloatingCard>
          ))}
        </div>
      </section>

      <section className="my-16">
        <TypewriterTitle text="Certifications" className="typewriter-title text-white" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((item, index) => (
            <FloatingCard key={index}>
              <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                {item.image && (
                  <motion.div
                    className="mb-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={200}
                      height={150}
                      unoptimized
                      className="w-full h-auto object-cover rounded"
                    />
                  </motion.div>
                )}
              </div>
            </FloatingCard>
          ))}
        </div>
      </section>
    </div>
  );
}
