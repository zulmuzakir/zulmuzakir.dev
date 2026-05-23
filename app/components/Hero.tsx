import { motion } from "motion/react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 lg:px-8 pt-28 pb-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute right-[-4rem] top-24 h-[26rem] w-[26rem] rounded-full bg-[var(--color-accent-soft)] blur-3xl"
          animate={{
            scale: [1, 1.15, 0.95, 1.08, 1],
            x: [0, 30, -20, 10, 0],
            y: [0, -20, 15, -10, 0],
            borderRadius: ["50%", "40% 60% 55% 45%", "55% 45% 40% 60%", "45% 55% 60% 40%", "50%"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-[15%] bottom-[20%] h-[18rem] w-[18rem] rounded-full bg-[var(--color-accent-soft)] opacity-50 blur-3xl"
          animate={{
            scale: [1, 0.9, 1.1, 0.95, 1],
            x: [0, -15, 25, -10, 0],
            y: [0, 20, -15, 10, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute left-[8%] top-[18%] h-px w-24 bg-[var(--color-border-strong)]" />
      </div>
      <div className="container-narrow relative z-10">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1.7fr)_minmax(18rem,0.8fr)] lg:items-end">
          <div>
            <motion.span className="section-label mb-8" {...fadeUp(0)}>
              Software developer
            </motion.span>
            <motion.p
              className="mt-6 heading-serif text-[var(--text-3xl)] text-[var(--color-accent-strong)]"
              {...fadeUp(0.06)}
            >
              Zulfikharali Muzakir
            </motion.p>
            <motion.h1
              className="heading-serif mt-4 max-w-5xl text-[var(--text-hero)]"
              {...fadeUp(0.12)}
            >
              I build reliable systems and the product surfaces that make them usable.
            </motion.h1>
            <motion.p
              className="mt-8 max-w-2xl text-[var(--text-lg)] text-[var(--color-text-muted)]"
              {...fadeUp(0.24)}
            >
              I work across APIs, databases, internal tooling, and delivery workflows.
              My strength is turning product requirements into maintainable systems
              without losing clarity on the interface layer.
            </motion.p>
            <motion.div className="mt-10 flex flex-wrap gap-3" {...fadeUp(0.34)}>
              <span className="meta-chip">React Router</span>
              <span className="meta-chip">Go / Node.js / Laravel</span>
              <span className="meta-chip">PostgreSQL / MySQL / MongoDB</span>
            </motion.div>
            <motion.div className="mt-12 flex flex-wrap gap-4" {...fadeUp(0.44)}>
              <a href="#projects" className="button-primary">
                View selected work
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#contact" className="button-secondary">
                Contact
              </a>
            </motion.div>
          </div>

          <motion.aside
            className="surface-panel rounded-[2rem] p-6 lg:p-8"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
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
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
