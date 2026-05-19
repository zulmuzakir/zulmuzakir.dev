import { useScrollReveal } from "../hooks/useScrollReveal";

const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "TailwindCSS", "Vue.js"] },
  { category: "Backend", items: ["Node.js", "Go", "PHP", "Laravel", "PostgreSQL"] },
  { category: "Tools", items: ["Git", "Docker", "Linux", "REST APIs"] },
];

export function Skills() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section id="skills" ref={sectionRef} className="relative py-32 px-6 lg:px-8">
      {/* Vertical section marker */}
      <div
        className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 writing-vertical section-marker"
        style={{ opacity: isVisible ? 0.4 : 0, transition: "opacity 1s" }}
      >
        02 — skills
      </div>

      <div className="container-narrow">
        {/* Section heading */}
        <h2
          className={`heading-serif text-[var(--text-3xl)] mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          What I Work With
        </h2>
        <p
          className={`text-[var(--color-warm-muted)] text-[var(--text-lg)] mb-16 max-w-lg transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Technologies I reach for when building things that matter.
        </p>

        {/* Skill groups — organic floating layout */}
        <div className="space-y-16">
          {skills.map((group, groupIndex) => (
            <div
              key={group.category}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${0.2 + groupIndex * 0.15}s` }}
            >
              {/* Category label — monospace */}
              <span className="text-mono text-[var(--color-warm-dim)] text-xs tracking-[0.2em] uppercase mb-6 block">
                {group.category}
              </span>

              {/* Floating skill tags */}
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill, i) => (
                  <span
                    key={skill}
                    className={`px-5 py-2.5 rounded-full border border-[var(--color-border-warm)] text-[var(--color-warm-text)] text-sm hover-glow-warm cursor-default transition-all duration-500 hover:border-[var(--color-warm-accent)] hover:text-[var(--color-warm-accent)] ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{
                      transitionDelay: `${0.3 + groupIndex * 0.15 + i * 0.06}s`,
                      animationDelay: `${i * 0.5}s`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Decorative — & more */}
        <div
          className={`mt-20 flex items-center gap-3 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="w-12 h-px bg-[var(--color-border-warm)]" />
          <span className="text-mono text-[var(--color-warm-dim)] text-xs tracking-widest">& always learning</span>
          <span className="w-12 h-px bg-[var(--color-border-warm)]" />
        </div>
      </div>
    </section>
  );
}
