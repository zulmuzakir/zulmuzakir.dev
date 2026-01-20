import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
  variant?: "compact" | "full";
  className?: string;
  isVisible?: boolean;
}

export function ProjectCard({
  project,
  index = 0,
  variant = "full",
  className = "",
  isVisible = true,
}: ProjectCardProps) {
  const isCompact = variant === "compact";

  // Image section with conditional overlay
  const ImageSection = () => (
    <div className="relative mb-6 aspect-video rounded-xl bg-[var(--color-bg-elevated)] overflow-hidden">
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-full h-full opacity-30"
            style={{
              backgroundImage: `linear-gradient(45deg, var(--color-border) 25%, transparent 25%), linear-gradient(-45deg, var(--color-border) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, var(--color-border) 75%), linear-gradient(-45deg, transparent 75%, var(--color-border) 75%)`,
              backgroundSize: "20px 20px",
              backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
            }}
          />
          <span className="absolute text-[var(--color-text-dim)] text-sm uppercase tracking-widest">
            Preview
          </span>
        </div>
      )}

      {/* Hover overlay for compact variant */}
      {isCompact && (
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="flex items-center gap-2 text-white font-medium">
            View Project
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </div>
      )}

      {/* Featured badge for full variant */}
      {!isCompact && project.featured && (
        <span className="absolute top-4 right-4 px-3 py-1 text-xs uppercase tracking-wider bg-white text-black rounded-full font-medium">
          Featured
        </span>
      )}
    </div>
  );

  // Tags section
  const TagsSection = () => {
    const tagsToShow = isCompact ? project.tags.slice(0, 3) : project.tags;
    return (
      <div className={`flex flex-wrap gap-2 ${isCompact ? "" : "mb-6"}`}>
        {tagsToShow.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs uppercase tracking-wider text-[var(--color-text-dim)] bg-[var(--color-bg-elevated)] rounded-full border border-[var(--color-border)]"
          >
            {tag}
          </span>
        ))}
      </div>
    );
  };

  // Links section for full variant
  const LinksSection = () => (
    <div className="flex items-center gap-4">
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
      >
        View Project
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
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
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
          Source
        </a>
      )}
    </div>
  );

  // Compact variant - wrapped in link
  if (isCompact) {
    return (
      <a
        href={project.link}
        className={`group block p-8 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] hover-lift transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"} ${className}`}
        style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ImageSection />
        <h3
          className="text-[var(--text-xl)] font-semibold mb-3 group-hover:text-[var(--color-accent)] transition-colors"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          {project.title}
        </h3>
        <p className="text-[var(--color-text-muted)] mb-6 leading-relaxed">
          {project.description}
        </p>
        <TagsSection />
      </a>
    );
  }

  // Full variant - div with separate links
  return (
    <div
      className={`group p-8 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] hover-lift transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"} ${className}`}
      style={{ transitionDelay: `${0.1 + (index % 3) * 0.1}s` }}
    >
      <ImageSection />

      <div className="flex items-start justify-between gap-4 mb-3">
        <h2
          className="text-[var(--text-xl)] font-semibold group-hover:text-[var(--color-accent)] transition-colors"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          {project.title}
        </h2>
        {project.year && (
          <span className="text-sm text-[var(--color-text-dim)] shrink-0">
            {project.year}
          </span>
        )}
      </div>

      <p className="text-[var(--color-text-muted)] mb-6 leading-relaxed">
        {project.longDescription || project.description}
      </p>

      <TagsSection />
      <LinksSection />
    </div>
  );
}
