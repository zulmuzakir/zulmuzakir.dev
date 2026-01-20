// Shared project data used across components and pages

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
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
    longDescription: "",
    tags: ["Vue.js", "Quasar", "Java", "JHipster (Java Framework)", "PostgreSQL"],
    link: "https://langitku.id",
    github: "",
    featured: true,
    year: "",
  },
  {
    id: 2,
    title: "Revamp KI Komunal",
    image: "/images/projects/kikomunal-preview.webp",
    description: "KI Komunal Revamp Revitalized a national platform for communal intellectual property, establishing a centralized data center to protect and manage cultural assets with significant economic and social value. This initiative involved modernizing both public-facing and administrative systems to support national priority programs for legal protection and heritage preservation.",
    longDescription: "",
    tags: ["React", "TypeScript", "Laravel", "MySQL"],
    link: "https://kikomunal-indonesia.dgip.go.id",
    github: "",
    featured: true,
    year: "",
  },
  {
    id: 3,
    title: "E-Countery",
    description: "Developed a streamlined internal application for a global consumer goods company to manage and track the input of raw material data.",
    longDescription: "",
    tags: ["Vue.js", "Quasar", "Node.js", "MySQL"],
    link: "#",
    github: "",
    featured: true,
    year: "",
  },
  {
    id: 4,
    title: "KSSK Kemenkeu Chat App",
    description: "A real-time messaging platform integrated directly into the user dashboard to facilitate secure communication and seamless collaboration across internal departments.",
    longDescription: "",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    link: "#",
    github: "",
    featured: true,
    year: "",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
