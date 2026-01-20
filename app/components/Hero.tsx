import { AnimatedText, AnimatedWords, Typewriter } from "./AnimatedText";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-8 pb-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orb */}
        <div
          className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-1/4 -left-1/4 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
          }}
        />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(var(--color-text-dim) 1px, transparent 1px),
                              linear-gradient(90deg, var(--color-text-dim) 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      {/* Main content */}
      <div className="container-narrow relative z-10">
        {/* Greeting */}
        <div className="mb-6">
          <span
            className="inline-block text-sm uppercase tracking-[0.3em] text-[var(--color-text-muted)] mb-4"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            <AnimatedWords text="Hello, I'm" delay={0.3} wordDelay={0.1} />
          </span>
        </div>

        {/* Name */}
        <h1
          className="mb-6"
          style={{
            fontSize: "var(--text-hero)",
            fontFamily: "var(--font-space-grotesk)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          <AnimatedText
            text="Zulfikharali"
            delay={0.5}
            letterDelay={0.04}
          />
          <br />
          <span className="text-[var(--color-text-muted)]">
            <AnimatedText
              text="Muzakir"
              delay={0.9}
              letterDelay={0.04}
            />
          </span>
        </h1>

        {/* Role with typewriter effect */}
        <div className="mb-8">
          <p className="text-[var(--text-xl)] text-[var(--color-text-muted)]">
            <Typewriter
              text="Software Developer"
              delay={1500}
              speed={80}
              showCursor={true}
            />
          </p>
        </div>

        {/* Tagline */}
        <p
          className="max-w-xl text-[var(--text-lg)] text-[var(--color-text-dim)] leading-relaxed mb-12"
          style={{
            opacity: 0,
            animation: "fadeInUp 0.8s 2s forwards",
          }}
        >
          Building digital experiences that blend creativity with clean code.
          Passionate about crafting elegant solutions to complex problems.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap gap-4"
          style={{
            opacity: 0,
            animation: "fadeInUp 0.8s 2.2s forwards",
          }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-opacity-90 transition-all hover:gap-4"
          >
            View Projects
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 border border-[var(--color-border)] text-[var(--color-text)] font-medium rounded-full hover:bg-[var(--color-bg-elevated)] transition-all"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{
          opacity: 0,
          animation: "fadeIn 1s 2.5s forwards",
        }}
      >
        <span className="text-xs uppercase tracking-widest text-[var(--color-text-dim)]">
          Scroll
        </span>
        <div className="bounce">
          <svg
            className="w-5 h-5 text-[var(--color-text-dim)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
