"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "./providers";
import { IconGithub, IconTelegram, IconVk } from "./icons";

type SocialLink = {
  label: string;
  handle: string;
  href: string;
  icon: React.ElementType;
  color: string;
};

const socials: SocialLink[] = [
  { label: "Telegram", handle: "@Sh1yden", href: "https://t.me/Sh1yden", icon: IconTelegram, color: "var(--k-blue)" },
  { label: "VK", handle: "vk.com/shayden", href: "https://vk.com/sh1yden", icon: IconVk, color: "#5181B8" },
  { label: "GitHub", handle: "github.com/Sh1yden", href: "https://github.com/Sh1yden", icon: IconGithub, color: "var(--k-fuji)" },
];

export function Contact() {
  const { t } = useLang();
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="contact" className="py-28 px-6" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-6xl">
        <p className="section-label mb-2" style={{ color: "var(--k-orange)" }}>{"// 03"}</p>

        <h2
          id="contact-heading"
          className={`font-mono text-2xl font-bold sm:text-3xl mb-4 text-balance transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {t("Построим что-то ", "Let's build something ")}
          <span style={{ color: "var(--k-green)" }}>{t("эффективное", "effective")}</span>
          {" "}{t("вместе", "together")}
        </h2>
        <p
          className={`font-sans text-base max-w-lg leading-relaxed mb-12 transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ color: "var(--t-fg-dim)" }}
        >
          {t("Открыт к работе. Пишите — отвечаю быстро.", "Open for work. Drop me a line — I reply fast.")}
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {socials.map((s, i) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass glass-shimmer flex items-center gap-3.5 p-4 transition-all duration-700 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <div
                  className="flex size-10 flex-shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `color-mix(in srgb, ${s.color} 15%, transparent)` }}
                  aria-hidden="true"
                >
                  <Icon className="size-4.5" style={{ color: s.color }} />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-xs font-semibold" style={{ color: "var(--t-fg)" }}>{s.label}</p>
                  <p className="font-mono text-xs truncate" style={{ color: "var(--t-fg-dim)" }}>{s.handle}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
