import { useScrollReveal } from "../hooks/useScrollReveal";

export function About() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section id="about" ref={sectionRef} className="relative py-32 px-6 lg:px-8">
      {/* Vertical section marker */}
      <div
        className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 writing-vertical section-marker"
        style={{ opacity: isVisible ? 0.4 : 0, transition: "opacity 1s" }}
      >
        01 — about
      </div>

      <div className="container-narrow max-w-3xl">
        {/* Pull quote — large serif */}
        <blockquote
          className={`heading-serif text-[var(--text-2xl)] text-[var(--color-warm-text)] mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          I build software the way light moves through leaves —
          <span className="text-[var(--color-warm-accent)]"> with intention, warmth, and quiet precision.</span>
        </blockquote>

        {/* Narrative paragraphs */}
        <div className="space-y-8">
          <p
            className={`text-[var(--text-lg)] text-[var(--color-warm-muted)] leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            I'm a software developer with a passion for creating digital
            experiences that are both functional and beautiful. I believe in
            writing clean, maintainable code that solves real problems.
          </p>
          <p
            className={`text-[var(--text-lg)] text-[var(--color-warm-muted)] leading-relaxed transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            With experience across the full stack, I enjoy tackling challenges
            from database design to crafting full-stack applications. I'm
            constantly learning and exploring new technologies like Go and
            Rust to stay at the cutting edge of scalable software.
          </p>
        </div>

        {/* Inline stats — woven into the narrative */}
        <div
          className={`mt-16 flex flex-wrap gap-12 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {[
            { number: "3+", label: "years building" },
            { number: "10+", label: "technologies" },
            { number: "∞", label: "curiosity" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="heading-serif text-[var(--text-3xl)] text-[var(--color-warm-accent)]">
                {stat.number}
              </div>
              <div className="text-mono text-[var(--color-warm-dim)] text-xs tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
