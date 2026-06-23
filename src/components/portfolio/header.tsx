"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X, Github, Sun, Moon } from "lucide-react";
import { useTheme, useLang } from "./providers";

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
              <Github className="size-4" />
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
              <Github className="size-4" />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}