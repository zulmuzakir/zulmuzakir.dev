import { useScrollReveal } from "../hooks/useScrollReveal";

const skills = [
  {
    category: "Backend Systems",
    summary: "Service logic, APIs, integrations, and data-heavy application flows.",
    items: ["Node.js", "Go", "PHP", "Laravel", "Java"],
  },
  {
    category: "Frontend Delivery",
    summary: "Product surfaces that support the system instead of competing with it.",
    items: ["React", "TypeScript", "Vue.js", "Quasar", "TailwindCSS"],
  },
  {
    category: "Data and Tooling",
    summary: "Storage, collaboration, and operational basics needed to ship reliably.",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Docker", "Linux", "Git"],
  },
];

export function Skills() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section id="skills" ref={sectionRef} className="section-divider py-28 px-6 lg:px-8">
      <div className="container-narrow">
        <span className={`section-label transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          02 / Capabilities
        </span>
        <h2
          className={`heading-serif mt-8 text-[var(--text-3xl)] mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          The stack matters less than the shape of the work.
        </h2>
        <p
          className={`text-[var(--color-text-muted)] text-[var(--text-lg)] mb-16 max-w-2xl transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          I usually contribute across the stack, but I am strongest when the job
          requires reliable backend thinking and practical product delivery.
        </p>

        <div className="grid gap-6 lg:grid-cols-3">
          {skills.map((group, groupIndex) => (
            <div
              key={group.category}
              className={`surface-panel rounded-[1.75rem] p-6 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${0.2 + groupIndex * 0.15}s` }}
            >
              <span className="text-mono text-[var(--color-text-dim)] text-xs tracking-[0.2em] uppercase mb-4 block">
                {group.category}
              </span>
              <p className="mb-6 text-sm leading-relaxed text-[var(--color-text-muted)]">
                {group.summary}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((skill, i) => (
                  <span
                    key={skill}
                    className={`px-3 py-2 rounded-full border border-[var(--color-border)] bg-white/40 text-[var(--color-text-muted)] text-sm cursor-default transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{
                      transitionDelay: `${0.3 + groupIndex * 0.15 + i * 0.06}s`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
