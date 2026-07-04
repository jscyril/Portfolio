import { Code2, Database, Server, TerminalSquare } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
};

export type SkillGroup = {
  category: string;
  icon: LucideIcon;
  skills: string[];
};

export type Experience = {
  company: string;
  location: string;
  role: string;
  period: string;
  bullets: string[];
};

export const profile = {
  name: "Jacob Sebastian Cyril",
  role: "Software Developer",
  email: "jacobsebcyril@gmail.com",
  github: "https://github.com/jscyril",
  linkedin: "https://www.linkedin.com/in/jacob-sebastian-cyril/",
  resume:
    "https://drive.google.com/file/d/1umT6x00atTgUN7suxpo_xe3tAmjQIMbx/view?usp=sharing",
};

export const projects: Project[] = [
  {
    title: "SafeMAP",
    description:
      "A safe-first C-to-Rust migration research prototype that analyzes C, classifies safe migration eligibility, plans Rust-native APIs, validates generated Rust, and reports accepted or rejected units.",
    technologies: ["Python", "Rust", "C", "Static Analysis", "C2Rust"],
    githubLink: "https://github.com/jscyril/SafeMAP",
    liveLink: "https://jscyril.github.io/SafeMAP/",
  },
  {
    title: "UniLink",
    description:
      "A full-stack social platform for university students with authentication, real-time features, and a clean interface for campus communities.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL"],
    githubLink: "https://github.com/jscyril/UniLink",
  },
  {
    title: "HabiTrax",
    description:
      "A mobile habit tracking app for building consistent routines with progress visualization and user-focused tracking flows.",
    technologies: ["React Native", "Node.js", "Express", "MongoDB"],
    githubLink: "https://github.com/jscyril/HabiTrax",
  },
  {
    title: "gtmpc",
    description:
      "A terminal music player built in Go with a polished TUI, library management, and responsive playback controls.",
    technologies: ["Go", "BubbleTea", "Audio APIs"],
    githubLink: "https://github.com/jscyril/gtmpc",
  },
  {
    title: "RentScope",
    description:
      "An ML-powered property recommendation app for personalized rent predictions and smarter property search decisions.",
    technologies: ["Python", "Machine Learning", "Django", "React"],
    githubLink: "https://github.com/jscyril/RentScope",
  },
  {
    title: "UniRide",
    description:
      "A campus-focused ride-sharing application that helps students heading to the same college coordinate shared trips.",
    technologies: ["Flutter", "FastAPI", "PostgreSQL"],
    githubLink: "https://github.com/samuelshine/carpool-mca",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    icon: Code2,
    skills: ["React", "TypeScript", "Tailwind CSS", "React Native"],
  },
  {
    category: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "FastAPI", "Django", "Go", "Java"],
  },
  {
    category: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "SQL", "Data Modeling"],
  },
  {
    category: "Tools",
    icon: TerminalSquare,
    skills: ["Git", "Linux", "Docker", "Python", "Static Analysis"],
  },
];

export const experiences: Experience[] = [
  {
    company: "LifeTrenz",
    location: "Bengaluru, Karnataka",
    role: "Full Stack Developer Intern",
    period: "April 2025 - May 2025",
    bullets: [
      "Developed 3 full-stack healthcare mobile applications using Angular, Python/Django, and Firebase, building RESTful APIs for patient data, registration, and scheduling workflows.",
      "Integrated the Agora SDK to launch live video consultation features, expanding telehealth capabilities and improving patient access to care by 25%.",
      "Engineered integration modules connecting applications with core HIS and EHR systems, ensuring reliable data synchronization across healthcare workflows.",
    ],
  },
];
