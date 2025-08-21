import type {
  CompanyExperienceItem,
  InstitutionEducationItem,
  BasicTimelineItem,
} from "./types";

/* ---------------- Work History (grouped by company) ---------------- */

export const workHistoryData: CompanyExperienceItem[] = [
  {
    type: "experience",
    company: "Intel",
    roles: [
      {
        year: "2024 – Present",
        title: "Software Developer – SOC Builder Team",
        description: [
          "Python Software Engineering: Developing SOC Builder, a modular Python package with API integration to streamline backend workflows for complex design processes.",
          "System Design: Designing and maintaining scalable data models and automation frameworks, reducing turnaround time (TAT) and improving workflow accuracy.",
        ],
      },
      {
        year: "2022 – 2024",
        title: "DevOps & Python Developer – BITS Team",
        isStudent: true,
        description: [
          "Python Development: Enhanced and extended Python software to optimize setup and streamline Linux-based environments.",
          "CI/CD Processes: Designed and implemented CI/CD pipelines, improving development, deployment, and release workflows.",
        ],
      },
    ],
  },
  {
    type: "experience",
    company: "The Ministry of Health of Israel",
    roles: [
      {
        year: "2020 – 2021",
        title: "Research and Development Manager",
        description: [
          "Led a team of analysts and Python developers, processing and analyzing data to deliver actionable recommendations.",
        ],
      },
    ],
  },
  {
    type: "experience",
    company: "IDF - Intelligence Corps",
    roles: [
      {
        year: "2016 – 2019",
        title: "Analyst and Project Manager",
        description: [
          "Analyzed large-scale intelligence data using SQL and analytical tools, produced strategic insights enabling informed decisions.",
        ],
      },
    ],
  },
];

/* ---------------- Education (grouped by institution) ---------------- */

export const educationData: InstitutionEducationItem[] = [
  {
    type: "education",
    school: "Open University",
    programs: [
      {
        year: "2021 – 2025",
        title: "Bachelor of Science: Computer Science",
        description: [
          "Graduated with 94 average",
          "Twice included on the University President's List",
          "Once included on the University Dean's List",
          "Key courses: Cloud Development (AWS), Systems Programming in Linux, Algorithms for Big Data.",
          "Final Project: Created a fully functional cloud-based application using AWS technologies.",
        ],
      },
    ],
  },
  {
    type: "education",
    school: "Unistream",
    programs: [
      {
        year: "2019",
        title: "Software Development Course",
        description: ["Studies of Java, Linux and DataBase"],
      },
    ],
  },
  {
    type: "education",
    school: "IDF Intelligence Corps",
    programs: [
      {
        year: "2018",
        title: "Data System Course",
        description: ["Studies of Excel, SQL, SNA"],
      },
    ],
  },
];

/* ---------------- Volunteering / Projects / Certifications ---------------- */

export const volunteeringData: BasicTimelineItem[] = [
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

export const projectsData: BasicTimelineItem[] = [
  {
    type: "project",
    title: "ActiveFlow",
    technologies: ["React", "TypeScript", "Python", "FastAPI", "Vite", "Firebase", "Tailwind"],
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

export const certificationsData: BasicTimelineItem[] = [
  { type: "certification", title: "FastAPI - The Complete Course 2025", image: "/images/FastAPI.jpg" },
  { type: "certification", title: "Node.js, Express, MongoDB & More: The Complete Bootcamp", image: "/images/Node_js.jpg" },
  { type: "certification", title: "Docker for the Absolute Beginner - Hands On", image: "/images/Docker_Hands_On.jpg" },
  { type: "certification", title: "AWS Lambda & Serverless Architecture Bootcamp", image: "/images/AWS lambda & Serverless architecture.jpg" },
  { type: "certification", title: "The Complete 2023 Web Development Bootcamp", image: "/images/web_development_bootcamp.jpg" },
];
