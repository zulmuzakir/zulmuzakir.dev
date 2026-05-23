import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { ThemeProvider } from "./components/ThemeProvider";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=IBM+Plex+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Portfolio of Zulfikharali Muzakir - A passionate Software Developer crafting digital experiences." />
        <meta name="keywords" content="software developer, portfolio, web developer, frontend, backend" />
        <meta name="author" content="Zulfikharali Muzakir" />
        <meta property="og:title" content="Zulfikharali Muzakir | Software Developer" />
        <meta property="og:description" content="Portfolio of Zulfikharali Muzakir - A passionate Software Developer crafting digital experiences." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://zulmuzakir.dev/og-image.png" />
        <meta property="og:url" content="https://zulmuzakir.dev" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://zulmuzakir.dev/og-image.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Zulfikharali Muzakir",
              url: "https://zulmuzakir.dev",
              jobTitle: "Software Developer",
              sameAs: [
                "https://github.com/zulmuzakir",
                "https://linkedin.com/in/zulmuzakir",
                "https://twitter.com/zulmuzakir",
              ],
              knowsAbout: ["React", "Go", "Node.js", "Laravel", "PostgreSQL", "TypeScript"],
            }),
          }}
        />
        <Meta />
        <Links />
      </head>
      <body className="antialiased" style={{ fontFamily: "var(--font-sans)" }}>
        <ThemeProvider>
          <a href="#main-content" className="skip-nav">Skip to main content</a>
          {children}
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="text-mono text-xs uppercase tracking-[0.22em] text-[var(--color-text-dim)]">
        {message === "404" ? "Page not found" : "Something went wrong"}
      </p>
      <h1 className="heading-serif text-[var(--text-hero)] mt-4 text-[var(--color-text)]">
        {message}
      </h1>
      <p className="mt-6 max-w-md text-[var(--text-lg)] text-[var(--color-text-muted)]">
        {details}
      </p>
      <a href="/" className="button-primary mt-10">
        Back to home
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
      </a>
      {stack && (
        <pre className="mt-12 w-full max-w-2xl p-4 overflow-x-auto text-left text-xs rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
