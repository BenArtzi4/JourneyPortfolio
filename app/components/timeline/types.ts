export type TimelineType =
  | "experience"
  | "education"
  | "project"
  | "certification"
  | "volunteering";

/* ---------- Work (grouped by company) ---------- */
export interface ExperienceRole {
  year: string;            // "2025 – Present"
  title: string;           // "Software Developer – SOC Builder Team"
  description?: string[];
  isStudent?: boolean;
}

export interface CompanyExperienceItem {
  type: "experience";
  company: string;
  roles: ExperienceRole[];
}

/* ---------- Education (grouped by institution) ---------- */
export interface EducationProgram {
  year: string;            // "2021 – 2025"
  title: string;           // "Bachelor of Science: Computer Science"
  description?: string[];
}

export interface InstitutionEducationItem {
  type: "education";
  school: string;          // "Open University"
  programs: EducationProgram[];
}

/* ---------- Others (projects/certs/volunteering) ---------- */
export interface BasicTimelineItem {
  type: Exclude<TimelineType, "experience" | "education">;
  year?: string;
  title: string;
  subtitle?: string;
  description?: string[];
  technologies?: string[];
  image?: string;
  link?: string;
}

export type TimelineItem = CompanyExperienceItem | InstitutionEducationItem | BasicTimelineItem;

export interface TechnologyBadge {
  name: string;
  color: string;
  logo: string;
}
