import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";

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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleSectionNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!href.startsWith("#")) {
      setMenuOpen(false);
      return;
    }

    event.preventDefault();

    if (href === "#") {
      setMenuOpen(false);
      window.history.replaceState(null, "", "#");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const target = document.querySelector<HTMLElement>(href);
    if (!target) {
      setMenuOpen(false);
      return;
    }

    setMenuOpen(false);
    window.history.replaceState(null, "", href);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen ? "header-blur py-3" : "bg-transparent py-5"
        }`}
      >
        <nav className="container-narrow flex items-center justify-between">
          <a
            href="#"
            className="heading-serif text-xl text-[var(--color-text)]"
            onClick={(event) => handleSectionNavigation(event, "#")}
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(-10px)",
              transition: "opacity 0.6s, transform 0.6s",
            }}
          >
            zul<span className="text-[var(--color-accent)]">.</span>
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-mono text-xs tracking-[0.15em] uppercase text-[var(--color-text-dim)] hover:text-[var(--color-text)] transition-colors link-underline"
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  onClick={(event) => handleSectionNavigation(event, link.href)}
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
            <li style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.6s", transitionDelay: "0.4s" }}>
              <ThemeToggle />
            </li>
          </ul>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-white/40 dark:bg-white/5"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((open) => !open)}
              style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.6s" }}
            >
              <span
                className={`absolute h-px w-5 bg-[var(--color-text)] transition-transform duration-300 ${
                  menuOpen ? "rotate-45" : "-translate-y-[0.22rem]"
                }`}
              />
              <span
                className={`absolute h-px w-5 bg-[var(--color-text)] transition-transform duration-300 ${
                  menuOpen ? "-rotate-45" : "translate-y-[0.22rem]"
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <button
          type="button"
          className="absolute inset-0 bg-[rgba(30,33,38,0.18)] backdrop-blur-sm"
          aria-label="Close menu overlay"
          onClick={() => setMenuOpen(false)}
        />
        <div
          id="mobile-navigation"
          className={`absolute left-4 right-4 top-24 rounded-[2rem] border border-[var(--color-border)] bg-[rgba(251,248,242,0.96)] dark:bg-[rgba(28,30,34,0.96)] p-6 shadow-[0_28px_80px_-40px_rgba(29,38,49,0.28)] transition-all duration-300 ${
            menuOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          <p className="text-mono text-xs uppercase tracking-[0.22em] text-[var(--color-text-dim)]">
            Navigation
          </p>
          <ul className="mt-6 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block rounded-2xl px-4 py-3 text-base font-semibold text-[var(--color-text)] transition-colors hover:bg-[var(--color-accent-soft)]"
                  onClick={(event) => handleSectionNavigation(event, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
