"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme, useLang } from "./providers";

function IconGithub({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

type NavDef = { ru: string; en: string; href: string };

const navLinks: NavDef[] = [
  { ru: "Стек", en: "Stack", href: "#stack" },
  { ru: "Проекты", en: "Projects", href: "#projects" },
  { ru: "Контакты", en: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle: toggleTheme } = useTheme();
  const { lang, toggle: toggleLang } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = useCallback(() => setOpen(false), []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="font-mono text-sm font-semibold transition-colors" style={{ color: "var(--t-name)" }}>
          <span style={{ color: "var(--t-prompt)" }}>&gt;</span> shayden.ru
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover-link font-mono text-xs transition-colors"
              style={{ color: "var(--t-fg-dim)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--t-fg)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--t-fg-dim)")}
            >
              {lang === "RU" ? link.ru : link.en}
            </a>
          ))}

          {/* Controls */}
          <div className="flex items-center gap-2 ml-2">
            {/* Theme toggle */}
            <button
              type="button"
              onClick={() => {
                document.documentElement.classList.add("theme-transition");
                toggleTheme();
                setTimeout(() => document.documentElement.classList.remove("theme-transition"), 600);
              }}
              className="size-8 rounded-lg flex items-center justify-center transition-all hover:scale-110"
              style={{
                background: "var(--t-glass-bg)",
                border: "1px solid var(--t-glass-border)",
                color: "var(--t-fg-dim)",
              }}
              aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            >
              {theme === "dark" ? <Sun className="size-3.5" /> : <Moon className="size-3.5" />}
            </button>

            {/* Language toggle */}
            <button
              type="button"
              onClick={toggleLang}
              className="font-mono text-[10px] rounded-lg px-2 py-1 transition-all hover:scale-105"
              style={{
                background: "var(--t-glass-bg)",
                border: "1px solid var(--t-glass-border)",
                color: "var(--t-fg-dim)",
              }}
              aria-label="Toggle language"
            >
              {lang === "RU" ? "RU" : "EN"}
            </button>

            {/* GitHub */}
            <a
              href="https://github.com/Sh1yden"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:scale-110"
              style={{ color: "var(--t-fg-dim)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--t-fg)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--t-fg-dim)")}
              aria-label="GitHub"
            >
              <IconGithub className="size-4" />
            </a>
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden transition-colors"
          style={{ color: "var(--t-fg-dim)" }}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav
          className="border-t px-6 py-5 md:hidden flex flex-col gap-4"
          style={{
            borderColor: "var(--t-border)",
            background: "var(--t-mobile-nav-bg)",
            backdropFilter: "blur(24px)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMobile}
              className="font-mono text-sm transition-colors"
              style={{ color: "var(--t-fg-dim)" }}
            >
              {lang === "RU" ? link.ru : link.en}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-3 border-t" style={{ borderColor: "var(--t-border)" }}>
            <button
              type="button"
              onClick={() => {
                document.documentElement.classList.add("theme-transition");
                toggleTheme();
                setTimeout(() => document.documentElement.classList.remove("theme-transition"), 600);
              }}
              className="size-8 rounded-lg flex items-center justify-center"
              style={{
                background: "var(--t-glass-bg)",
                border: "1px solid var(--t-glass-border)",
                color: "var(--t-fg-dim)",
              }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="size-3.5" /> : <Moon className="size-3.5" />}
            </button>
            <button
              type="button"
              onClick={toggleLang}
              className="font-mono text-[10px] rounded-lg px-2 py-1"
              style={{
                background: "var(--t-glass-bg)",
                border: "1px solid var(--t-glass-border)",
                color: "var(--t-fg-dim)",
              }}
            >
              {lang === "RU" ? "RU" : "EN"}
            </button>
            <a
              href="https://github.com/Sh1yden"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--t-fg-dim)" }}
              aria-label="GitHub"
            >
              <IconGithub className="size-4" />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}