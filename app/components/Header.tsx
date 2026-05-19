import { useState, useEffect } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
  { href: "https://blog.zulmuzakir.dev", label: "Blog" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-warm py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="container-narrow flex items-center justify-between">
        {/* Logo — serif */}
        <a
          href="#"
          className="heading-serif text-xl text-[var(--color-warm-text)]"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(-10px)",
            transition: "opacity 0.6s, transform 0.6s",
          }}
        >
          zul<span className="text-[var(--color-warm-accent)]">.</span>
        </a>

        {/* Nav links — monospace */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-mono text-xs tracking-[0.15em] uppercase text-[var(--color-warm-muted)] hover:text-[var(--color-warm-text)] transition-colors link-underline"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(-10px)",
                  transition: "opacity 0.6s, transform 0.6s, color 0.3s",
                  transitionDelay: `${0.1 + i * 0.05}s`,
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
          style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.6s" }}
        >
          <span className="w-5 h-px bg-[var(--color-warm-text)]" />
          <span className="w-5 h-px bg-[var(--color-warm-text)]" />
        </button>
      </nav>
    </header>
  );
}
