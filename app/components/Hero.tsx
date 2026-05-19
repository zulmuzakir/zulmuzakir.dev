import { useEffect, useState } from "react";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center px-6 lg:px-8 pt-24 pb-32 overflow-hidden">
      {/* Bokeh / Komorebi light spots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[15%] right-[20%] w-[300px] h-[300px] rounded-full blur-[80px] animate-drift"
          style={{ background: "rgba(245, 200, 130, 0.08)", animationDelay: "0s" }}
        />
        <div
          className="absolute top-[40%] left-[10%] w-[200px] h-[200px] rounded-full blur-[60px] animate-drift"
          style={{ background: "rgba(212, 165, 116, 0.06)", animationDelay: "-2s" }}
        />
        <div
          className="absolute bottom-[20%] right-[35%] w-[150px] h-[150px] rounded-full blur-[50px] animate-drift"
          style={{ background: "rgba(245, 200, 130, 0.05)", animationDelay: "-4s" }}
        />
        {/* Small firefly dots */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[var(--color-warm-glow)] animate-firefly"
            style={{
              top: `${20 + i * 15}%`,
              left: `${15 + i * 18}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${4 + i * 0.8}s`,
            }}
          />
        ))}
      </div>

      {/* Vertical text accent — left side */}
      <div
        className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 writing-vertical section-marker"
        style={{
          opacity: mounted ? 0.4 : 0,
          transition: "opacity 1.5s 2s",
        }}
      >
        木漏れ日 — komorebi
      </div>

      {/* Main content */}
      <div className="container-narrow relative z-10">
        {/* Greeting — monospace accent */}
        <div className="mb-8">
          <span
            className="text-mono text-[var(--color-warm-muted)] tracking-[0.3em] uppercase"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.8s 0.3s var(--ease-out-expo), transform 0.8s 0.3s var(--ease-out-expo)",
              display: "inline-block",
            }}
          >
            hello, I'm
          </span>
        </div>

        {/* Name — serif heading */}
        <h1 className="heading-serif mb-6" style={{ fontSize: "var(--text-hero)" }}>
          <span
            className="block"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 1s 0.6s var(--ease-out-expo), transform 1s 0.6s var(--ease-out-expo)",
            }}
          >
            Zulfikharali
          </span>
          <span
            className="block text-[var(--color-warm-muted)]"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 1s 0.9s var(--ease-out-expo), transform 1s 0.9s var(--ease-out-expo)",
            }}
          >
            Muzakir
          </span>
        </h1>

        {/* Role */}
        <p
          className="text-[var(--text-xl)] text-[var(--color-warm-accent)] mb-8 text-mono"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s 1.3s var(--ease-out-expo), transform 0.8s 1.3s var(--ease-out-expo)",
          }}
        >
          Software Developer
        </p>

        {/* Tagline */}
        <p
          className="max-w-lg text-[var(--text-lg)] text-[var(--color-warm-muted)] leading-relaxed mb-12"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s 1.6s var(--ease-out-expo), transform 0.8s 1.6s var(--ease-out-expo)",
          }}
        >
          Building digital experiences that blend creativity with clean code.
          Crafting elegant solutions to complex problems.
        </p>

        {/* CTA */}
        <div
          className="flex flex-wrap gap-4"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s 1.9s var(--ease-out-expo), transform 0.8s 1.9s var(--ease-out-expo)",
          }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-warm-accent)] text-[var(--color-warm-bg)] font-medium rounded-full hover:opacity-90 transition-all hover:gap-4"
          >
            View Projects
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 border border-[var(--color-border-warm)] text-[var(--color-warm-text)] font-medium rounded-full hover:bg-[var(--color-warm-bg-elevated)] transition-all"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{
          opacity: mounted ? 1 : 0,
          transition: "opacity 1s 2.5s",
        }}
      >
        <span className="text-mono text-[var(--color-warm-dim)] text-xs tracking-widest">scroll</span>
        <div className="bounce">
          <svg className="w-4 h-4 text-[var(--color-warm-dim)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
