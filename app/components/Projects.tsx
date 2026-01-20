import { Link } from "react-router";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { featuredProjects } from "../data/projects";

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
            <a
              key={project.id}
              href={project.link}
              className={`group block p-8 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] hover-lift transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative mb-6 aspect-video rounded-xl bg-[var(--color-bg-elevated)] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full opacity-30" style={{
                    backgroundImage: `linear-gradient(45deg, var(--color-border) 25%, transparent 25%), linear-gradient(-45deg, var(--color-border) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, var(--color-border) 75%), linear-gradient(-45deg, transparent 75%, var(--color-border) 75%)`,
                    backgroundSize: "20px 20px",
                    backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
                  }} />
                  <span className="absolute text-[var(--color-text-dim)] text-sm uppercase tracking-widest">Preview</span>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="flex items-center gap-2 text-white font-medium">
                    View Project
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>

              <h3 className="text-[var(--text-xl)] font-semibold mb-3 group-hover:text-[var(--color-accent)] transition-colors" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                {project.title}
              </h3>
              <p className="text-[var(--color-text-muted)] mb-6 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs uppercase tracking-wider text-[var(--color-text-dim)] bg-[var(--color-bg-elevated)] rounded-full border border-[var(--color-border)]">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
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
