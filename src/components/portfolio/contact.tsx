"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "./providers";

function IconGithub({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function IconTelegram({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 13.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.942z" />
    </svg>
  );
}

function IconVk({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.785 16.241s.288-.032.436-.194c.136-.148.132-.427.132-.427s-.02-1.304.587-1.496c.598-.19 1.365 1.26 2.178 1.817.615.42 1.082.328 1.082.328l2.172-.03s1.135-.07.597-1.006c-.044-.073-.314-.658-1.615-1.86-1.362-1.258-1.18-1.054.46-3.229.999-1.33 1.398-2.142 1.273-2.49-.12-.332-.855-.244-.855-.244l-2.443.015s-.181-.025-.315.055c-.132.078-.216.26-.216.26s-.387 1.028-.903 1.903c-1.088 1.848-1.52 1.946-1.698 1.832-.413-.267-.31-1.072-.31-1.644 0-1.787.271-2.53-.528-2.723-.265-.064-.46-.106-1.138-.113-.87-.009-1.606.003-2.022.207-.277.135-.49.437-.36.454.161.02.525.098.719.36.25.34.241 1.104.241 1.104s.144 2.105-.336 2.367c-.329.18-.781-.187-1.75-1.865-.497-.859-.873-1.81-.873-1.81s-.072-.176-.202-.27c-.157-.115-.376-.152-.376-.152l-2.322.015s-.349.01-.477.162c-.114.135-.009.414-.009.414s1.818 4.25 3.876 6.395c1.888 1.97 4.03 1.84 4.03 1.84h.972z" />
    </svg>
  );
}

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
        <p className="section-label mb-2" style={{ color: "var(--k-orange)" }}>// 03</p>

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

      <footer
        className="mx-auto max-w-6xl mt-28 pt-8 border-t flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        style={{ borderColor: "var(--t-border-subtle)" }}
      >
        <p className="font-mono text-xs" style={{ color: "var(--t-fg-faint)" }}>
          <span style={{ color: "var(--t-name)" }}>&gt; shayden.ru</span> — Kirill (Shayden) &copy; {new Date().getFullYear()}
        </p>
        <p className="font-mono text-xs" style={{ color: "var(--t-fg-faint)" }}>
          Liquid Glass + Kanagawa
        </p>
      </footer>
    </section>
  );
}