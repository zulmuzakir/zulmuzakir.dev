import { useScrollReveal } from "../hooks/useScrollReveal";

export function About() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section id="about" ref={sectionRef} className="section-divider py-28 px-6 lg:px-8">
      <div className="container-narrow max-w-3xl">
        <span className={`section-label transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          01 / Approach
        </span>
        <h2
          className={`heading-serif mt-8 text-[var(--text-2xl)] max-w-3xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          I work best where product ambiguity, backend complexity, and delivery pressure meet.
        </h2>
        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(17rem,0.8fr)]">
          <div className="space-y-7">
            <p
              className={`text-[var(--text-lg)] text-[var(--color-text-muted)] leading-relaxed transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              I am a software developer focused on building dependable products.
              Most of my work starts with the system: data shape, request flow,
              operational clarity, and how a feature will survive once real users
              and internal teams depend on it.
            </p>
            <p
              className={`text-[var(--text-lg)] text-[var(--color-text-muted)] leading-relaxed transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              I still care about the interface, but I treat it as part of delivery,
              not decoration. The goal is software that is understandable, stable,
              and useful from database to screen.
            </p>
          </div>
          <div
            className={`surface-panel rounded-[1.75rem] p-6 transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <p className="text-mono text-xs uppercase tracking-[0.2em] text-[var(--color-text-dim)]">
              Working principles
            </p>
            <ul className="mt-6 space-y-4 text-sm text-[var(--color-text-muted)]">
              <li>Design APIs and data models that stay readable under change.</li>
              <li>Prefer pragmatic architecture over fashionable complexity.</li>
              <li>Ship interfaces that explain the system instead of hiding it.</li>
            </ul>
          </div>
        </div>

        <div
          className={`mt-16 grid gap-6 md:grid-cols-3 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {[
            { number: "3+", label: "years building production software" },
            { number: "4", label: "featured products across public and internal use" },
            { number: "1", label: "priority: systems that hold up in real use" },
          ].map((stat) => (
            <div key={stat.label} className="border-t border-[var(--color-border)] pt-5">
              <div className="heading-serif text-[var(--text-xl)] text-[var(--color-accent-strong)]">
                {stat.number}
              </div>
              <div className="mt-2 text-sm text-[var(--color-text-muted)]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
