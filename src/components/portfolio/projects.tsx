"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, Star } from "lucide-react";
import { useLang } from "./providers";

type Project = {
  title: string;
  descRu: string;
  descEn: string;
  language: string;
  languageColor: string;
  stars?: number;
  githubUrl: string;
};

const projects: Project[] = [
  {
    title: "SkyNode",
    descRu: "Персональный погодный хаб. Telegram-бот с агрегацией данных из нескольких источников (OpenMeteo, WeatherAPI, VisualCrossing, Яндекс.Погода), вебхуки через Tuna туннели, кэширование на Redis и интернационализация через Fluentogram.",
    descEn: "Personal weather hub. Telegram bot aggregating data from multiple sources (OpenMeteo, WeatherAPI, VisualCrossing, Yandex.Weather), webhooks via Tuna tunnels, Redis caching and i18n via Fluentogram.",
    language: "Python",
    languageColor: "#3572A5",
    githubUrl: "https://github.com/Sh1yden/SkyNode",
  },
  {
    title: "LinkCutter",
    descRu: "Быстрый и современный сервис для сокращения URL-адресов. Построен на базе асинхронного стека Python, обеспечивая высокую производительность и лёгкость развёртывания.",
    descEn: "Fast modern URL shortening service. Built on an async Python stack for high performance and easy deployment.",
    language: "Python",
    languageColor: "#3572A5",
    githubUrl: "https://github.com/Sh1yden/LinkCutter",
  },
  {
    title: "PyPyQt6PostgreSQLApp",
    descRu: "Школьное приложение на ПК. Python, PyQt 6, PostgreSQL. Несколько уровней доступа — что-то вроде электронного журнала.",
    descEn: "School desktop app. Python, PyQt 6, PostgreSQL. Multiple access levels — something like an electronic gradebook.",
    language: "Python",
    languageColor: "#3572A5",
    githubUrl: "https://github.com/Sh1yden/PyPyQt6PostgreSQlApp",
  },
  {
    title: "Avito-Parser",
    descRu: "Парсер для любых объявлений с Авито. Гибкая система фильтрации и экспорта.",
    descEn: "Parser for any Avito listings. Flexible filtering and export system.",
    language: "Python",
    languageColor: "#3572A5",
    stars: 42,
    githubUrl: "https://github.com/Sh1yden/Avito-Parser",
  },
];

function RepoIcon() {
  return (
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" width="16" style={{ color: "var(--t-fg-dim)" }} className="flex-shrink-0" fill="currentColor">
      <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
    </svg>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { lang } = useLang();
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 120);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <article
      ref={ref}
      className={`glass glass-shimmer flex flex-col p-5 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="flex items-center gap-2.5 mb-3">
        <RepoIcon />
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm font-semibold hover:underline decoration-[var(--k-blue)]/30 underline-offset-2 transition-colors truncate"
          style={{ color: "var(--t-accent)" }}
        >
          {project.title}
        </a>
        <span className="glass-tag ml-auto flex-shrink-0 !py-0.5 !px-2.5 !text-[10px]">
          Public
        </span>
      </div>

      <p className="font-sans text-xs leading-relaxed flex-1 mb-4" style={{ color: "var(--t-fg-dim)" }}>
        {lang === "RU" ? project.descRu : project.descEn}
      </p>

      <div className="flex items-center gap-4 pt-3 border-t" style={{ borderColor: "var(--t-border-subtle)" }}>
        <span className="flex items-center gap-1.5">
          <span className="size-3 rounded-full flex-shrink-0" style={{ backgroundColor: project.languageColor }} aria-hidden="true" />
          <span className="font-sans text-xs" style={{ color: "var(--t-fg-dim)" }}>{project.language}</span>
        </span>
        {project.stars !== undefined && (
          <span className="flex items-center gap-1">
            <Star className="size-3.5" style={{ color: "var(--k-orange)" }} fill="currentColor" />
            <span className="font-sans text-xs" style={{ color: "var(--t-fg-dim)" }}>{project.stars}</span>
          </span>
        )}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto transition-colors"
          style={{ color: "var(--t-fg-dim)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--t-accent)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--t-fg-dim)")}
          aria-label={`Open ${project.title} on GitHub`}
        >
          <ExternalLink className="size-3.5" />
        </a>
      </div>
    </article>
  );
}

export function Projects() {
  const { t } = useLang();

  return (
    <section id="projects" className="py-28 px-6" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14">
          <p className="section-label mb-2" style={{ color: "var(--t-accent)" }}>// 02</p>
          <h2 id="projects-heading" className="font-mono text-2xl font-bold sm:text-3xl">
            {t("Проекты", "Projects")}
          </h2>
          <p className="mt-3 font-sans text-sm max-w-md" style={{ color: "var(--t-fg-dim)" }}>
            {t(
              "Избранные работы. От Telegram-ботов до веб-сервисов и desktop-приложений.",
              "Selected works. From Telegram bots to web services and desktop apps."
            )}
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}