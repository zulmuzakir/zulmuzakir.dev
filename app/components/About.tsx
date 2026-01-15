import { useScrollReveal } from "../hooks/useScrollReveal";

export function About() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 px-6 lg:px-8"
    >
      <div className="container-narrow">
        {/* Section Header */}
        <div className="mb-16">
          <span
            className={`inline-block text-sm uppercase tracking-[0.3em] text-[var(--color-text-muted)] mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            01 / About
          </span>
          <h2
            className={`text-[var(--text-3xl)] font-bold tracking-tight transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Who I Am
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Description */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <p className="text-[var(--text-lg)] text-[var(--color-text-muted)] leading-relaxed mb-6">
              I'm a software developer with a passion for creating digital experiences 
              that are both functional and beautiful. I believe in writing clean, 
              maintainable code that solves real problems.
            </p>
            <p className="text-[var(--text-lg)] text-[var(--color-text-muted)] leading-relaxed mb-6">
              With experience across the full stack, I enjoy tackling challenges 
              from database design to pixel-perfect UIs. I'm constantly learning 
              and exploring new technologies to stay at the cutting edge.
            </p>
            <p className="text-[var(--text-lg)] text-[var(--color-text-muted)] leading-relaxed">
              When I'm not coding, you'll find me exploring new frameworks, 
              contributing to open source, or sharing knowledge with the developer community.
            </p>
          </div>

          {/* Right: Quick Facts */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="grid grid-cols-2 gap-8">
              {[
                { number: "3+", label: "Years Experience" },
                { number: "20+", label: "Projects Completed" },
                { number: "10+", label: "Technologies" },
                { number: "∞", label: "Cups of Coffee" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] hover-glow transition-all"
                  style={{
                    transitionDelay: `${0.4 + index * 0.1}s`,
                  }}
                >
                  <div
                    className="text-[var(--text-3xl)] font-bold mb-2"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-sm text-[var(--color-text-dim)] uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
