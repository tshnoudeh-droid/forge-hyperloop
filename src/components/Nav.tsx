"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return <div className="w-4 h-4" />;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      style={{ color: "var(--text-muted)" }}
      className="hover:text-accent transition-colors duration-200"
    >
      {isDark ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <line x1="12" y1="2" x2="12" y2="4" />
          <line x1="12" y1="20" x2="12" y2="22" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="2" y1="12" x2="4" y2="12" />
          <line x1="20" y1="12" x2="22" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}

const externalLinks = [
  { label: "Network", href: "https://network.forgehyperloop.com" },
  { label: "Lab", href: "https://lab.forgehyperloop.com" },
  { label: "Orbit", href: "https://orbit.forgehyperloop.com" },
];

const internalLinks = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Information", href: "/information" },
  { label: "Contact", href: "/#contact" },
];

const linkClass =
  "text-[12px] tracking-[0.18em] uppercase hover:text-accent transition-colors duration-200 font-sans";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6">
      {/* Left — external product links */}
      <div className="flex items-center gap-7">
        {externalLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
            style={{ color: "var(--text-muted)" }}
          >
            {label}
          </a>
        ))}
      </div>

      {/* Right — internal page links + theme toggle */}
      <div className="flex items-center gap-7">
        {internalLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className={linkClass}
            style={{ color: "var(--text-muted)" }}
          >
            {label}
          </a>
        ))}
        <ThemeToggle />
      </div>
    </nav>
  );
}
