import { useScrollReveal } from "../hooks/useScrollReveal";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/zulmuzakir",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/zulmuzakir",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "https://twitter.com/zulmuzakir",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:kuro26neko@proton.me",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

export function Contact() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-32 px-6 lg:px-8 bg-[var(--color-bg-elevated)]"
    >
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className={`inline-block text-sm uppercase tracking-[0.3em] text-[var(--color-text-muted)] mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            04 / Contact
          </span>
          <h2
            className={`text-[var(--text-3xl)] font-bold tracking-tight mb-6 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Let's Work Together
          </h2>
          <p
            className={`max-w-xl mx-auto text-[var(--text-lg)] text-[var(--color-text-muted)] transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Have a project in mind or just want to chat? Feel free to reach out.
            I'm always open to discussing new opportunities.
          </p>
        </div>

        {/* Contact Content */}
        <div className="max-w-2xl mx-auto">
          {/* CTA Button */}
          <div
            className={`text-center mb-16 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
            }`}
          >
            <a
              href="mailto:kuro26neko@proton.me"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-[var(--color-text)] text-[var(--color-bg)] text-lg font-medium rounded-full opacity-90 hover:opacity-100 transition-all hover:gap-5 hover:shadow-lg"
            >
              Say Hello
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Divider */}
          <div className={`flex items-center gap-4 mb-12 transition-all duration-700 delay-400 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <span className="flex-1 h-px bg-[var(--color-border)]" />
            <span className="text-xs uppercase tracking-widest text-[var(--color-text-dim)]">or find me on</span>
            <span className="flex-1 h-px bg-[var(--color-border)]" />
          </div>

          {/* Social Links */}
          <div className={`flex justify-center gap-6 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {socialLinks.map((social, index) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:border-[var(--color-text-muted)] transition-all duration-300"
                style={{ transitionDelay: `${0.5 + index * 0.1}s` }}
                title={social.name}
              >
                <span className="transform group-hover:scale-110 transition-transform inline-block">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[var(--color-border)]">
      <div className="container-narrow flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--color-text-dim)]">
        <p>© {new Date().getFullYear()} Zulfikharali Muzakir. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Built with
          <span className="pulse">❤</span>
          and React Router
        </p>
      </div>
    </footer>
  );
}
