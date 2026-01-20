import { useScrollReveal } from "../hooks/useScrollReveal";

const skills = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "TailwindCSS", "Vue.js"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Go", "PHP", "Laravel", "PostgreSQL"],
  },
  {
    category: "Tools & Others",
    items: ["Git", "Docker", "Linux", "REST APIs"],
  },
];

export function Skills() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-32 px-6 lg:px-8 bg-[var(--color-bg-elevated)]"
    >
      <div className="container-narrow">
        {/* Section Header */}
        <div className="mb-16">
          <span
            className={`inline-block text-sm uppercase tracking-[0.3em] text-[var(--color-text-muted)] mb-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            02 / Skills
          </span>
          <h2
            className={`text-[var(--text-3xl)] font-bold tracking-tight transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            What I Work With
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <div
              key={skillGroup.category}
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${0.2 + groupIndex * 0.15}s` }}
            >
              <h3
                className="text-[var(--text-lg)] font-semibold mb-6 text-[var(--color-text)]"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {skillGroup.category}
              </h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li
                    key={skill}
                    className={`group flex items-center gap-3 p-4 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-[var(--color-text-muted)] transition-all duration-300 ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-4"
                    }`}
                    style={{
                      transitionDelay: `${0.3 + groupIndex * 0.15 + skillIndex * 0.05}s`,
                    }}
                  >
                    {/* Animated bullet */}
                    <span className="w-2 h-2 rounded-full bg-[var(--color-text-dim)] group-hover:bg-[var(--color-text)] group-hover:scale-125 transition-all duration-300" />
                    <span className="text-[var(--color-text-muted)] group-hover:text-[var(--color-text)] transition-colors">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Decorative element */}
        <div
          className={`mt-16 flex justify-center transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-center gap-2 text-[var(--color-text-dim)]">
            <span className="w-12 h-px bg-[var(--color-border)]" />
            <span className="text-xs uppercase tracking-widest">& More</span>
            <span className="w-12 h-px bg-[var(--color-border)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
