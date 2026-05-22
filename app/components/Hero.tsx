import { useEffect, useState } from "react";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center px-6 lg:px-8 pt-28 pb-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-4rem] top-24 h-[26rem] w-[26rem] rounded-full bg-[var(--color-accent-soft)] blur-3xl" />
        <div className="absolute left-[8%] top-[18%] h-px w-24 bg-[var(--color-border-strong)]" />
      </div>
      <div className="container-narrow relative z-10">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1.7fr)_minmax(18rem,0.8fr)] lg:items-end">
          <div>
            <span
              className="section-label mb-8"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(10px)",
                transition: "opacity 0.7s, transform 0.7s",
              }}
            >
              Software developer
            </span>
            <h1
              className="heading-serif max-w-5xl text-[var(--text-hero)]"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(36px)",
                transition: "opacity 0.9s 0.12s, transform 0.9s 0.12s",
              }}
            >
              I build reliable systems and the product surfaces that make them usable.
            </h1>
            <p
              className="mt-8 max-w-2xl text-[var(--text-lg)] text-[var(--color-text-muted)]"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.8s 0.24s, transform 0.8s 0.24s",
              }}
            >
              I work across APIs, databases, internal tooling, and delivery workflows.
              My strength is turning product requirements into maintainable systems
              without losing clarity on the interface layer.
            </p>
            <div
              className="mt-10 flex flex-wrap gap-3"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(18px)",
                transition: "opacity 0.8s 0.34s, transform 0.8s 0.34s",
              }}
            >
              <span className="meta-chip">React Router</span>
              <span className="meta-chip">Go / Node.js / Laravel</span>
              <span className="meta-chip">PostgreSQL / MySQL / MongoDB</span>
            </div>
            <div
              className="mt-12 flex flex-wrap gap-4"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(18px)",
                transition: "opacity 0.8s 0.44s, transform 0.8s 0.44s",
              }}
            >
              <a href="#projects" className="button-primary">
                View selected work
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#contact" className="button-secondary">
                Contact
              </a>
            </div>
          </div>

          <aside
            className="surface-panel rounded-[2rem] p-6 lg:p-8"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(26px)",
              transition: "opacity 0.9s 0.52s, transform 0.9s 0.52s",
            }}
          >
            <p className="text-mono text-xs uppercase tracking-[0.22em] text-[var(--color-text-dim)]">
              Current focus
            </p>
            <div className="editorial-rule mt-4 mb-5" />
            <p className="text-sm text-[var(--color-text-muted)]">
              Product development, internal tools, and platforms that need
              practical architecture instead of frontend theatrics.
            </p>
            <dl className="mt-8 grid gap-5 text-sm">
              <div>
                <dt className="text-mono text-xs uppercase tracking-[0.18em] text-[var(--color-text-dim)]">Based in</dt>
                <dd className="mt-1 font-semibold text-[var(--color-text)]">Indonesia</dd>
              </div>
              <div>
                <dt className="text-mono text-xs uppercase tracking-[0.18em] text-[var(--color-text-dim)]">Best at</dt>
                <dd className="mt-1 font-semibold text-[var(--color-text)]">APIs, data flows, product delivery</dd>
              </div>
              <div>
                <dt className="text-mono text-xs uppercase tracking-[0.18em] text-[var(--color-text-dim)]">Looking for</dt>
                <dd className="mt-1 font-semibold text-[var(--color-text)]">Recruiter and client opportunities</dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
