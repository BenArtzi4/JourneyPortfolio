import type { TechnologyBadge } from "./types";

export const getTechnologyBadge = (tech: string): TechnologyBadge => {
  const badges: Record<string, TechnologyBadge> = {
    React: { name: "React", color: "61DAFB", logo: "/badges/React.svg" },
    TypeScript: { name: "TypeScript", color: "3178C6", logo: "/badges/TypeScript.svg" },
    Python: { name: "Python", color: "3776AB", logo: "/badges/Python.svg" },
    FastAPI: { name: "FastAPI", color: "009688", logo: "/badges/FastAPI.svg" },
    Vite: { name: "Vite", color: "646CFF", logo: "/badges/Vite.svg" },
    Firebase: { name: "Firebase", color: "FFCA28", logo: "/badges/Firebase.svg" },
    Tailwind: { name: "Tailwind", color: "06B6D4", logo: "/badges/Tailwind.svg" },
    Node_js: { name: "Node.js", color: "339933", logo: "/badges/Node_js.svg" },
    Docker: { name: "Docker", color: "2496ED", logo: "/badges/Docker.svg" },
    MongoDB: { name: "MongoDB", color: "47A248", logo: "/badges/MongoDB.svg" },
    Redis: { name: "Redis", color: "DC382D", logo: "/badges/Redis.svg" },
    QT: { name: "QT", color: "41CD52", logo: "/badges/QT.svg" },
    HTML: { name: "HTML", color: "E34F26", logo: "/badges/HTML.svg" },
    CSS: { name: "CSS", color: "1572B6", logo: "/badges/CSS.svg" },
    JavaScript: { name: "JavaScript", color: "F7DF1E", logo: "/badges/Javascript.svg" },
    MySQL: { name: "MySQL", color: "4479A1", logo: "/badges/MySQL.svg" },
    Pandas: { name: "Pandas", color: "150458", logo: "/badges/pandas.svg" },
  };
  return badges[tech] || { name: tech, color: "555555", logo: "/badges/default.svg" };
};
