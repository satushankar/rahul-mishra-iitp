export interface Profile {
  fullName: string;
  designation: string;
  department: string;
  institution: string;
  institutionShort: string;
  email: string;
  phone: string;
  profileUrl: string;
  researchAreas: string[];
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  stats: {
    journals: number;
    conferences: number;
    totalOutputs: number;
    patents: number;
    books: number;
  };
  thesis: string;
  bio: string;
}

export interface ResearchDomain {
  slug: string;
  name: string;
  description: string;
  keywords: string[];
  relatedPublicationIds: number[];
}

export type PublicationType =
  | "Journal"
  | "Journal (Letter)"
  | "Journal (Magazine)"
  | "Journal (Survey)";

export interface Publication {
  id: number;
  title: string;
  authors: string[];
  venue: string;
  year: number | null;
  volume: string | null;
  issue: string | null;
  pages: string | null;
  doi: string | null;
  url: string | null;
  type: PublicationType;
  correspondingAuthor: boolean;
  status?: string;
  keywords: string[];
}

export interface Conference {
  id: number;
  title: string;
  authors: string[];
  conference: string;
  year: number | null;
  dates: string | null;
  location: string | null;
  status: string | null;
}

export interface ExperienceItem {
  organization: string;
  position: string;
  start: string;
  end: string;
  duration: string;
  current?: boolean;
}

export interface Course {
  code: string;
  title: string;
  category: string;
  level: string;
}

export interface Patent {
  title: string;
  inventors: string[];
  number: string;
  status: string;
  description: string;
}

export interface AwardItem {
  name: string;
  organization: string;
  year: string;
  description: string;
}

export interface BookItem {
  title: string;
  publisher: string;
  description: string;
}

export interface Membership {
  organization: string;
  type: string;
  status: string;
}

export interface NavItem {
  label: string;
  href: string;
}
