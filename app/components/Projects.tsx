import { Link } from "react-router";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { featuredProjects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section id="projects" ref={sectionRef} className="relative py-32 px-6 lg:px-8">
      {/* Vertical section marker */}
      <div
        className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 writing-vertical section-marker"
        style={{ opacity: isVisible ? 0.4 : 0, transition: "opacity 1s" }}
      >
        03 — work
      </div>

      <div className="container-narrow">
        {/* Section heading */}
        <h2
          className={`heading-serif text-[var(--text-3xl)] mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Selected Work
        </h2>
        <p
          className={`text-[var(--color-cool-muted)] text-[var(--text-lg)] mb-16 max-w-lg transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Projects I've poured thought and craft into.
        </p>

        {/* Project cards — staggered grid */}
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

        {/* View all link */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-[var(--color-cool-muted)] hover:text-[var(--color-cool-accent)] transition-colors link-underline"
          >
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
