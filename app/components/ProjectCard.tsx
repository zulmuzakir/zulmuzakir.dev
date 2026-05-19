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
  const hasValidLink = project.link && project.link !== "#";
  const hasGithub = project.github && project.github !== "";

  const cardClasses = `group block p-6 rounded-2xl border border-[var(--color-border-cool)] bg-[rgba(19,29,46,0.4)] backdrop-blur-sm hover-glow-cool transition-all duration-700 ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
  } ${className}`;

  const cardStyle = { transitionDelay: `${0.2 + index * 0.12}s` };

  const content = (
    <>
      {/* Image with vignette */}
      <div className="relative mb-5 aspect-video rounded-xl overflow-hidden bg-[var(--color-cool-bg)]">
        {project.image ? (
          <>
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-cool-bg)] via-transparent to-transparent opacity-40" />
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-mono text-[var(--color-cool-dim)] text-xs tracking-widest">
              No Preview
            </span>
          </div>
        )}

        {/* Hover overlay */}
        {isCompact && hasValidLink && (
          <div className="absolute inset-0 bg-[var(--color-cool-bg)]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="flex items-center gap-2 text-[var(--color-cool-text)] text-sm text-mono tracking-wider">
              View →
            </span>
          </div>
        )}
      </div>

      {/* Title */}
      <h3 className="heading-serif text-[var(--text-xl)] text-[var(--color-cool-text)] mb-3 group-hover:text-[var(--color-cool-accent)] transition-colors">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-[var(--color-cool-muted)] leading-relaxed mb-5 line-clamp-3">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {(isCompact ? project.tags.slice(0, 3) : project.tags).map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs text-mono text-[var(--color-cool-dim)] border border-[var(--color-border-cool)] rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links for full variant */}
      {!isCompact && (hasValidLink || hasGithub) && (
        <div className="flex items-center gap-4 mt-6">
          {hasValidLink && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--color-cool-accent)] hover:underline"
            >
              View Project →
            </a>
          )}
          {hasGithub && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--color-cool-muted)] hover:text-[var(--color-cool-text)]"
            >
              Source
            </a>
          )}
        </div>
      )}
    </>
  );

  if (isCompact && hasValidLink) {
    return (
      <a href={project.link} className={cardClasses} style={cardStyle} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <div className={cardClasses} style={cardStyle}>
      {content}
    </div>
  );
}
