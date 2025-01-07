"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import TypewriterTitle from "./TypewriterTitle";

interface TimelineItem {
  type:
    | "experience"
    | "education"
    | "project"
    | "certification"
    | "volunteering";
  year?: string;
  title: string;
  subtitle?: string;
  description?: string[];
  technologies?: string[];
  image?: string;
  link?: string;
}

interface TechnologyBadge {
  name: string;
  color: string;
  logo: string;
}

const getTechnologyBadge = (tech: string): TechnologyBadge => {
  const badges: { [key: string]: TechnologyBadge } = {
    React: { name: "React", color: "61DAFB", logo: "/badges/React.svg" },
    TypeScript: {
      name: "TypeScript",
      color: "3178C6",
      logo: "/badges/TypeScript.svg",
    },
    Python: { name: "Python", color: "3776AB", logo: "/badges/Python.svg" },
    FastAPI: { name: "FastAPI", color: "009688", logo: "/badges/FastAPI.svg" },
    Vite: { name: "Vite", color: "646CFF", logo: "/badges/Vite.svg" },
    Firebase: {
      name: "Firebase",
      color: "FFCA28",
      logo: "/badges/Firebase.svg",
    },
    Tailwind: {
      name: "Tailwind",
      color: "06B6D4",
      logo: "/badges/Tailwind.svg",
    },
    Node_js: { name: "Node.js", color: "339933", logo: "/badges/Node_js.svg" },
    Docker: { name: "Docker", color: "2496ED", logo: "/badges/Docker.svg" },
    MongoDB: { name: "MongoDB", color: "47A248", logo: "/badges/MongoDB.svg" },
    Redis: { name: "Redis", color: "DC382D", logo: "/badges/Redis.svg" },
    QT: { name: "QT", color: "41CD52", logo: "/badges/QT.svg" },
    HTML: { name: "HTML", color: "E34F26", logo: "/badges/HTML.svg" },
    CSS: { name: "CSS", color: "1572B6", logo: "/badges/CSS.svg" },
    JavaScript: {
      name: "JavaScript",
      color: "F7DF1E",
      logo: "/badges/Javascript.svg",
    },
    MySQL: { name: "MySQL", color: "4479A1", logo: "/badges/MySQL.svg" },
    Pandas: { name: "Pandas", color: "150458", logo: "/badges/pandas.svg" },
  };

  return (
    badges[tech] || { name: tech, color: "555555", logo: "/badges/default.svg" }
  );
};

const workHistoryData: TimelineItem[] = [
  {
    type: "experience",
    year: "2022 - Current",
    title: "Python Developer and DevOps Engineer",
    subtitle: "Intel",
    description: [
      "Python Development: Enhances and extends Python software to optimize installations and streamline Linux-based environments",
      "CI/CD Processes: Designed and implemented CI/CD pipelines to improve development, deployment, and release workflows.",
      "System Optimization: Troubleshoots and resolves performance issues in distributed systems, ensuring scalability and reliability.",
    ],
  },
  {
    type: "experience",
    year: "2020 - 2021",
    title: "Research and Development Manager",
    subtitle: "The Ministry of Health of Israel",
    description: ["Team leader of analysts and Python developers"],
  },
  {
    type: "experience",
    year: "2016 - 2019",
    title: "Analyst and Project Manager",
    subtitle: "IDF - Intelligence Corps",
    description: [
      "Analyzed big data projects using SQL and data analysis tools",
    ],
  },
];

const educationData: TimelineItem[] = [
  {
    type: "education",
    year: "2021 - 2025",
    title: "Bachelor of Science: Computer Science",
    subtitle: "Open University - Graduated with 94 average",
    description: [
      "Twice included on the University President's List",
      "Once included on the University Dean's List",
      "Key courses: Cloud Development (AWS), Systems Programming in Linux, Algorithms for Big Data.",
      "Final Project: Created a fully functional cloud-based application using AWS technologies.",
    ],
  },
  {
    type: "education",
    year: "2019",
    title: "Software Development Course",
    subtitle: "Unistream",
    description: ["Studies of Java, Linux and DataBase"],
  },
  {
    type: "education",
    year: "2018",
    title: "Data System Course",
    subtitle: "IDF Intelligence Corps",
    description: ["Studies of Excel, SQL, SNA"],
  },
];

