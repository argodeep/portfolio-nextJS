export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL?: string;
}

export interface SiteContent {
  hero: HeroProps;
  howIWork: HowIWorkProps;
  impactStories: ImpactStoryProps[];
  aiAdoptionStory: AiAdoptionStoryProps;
  selectedProjects: SelectedProjectProps[];
  recognitions: RecognitionProps[];
  consulting: ConsultingProps;
  experience: ExperienceProps[];
  projects: ProjectProps[];
  about: AboutProps;
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  email: string;
}

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
}

export interface ProjectProps {
  name: string;
  summary: string;
  image: string;
  linkPreview?: string;
  linkSource?: string;
}

export interface AboutProps {
  description: string;
  image: string;
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}

export interface HowIWorkProps {
  description: string;
  skills: string[];
}

export interface ImpactStoryProps {
  number: string;
  description: string;
}

export interface AiAdoptionStoryProps {
  title: string;
  subtitle?: string;
  description: string;
  metrics: {
    label: string;
    value: string;
  }[];
  details: string;
}

export interface SelectedProjectProps {
  name: string;
  description: string;
  link?: string;
  linkText?: string;
  demoLink?: string;
}

export interface RecognitionProps {
  title: string;
  description: string;
  company: string;
  link?: string;
}

export interface ConsultingProps {
  description: string;
  availability: string;
}
