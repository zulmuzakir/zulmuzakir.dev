import { Link } from "react-router";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { featuredProjects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section id="projects" ref={sectionRef} className="py-32 px-6 lg:px-8">
      <div className="container-narrow">
        <div className="mb-16">
          <span className={`inline-block text-sm uppercase tracking-[0.3em] text-[var(--color-text-muted)] mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            03 / Projects
          </span>
          <h2 className={`text-[var(--text-3xl)] font-bold tracking-tight transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Selected Work
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              variant="compact"
              isVisible={isVisible}
            />
          ))}
        </div>

        <div className={`mt-12 text-center transition-all duration-700 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <Link to="/projects" className="inline-flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors link-underline">
            View All Projects
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

