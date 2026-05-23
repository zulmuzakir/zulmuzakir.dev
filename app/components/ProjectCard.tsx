import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
  variant?: "feature" | "archive" | "full";
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
  const isFeature = variant === "feature";
  const isArchive = variant === "archive";
  const hasValidLink = project.link && project.link !== "#";
  const hasGithub = project.github && project.github !== "";
  const liveLabel = hasValidLink ? "Live project" : "Internal / private";

  if (isArchive) {
    const archiveClasses = `archive-row transition-all duration-700 ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
    } ${className}`;

    return (
      <div className={archiveClasses} style={{ transitionDelay: `${0.15 + index * 0.08}s` }}>
        <div className="text-mono text-xs uppercase tracking-[0.18em] text-[var(--color-text-dim)]">
          {project.year || "Selected work"}
        </div>
        <div>
          <h3 className="heading-serif text-[var(--text-xl)] text-[var(--color-text)]">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{project.description}</p>
        </div>
        <div className="text-sm text-[var(--color-text-muted)]">{project.role || "Software developer"}</div>
        <div className="text-sm font-semibold text-[var(--color-text)]">
          {hasValidLink ? (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="link-underline">
              Visit
            </a>
          ) : (
            <span className="text-[var(--color-text-dim)]">Private</span>
          )}
        </div>
      </div>
    );
  }

  if (isFeature) {
    return (
      <article
        className={`grid gap-8 border-t border-[var(--color-border)] pt-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:gap-12 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        } ${className}`}
        style={{ transitionDelay: `${0.2 + index * 0.12}s` }}
      >
        <div className="group relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface-strong)]">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-mono text-xs uppercase tracking-[0.2em] text-[var(--color-text-dim)]">
              Private product
            </div>
          )}
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-mono text-xs uppercase tracking-[0.2em] text-[var(--color-text-dim)]">
                {project.year || "Selected work"}
              </span>
              <span className="meta-chip">{liveLabel}</span>
            </div>
            <h3 className="heading-serif mt-5 text-[var(--text-2xl)] text-[var(--color-text)]">
              {project.title}
            </h3>
            <p className="mt-4 text-[var(--text-base)] leading-relaxed text-[var(--color-text-muted)]">
              {project.description}
            </p>
            <dl className="mt-7 grid gap-5 text-sm">
              <div>
                <dt className="text-mono text-xs uppercase tracking-[0.18em] text-[var(--color-text-dim)]">Role</dt>
                <dd className="mt-1 text-[var(--color-text)]">{project.role || "Software developer"}</dd>
              </div>
              {project.challenge ? (
                <div>
                  <dt className="text-mono text-xs uppercase tracking-[0.18em] text-[var(--color-text-dim)]">Challenge</dt>
                  <dd className="mt-1 text-[var(--color-text-muted)]">{project.challenge}</dd>
                </div>
              ) : null}
              {project.outcome ? (
                <div>
                  <dt className="text-mono text-xs uppercase tracking-[0.18em] text-[var(--color-text-dim)]">Outcome</dt>
                  <dd className="mt-1 text-[var(--color-text-muted)]">{project.outcome}</dd>
                </div>
              ) : null}
            </dl>
          </div>

          <div className="mt-8">
            <div className="mb-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[var(--color-border)] bg-white/35 px-3 py-1 text-xs text-[var(--color-text-muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-5">
              {hasValidLink ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[var(--color-accent-strong)] link-underline"
                >
                  Visit project
                </a>
              ) : null}
              {hasGithub ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--color-text-muted)] link-underline"
                >
                  Source
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </article>
    );
  }

  const cardClasses = `surface-panel rounded-[1.75rem] p-6 transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_32px_80px_-40px_var(--color-shadow)] ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
  } ${className}`;

  return (
    <div className={cardClasses} style={{ transitionDelay: `${0.2 + index * 0.12}s` }}>
      <div className="mb-5 flex items-center justify-between gap-4">
        <span className="text-mono text-xs uppercase tracking-[0.2em] text-[var(--color-text-dim)]">
          {project.year || "Selected work"}
        </span>
        <span className="meta-chip">{liveLabel}</span>
      </div>
      <h3 className="heading-serif text-[var(--text-xl)] text-[var(--color-text)]">{project.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">{project.description}</p>
      <p className="mt-4 text-sm text-[var(--color-text)]">{project.role || "Software developer"}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[var(--color-border)] bg-white/35 px-3 py-1 text-xs text-[var(--color-text-muted)]"
          >
            {tag}
          </span>
        ))}
      </div>
      {(hasValidLink || hasGithub) && (
        <div className="mt-6 flex items-center gap-4">
          {hasValidLink ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[var(--color-accent-strong)] link-underline"
            >
              View project
            </a>
          ) : null}
          {hasGithub ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--color-text-muted)] link-underline"
            >
              Source
            </a>
          ) : null}
        </div>
      )}
    </div>
  );
}
