// Shared project data used across components and pages

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  challenge?: string;
  outcome?: string;
  role?: string;
  tags: string[];
  link: string;
  github?: string;
  featured?: boolean;
  year?: string;
  image?: string; // URL or path to project preview image
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Langitku",
    image: "/images/projects/langitku-preview.webp",
    description: "A dedicated space for label and indie musicians to share, monetize, and publish their music to a major national streaming platform.",
    challenge: "Build a reliable publishing workflow for musicians, labels, and internal operators across a complex music distribution process.",
    outcome: "Delivered a production platform that supports publishing operations and monetization workflows for a national streaming ecosystem.",
    role: "Software developer",
    longDescription: "",
    tags: ["Vue.js", "Quasar", "Java", "JHipster (Java Framework)", "PostgreSQL"],
    link: "https://langitku.id",
    github: "",
    featured: true,
    year: "2024",
  },
  {
    id: 2,
    title: "Revamp KI Komunal",
    image: "/images/projects/kikomunal-preview.webp",
    description: "KI Komunal Revamp Revitalized a national platform for communal intellectual property, establishing a centralized data center to protect and manage cultural assets with significant economic and social value. This initiative involved modernizing both public-facing and administrative systems to support national priority programs for legal protection and heritage preservation.",
    challenge: "Modernize a government platform while supporting public access, administrative workflows, and structured cultural asset records.",
    outcome: "Shipped a clearer, more maintainable platform that supports national-scale legal and heritage preservation workflows.",
    role: "Frontend and backend contributor",
    longDescription: "",
    tags: ["React", "TypeScript", "Laravel", "MySQL"],
    link: "https://kikomunal-indonesia.dgip.go.id",
    github: "",
    featured: true,
    year: "2023",
  },
  {
    id: 3,
    title: "E-Countery",
    description: "Developed a streamlined internal application for a global consumer goods company to manage and track the input of raw material data.",
    challenge: "Reduce friction in internal data entry and make raw material tracking more consistent across teams.",
    outcome: "Improved the reliability of internal operations with a more structured data input workflow.",
    role: "Software developer",
    longDescription: "",
    tags: ["Vue.js", "Quasar", "Node.js", "MySQL"],
    link: "#",
    github: "",
    featured: true,
    year: "2022",
  },
  {
    id: 4,
    title: "KSSK Kemenkeu Chat App",
    description: "A real-time messaging platform integrated directly into the user dashboard to facilitate secure communication and seamless collaboration across internal departments.",
    challenge: "Embed secure, real-time communication inside an existing internal platform without disrupting established workflows.",
    outcome: "Delivered faster cross-team coordination through a dashboard-native messaging experience.",
    role: "Software developer",
    longDescription: "",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    link: "#",
    github: "",
    featured: true,
    year: "2022",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
