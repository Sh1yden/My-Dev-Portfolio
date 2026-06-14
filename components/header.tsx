"use client"

import { useState } from "react"
import { GitFork, Menu, X } from "lucide-react"

const navLinks = [
  { label: "Стек", href: "#stack" },
  { label: "Проекты", href: "#projects" },
  { label: "Контакты", href: "#contact" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#"
          className="font-mono text-sm font-semibold text-[#FFA066] hover:text-[#FFA066]/80 transition-colors"
          aria-label="Главная"
        >
          &gt; shayden.ru
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Основная навигация">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <GitFork className="size-4" />
          </a>

          <button
            type="button"
            className="cursor-pointer font-mono text-xs border border-border rounded px-2 py-1 text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
            aria-label="Переключить язык"
          >
            RU / EN
          </button>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav
          className="border-t border-border bg-background/95 px-6 py-4 md:hidden flex flex-col gap-4"
          aria-label="Мобильная навигация"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-4 pt-2 border-t border-border">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
            <GitFork className="size-4" />
            </a>
            <button
              type="button"
              className="cursor-pointer font-mono text-xs border border-border rounded px-2 py-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              RU / EN
            </button>
          </div>
        </nav>
      )}
    </header>
  )
}
