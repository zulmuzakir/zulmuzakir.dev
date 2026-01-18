import type { Route } from "./+types/projects";
import { Link } from "react-router";
import { useEffect } from "react";
import { projects } from "../data/projects";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { Footer } from "../components/Contact";

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
          A collection of projects I've worked on, ranging from full-stack applications to developer tools and APIs.
        </p>
      </div>
    </header>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  
  return (
    <div
      ref={ref}
      className={`group p-8 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] hover-lift transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      style={{ transitionDelay: `${0.1 + (index % 3) * 0.1}s` }}
    >
      {/* Project Image Placeholder */}
      <div className="relative mb-6 aspect-video rounded-xl bg-[var(--color-bg-elevated)] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full opacity-30" style={{
            backgroundImage: `linear-gradient(45deg, var(--color-border) 25%, transparent 25%), linear-gradient(-45deg, var(--color-border) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, var(--color-border) 75%), linear-gradient(-45deg, transparent 75%, var(--color-border) 75%)`,
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
          }} />
          <span className="absolute text-[var(--color-text-dim)] text-sm uppercase tracking-widest">Preview</span>
        </div>
        
        {project.featured && (
          <span className="absolute top-4 right-4 px-3 py-1 text-xs uppercase tracking-wider bg-white text-black rounded-full font-medium">
            Featured
          </span>
        )}
      </div>

      {/* Project Info */}
      <div className="flex items-start justify-between gap-4 mb-3">
        <h2
          className="text-[var(--text-xl)] font-semibold group-hover:text-[var(--color-accent)] transition-colors"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          {project.title}
        </h2>
        {project.year && (
          <span className="text-sm text-[var(--color-text-dim)] shrink-0">{project.year}</span>
        )}
      </div>
      
      <p className="text-[var(--color-text-muted)] mb-6 leading-relaxed">
        {project.longDescription || project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs uppercase tracking-wider text-[var(--color-text-dim)] bg-[var(--color-bg-elevated)] rounded-full border border-[var(--color-border)]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4">
        <a
          href={project.link}
          className="inline-flex items-center gap-2 text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
        >
          View Project
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            Source
          </a>
        )}
      </div>
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
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}

