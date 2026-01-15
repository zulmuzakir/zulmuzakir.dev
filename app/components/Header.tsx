import { useState, useEffect } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-4" : "bg-transparent py-6"
      }`}
    >
      <nav className="container-narrow flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold tracking-tight"
          style={{
            fontFamily: "var(--font-space-grotesk)",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(-20px)",
            transition: "opacity 0.6s, transform 0.6s",
          }}
        >
          zul<span className="text-[var(--color-text-muted)]">.</span>
        </a>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="link-underline text-sm uppercase tracking-widest text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(-20px)",
                  transition: `opacity 0.6s, transform 0.6s`,
                  transitionDelay: `${0.1 + index * 0.05}s`,
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 0.6s",
          }}
        >
          <span className="w-6 h-0.5 bg-current" />
          <span className="w-6 h-0.5 bg-current" />
        </button>
      </nav>
    </header>
  );
}
