"use client";

import { ArrowUp } from "lucide-react";
import { useLang } from "./providers";
import { IconGithub, IconTelegram, IconVk } from "./icons";

type FooterLink = { ru: string; en: string; href: string };

const navLinks: FooterLink[] = [
  { ru: "Стек", en: "Stack", href: "#stack" },
  { ru: "Проекты", en: "Projects", href: "#projects" },
  { ru: "Контакты", en: "Contact", href: "#contact" },
];

type SocialLink = {
  label: string;
  handle: string;
  href: string;
  icon: React.ElementType;
  color: string;
};

const socials: SocialLink[] = [
  { label: "Telegram", handle: "@Sh1yden", href: "https://t.me/Sh1yden", icon: IconTelegram, color: "var(--k-blue)" },
  { label: "GitHub", handle: "github.com/Sh1yden", href: "https://github.com/Sh1yden", icon: IconGithub, color: "var(--k-fuji)" },
  { label: "VK", handle: "vk.com/sh1yden", href: "https://vk.com/sh1yden", icon: IconVk, color: "#5181B8" },
];

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="px-6 pb-10 pt-16" style={{ borderTop: "1px solid var(--t-border-subtle)" }}>
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#hero" className="font-mono text-sm font-semibold transition-colors" style={{ color: "var(--t-name)" }}>
              <span style={{ color: "var(--t-prompt)" }}>&gt;</span> shayden.ru
            </a>
            <p className="mt-4 max-w-xs font-sans text-xs leading-relaxed" style={{ color: "var(--t-fg-dim)" }}>
              {t(
                "Проектирую быстрые асинхронные API и телеграм-ботов. Пишу чистый, масштабируемый код.",
                "Building fast async APIs and Telegram bots. Writing clean, scalable code."
              )}
            </p>
            <div className="glass-tag mt-5 !py-1.5 !px-3">
              <span className="relative mr-2 flex size-1.5" aria-hidden="true">
                <span
                  className="absolute inline-flex size-full animate-ping rounded-full opacity-60"
                  style={{ backgroundColor: "var(--k-green)" }}
                />
                <span
                  className="relative inline-flex size-1.5 rounded-full"
                  style={{ backgroundColor: "var(--k-green)" }}
                />
              </span>
              {t("Открыт к работе", "Open for work")}
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label={t("Навигация в подвале", "Footer navigation")}>
            <p className="section-label mb-4" style={{ color: "var(--t-prompt)" }}>{"// "}{t("навигация", "navigation")}</p>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover-link font-mono text-xs transition-colors"
                    style={{ color: "var(--t-fg-dim)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--t-fg)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--t-fg-dim)")}
                  >
                    {t(link.ru, link.en)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacts */}
          <div>
            <p className="section-label mb-4" style={{ color: "var(--t-accent)" }}>{"// "}{t("связь", "contacts")}</p>
            <ul className="flex flex-col gap-2.5">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs transition-colors"
                      style={{ color: "var(--t-fg-dim)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--t-fg)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--t-fg-dim)")}
                    >
                      <Icon className="size-3.5 flex-shrink-0" style={{ color: s.color }} />
                      {s.handle}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 flex flex-col gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: "var(--t-border-subtle)" }}
        >
          <p className="font-mono text-xs" style={{ color: "var(--t-fg-faint)" }}>
            <span style={{ color: "var(--t-name)" }}>&gt; shayden.ru</span> — Kirill (Shayden) &copy; {new Date().getFullYear()}
          </p>
          <div className="flex items-center gap-4">
            <p className="font-mono text-xs" style={{ color: "var(--t-fg-faint)" }}>
              {t("Собрано на Next.js 16", "Built with Next.js 16")} · Liquid Glass + Kanagawa
            </p>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex size-8 flex-shrink-0 items-center justify-center rounded-lg transition-all hover:scale-110"
              style={{
                background: "var(--t-glass-bg)",
                border: "1px solid var(--t-glass-border)",
                color: "var(--t-fg-dim)",
              }}
              aria-label={t("Наверх", "Back to top")}
            >
              <ArrowUp className="size-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
