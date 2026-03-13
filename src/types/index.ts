// ─── Skills ───────────────────────────────────────────────────────────────────

export interface Skill {
  name: string;
  /** Proficiency level from 0 to 100 */
  level: number;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface SkillsData {
  categories: SkillCategory[];
}

// ─── Contact ──────────────────────────────────────────────────────────────────

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

export interface ContactData {
  email: string;
  phone?: string;
  location?: string;
  social: SocialLink[];
}

// ─── Locale ───────────────────────────────────────────────────────────────────

export type Locale = 'en' | 'de';
