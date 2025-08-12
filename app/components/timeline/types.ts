export type TimelineType =
  | "experience"
  | "education"
  | "project"
  | "certification"
  | "volunteering";

/* ---------- Work (grouped by company) ---------- */
export interface ExperienceRole {
  year: string; 
  title: string;
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
  year: string;
  title: string;
  description?: string[];
}

export interface InstitutionEducationItem {
  type: "education";
  school: string;
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
