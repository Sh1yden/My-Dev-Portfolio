"use client";

import { useEffect, useRef, useState } from "react";
import { Terminal, Database, Server, Wrench } from "lucide-react";
import { useLang } from "./providers";

type Category = {
  icon: React.ElementType;
  labelRu: string;
  labelEn: string;
  color: string;
  items: string[];
};

const categories: Category[] = [
  {
    icon: Terminal,
    labelRu: "Языки",
    labelEn: "Languages",
    color: "var(--k-orange)",
    items: ["Python", "SQL"],
  },
  {
    icon: Server,
    labelRu: "Фреймворки",
    labelEn: "Frameworks",
    color: "var(--k-blue)",
    items: ["FastAPI", "Django", "SQLAlchemy", "aiogram"],
  },
  {
    icon: Database,
    labelRu: "Датабазы",
    labelEn: "Databases",
    color: "var(--k-green)",
    items: ["PostgreSQL", "SQLite", "SQLAlchemy", "DjangoORM", "asyncpg", "Redis"],
  },
  {
    icon: Wrench,
    labelRu: "Девопс",
    labelEn: "DevOps",
    color: "var(--k-purple)",
    items: ["Linux / WSL 2", "Cloudflare Tunnels", "Docker", "Git"],
  },
];

function GlassCard({ cat, index }: { cat: Category; index: number }) {
  const { lang } = useLang();
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const Icon = cat.icon;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 100);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className={`glass glass-shimmer p-5 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="mb-4 flex items-center gap-2.5">
        <div
          className="flex size-9 items-center justify-center rounded-lg"
          style={{ backgroundColor: `color-mix(in srgb, ${cat.color} 15%, transparent)` }}
          aria-hidden="true"
        >
          <Icon className="size-4" style={{ color: cat.color }} />
        </div>
        <span className="font-mono text-xs font-semibold" style={{ color: cat.color }}>
          {lang === "RU" ? cat.labelRu : cat.labelEn}
        </span>
      </div>
      <ul className="flex flex-col gap-2.5">
        {cat.items.map((item) => (
          <li key={item} className="flex items-center gap-2.5 font-mono text-sm" style={{ color: "var(--t-fg)", opacity: 0.75 }}>
            <span className="size-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: cat.color }} aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TechStack() {
  const { t } = useLang();

  return (
    <section id="stack" className="py-28 px-6" aria-labelledby="stack-heading">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14">
          <p className="section-label mb-2" style={{ color: "var(--t-prompt)" }}>// 01</p>
          <h2 id="stack-heading" className="font-mono text-2xl font-bold sm:text-3xl">
            {t("Стек технологий", "Tech Stack")}
          </h2>
          <p className="mt-3 font-sans text-sm max-w-md" style={{ color: "var(--t-fg-dim)" }}>
            {t("Инструменты и технологии, которые я использую в работе каждый день.", "Tools and technologies I use every day.")}
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <GlassCard key={cat.labelRu} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}