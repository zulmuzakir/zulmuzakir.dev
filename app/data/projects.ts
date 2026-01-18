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
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Project Alpha",
    description: "A full-stack web application built with modern technologies. Features include real-time updates, authentication, and a beautiful UI.",
    longDescription: "Project Alpha is a comprehensive full-stack application that showcases modern web development practices. It features real-time data synchronization, secure authentication flows, and a polished user interface built with attention to detail.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "TailwindCSS"],
    link: "#",
    github: "https://github.com/yourusername/project-alpha",
    featured: true,
    year: "2024",
  },
  {
    id: 2,
    title: "Project Beta",
    description: "Mobile-first e-commerce platform with seamless checkout experience and inventory management system.",
    longDescription: "A mobile-first e-commerce solution designed for small to medium businesses. Features include product catalog management, shopping cart functionality, secure payment processing, and a comprehensive inventory management system.",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Express"],
    link: "#",
    github: "https://github.com/yourusername/project-beta",
    featured: true,
    year: "2024",
  },
  {
    id: 3,
    title: "Project Gamma",
    description: "API service handling millions of requests. Built with performance and scalability in mind.",
    longDescription: "A high-performance API service built in Go, designed to handle millions of requests with minimal latency. Implements caching strategies, rate limiting, and comprehensive monitoring for production-grade reliability.",
    tags: ["Go", "Redis", "Docker", "Kubernetes", "Prometheus"],
    link: "#",
    github: "https://github.com/yourusername/project-gamma",
    featured: true,
    year: "2023",
  },
  {
    id: 4,
    title: "Project Delta",
    description: "Developer tool that streamlines workflow automation and increases productivity for engineering teams.",
    longDescription: "A CLI tool designed to automate repetitive development tasks. Features include project scaffolding, code generation, deployment automation, and integration with popular CI/CD platforms.",
    tags: ["TypeScript", "CLI", "Open Source", "Node.js"],
    link: "#",
    github: "https://github.com/yourusername/project-delta",
    featured: true,
    year: "2023",
  },
  {
    id: 5,
    title: "Project Epsilon",
    description: "Real-time analytics dashboard for monitoring application performance and user behavior.",
    longDescription: "A comprehensive analytics dashboard that provides real-time insights into application performance, user behavior, and business metrics. Built with data visualization best practices.",
    tags: ["React", "D3.js", "WebSocket", "Node.js"],
    link: "#",
    year: "2023",
  },
  {
    id: 6,
    title: "Project Zeta",
    description: "Content management system with headless architecture and flexible content modeling.",
    longDescription: "A headless CMS solution that provides flexible content modeling, multi-tenant support, and a powerful API for content delivery across multiple platforms.",
    tags: ["Laravel", "PHP", "MySQL", "REST API"],
    link: "#",
    year: "2022",
  },
  {
    id: 7,
    title: "Project Eta",
    description: "Machine learning pipeline for automated data processing and model training.",
    longDescription: "An end-to-end ML pipeline that automates data ingestion, preprocessing, model training, and deployment. Includes experiment tracking and model versioning capabilities.",
    tags: ["Python", "TensorFlow", "Docker", "MLflow"],
    link: "#",
    year: "2022",
  },
  {
    id: 8,
    title: "Project Theta",
    description: "Cross-platform mobile application for task management and team collaboration.",
    longDescription: "A React Native mobile application that enables teams to manage tasks, communicate in real-time, and track project progress across iOS and Android platforms.",
    tags: ["React Native", "Firebase", "Redux", "TypeScript"],
    link: "#",
    year: "2022",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
