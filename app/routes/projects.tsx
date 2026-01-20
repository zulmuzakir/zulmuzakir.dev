import type { Route } from "./+types/projects";
import { Link } from "react-router";
import { useEffect } from "react";
import { projects } from "../data/projects";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { Footer } from "../components/Contact";
import { ProjectCard } from "../components/ProjectCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Projects | Zulfikharali Muzakir" },
    { name: "description", content: "Explore all projects by Zulfikharali Muzakir - A collection of web applications, APIs, and developer tools." },
  ];
}

function ProjectsHeader() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  
  return (
    <header ref={ref} className="pt-32 pb-16 px-6 lg:px-8 bg-[var(--color-bg-elevated)]">
      <div className="container-narrow">
        <div className={`mb-8 transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to Home
          </Link>
        </div>
        
        <div className={`mb-4 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <span className="text-sm uppercase tracking-[0.3em] text-[var(--color-text-muted)]">
            Portfolio
          </span>
        </div>
        <h1
          className={`text-[var(--text-3xl)] font-bold tracking-tight mb-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          All Projects
        </h1>
        <p
          className={`max-w-2xl text-[var(--text-lg)] text-[var(--color-text-muted)] transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          A collection of projects I've worked on.
        </p>
      </div>
    </header>
  );
}

function ProjectCardWrapper({ project, index }: { project: typeof projects[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  
  return (
    <div ref={ref}>
      <ProjectCard
        project={project}
        index={index}
        variant="full"
        isVisible={isVisible}
      />
    </div>
  );
}

export default function ProjectsPage() {
  // Scroll to top when page loads - use setTimeout to ensure it runs after ScrollRestoration
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 0);
  }, []);

  return (
    <>
      <ProjectsHeader />
      
      <main className="py-16 px-6 lg:px-8">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCardWrapper key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}

