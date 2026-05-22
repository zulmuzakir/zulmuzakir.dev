import { Link } from "react-router";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { featuredProjects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>();
  const primaryProjects = featuredProjects.slice(0, 2);
  const archiveProjects = featuredProjects.slice(2);

  return (
    <section id="projects" ref={sectionRef} className="section-divider py-28 px-6 lg:px-8">
      <div className="container-narrow">
        <span className={`section-label transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          03 / Selected work
        </span>
        <h2
          className={`heading-serif mt-8 text-[var(--text-3xl)] mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Selected Work
        </h2>
        <p
          className={`text-[var(--color-text-muted)] text-[var(--text-lg)] mb-16 max-w-2xl transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          A few projects that show how I work across product surfaces, backend
          logic, and delivery constraints.
        </p>

        <div className="space-y-12">
          {primaryProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              variant="feature"
              isVisible={isVisible}
            />
          ))}
        </div>

        <div
          className={`mt-20 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="mb-6 flex items-center justify-between gap-6">
            <h3 className="heading-serif text-[var(--text-xl)]">Archive</h3>
            <Link
              to="/projects"
              className="text-sm font-semibold text-[var(--color-accent-strong)] link-underline"
            >
              View full project list
            </Link>
          </div>
          <div>
            {archiveProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                variant="archive"
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