const volunteeringData: TimelineItem[] = [
  {
    type: "volunteering",
    title: "Group Volunteering",
    description: [
      "Organized volunteering activities for my workplace team, promoting community engagement",
    ],
  },
  {
    type: "volunteering",
    title: "Zimathematica",
    description: ["Taught math in high school during military service"],
  },
];

const projectsData: TimelineItem[] = [
  {
    type: "project",
    title: "ActiveFlow",
    technologies: [
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "Vite",
      "Firebase",
      "Tailwind",
    ],
    link: "https://github.com/BenArtzi4/ActiveFlow",
  },
  {
    type: "project",
    title: "SongElite",
    technologies: ["Node_js", "Docker", "MongoDB", "Redis"],
    link: "https://github.com/BenArtzi4/songElite",
  },
  {
    type: "project",
    title: "PyQt Calculator with Tests",
    technologies: ["Python", "QT"],
    link: "https://github.com/BenArtzi4/pyqt_calculator_with_tests",
  },
  {
    type: "project",
    title: "Basketball Players Management",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/BenArtzi4/Basketball-players-management",
  },
  {
    type: "project",
    title: "Docker Voting App",
    technologies: ["Node_js", "Docker", "MySQL", "HTML", "CSS"],
    link: "https://github.com/BenArtzi4/docker-voting-app",
  },
  {
    type: "project",
    title: "World Capital Cities",
    technologies: ["Python", "Pandas"],
    link: "https://github.com/BenArtzi4/Worlds-capital-cities",
  },
];

const certificationsData: TimelineItem[] = [
  {
    type: "certification",
    title: "FastAPI - The Complete Course 2025",
    image: "/images/FastAPI.jpg",
  },
  {
    type: "certification",
    title: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
    image: "/images/Node_js.jpg",
  },
  {
    type: "certification",
    title: "Docker for the Absolute Beginner - Hands On",
    image: "/images/Docker_Hands_On.jpg",
  },
  {
    type: "certification",
    title: "AWS Lambda & Serverless Architecture Bootcamp",
    image: "/images/AWS lambda & Serverless architecture.jpg",
  },
  {
    type: "certification",
    title: "The Complete 2023 Web Development Bootcamp",
    image: "/images/web_development_bootcamp.jpg",
  },
];

const TimelineItem = ({
  item,
  index,
}: {
  item: TimelineItem;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className={`mb-8 flex flex-col sm:flex-row ${
        index % 2 === 0 ? "sm:flex-row-reverse" : ""
      }`}
    >
      <div className="timeline-item sm:pl-8 sm:pr-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {item.year && (
            <span className="text-blue-500 font-semibold">{item.year}</span>
          )}
          <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800">
            {item.title}
          </h3>
          {item.subtitle && (
            <h4 className="text-lg md:text-xl text-gray-600 mb-2">
              {item.subtitle}
            </h4>
          )}
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
};

const FloatingCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        y: -5,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 260,
          damping: 20,
        },
      }}
      viewport={{ once: true }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
};

export default function Timeline() {
  return (
    <div className="space-y-16">
      <section>
        <TypewriterTitle text="Work History" />
        <div className="relative">
          {/* Blue line only visible on medium screens and larger */}
          <div className="absolute hidden sm:block left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500"></div>
          {workHistoryData.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </section>

      <section className="my-16">
        <TypewriterTitle text="Education" />
        <div className="relative">
          {/* Blue line only visible on medium screens and larger */}
          <div className="absolute hidden sm:block left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500"></div>
          {educationData.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </section>

      <section className="my-16">
        <TypewriterTitle text="Volunteering" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {volunteeringData.map((item, index) => (
            <FloatingCard key={index}>
              <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                  {item.title}
                </h3>
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
        <TypewriterTitle text="Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((item, index) => (
            <FloatingCard key={index}>
              <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                <Link
                  href={item.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
        <TypewriterTitle text="Certifications" />
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
