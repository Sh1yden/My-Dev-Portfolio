"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, Star } from "lucide-react";
import type { PinnedRepo } from "@/lib/github";
import { useLang } from "./providers";

function RepoIcon() {
  return (
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" width="16" style={{ color: "var(--t-fg-dim)" }} className="flex-shrink-0" fill="currentColor">
      <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
    </svg>
  );
}

function ProjectCard({ project, index }: { project: PinnedRepo; index: number }) {
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
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm font-semibold hover:underline decoration-[var(--k-blue)]/30 underline-offset-2 transition-colors truncate"
          style={{ color: "var(--t-accent)" }}
        >
          {project.name}
        </a>
        <span
          className="glass-tag ml-auto flex-shrink-0 !py-0.5 !px-2.5 !text-[10px]"
          style={
            project.archived
              ? { color: "var(--k-orange)", borderColor: "color-mix(in srgb, var(--k-orange) 25%, transparent)" }
              : undefined
          }
        >
          {project.archived ? "Archived" : "Public"}
        </span>
      </div>

      {project.description ? (
        <p className="font-sans text-xs leading-relaxed flex-1 mb-4" style={{ color: "var(--t-fg-dim)" }}>
          {project.description}
        </p>
      ) : (
        <div className="flex-1 mb-4" />
      )}

      <div className="flex items-center gap-4 pt-3 border-t" style={{ borderColor: "var(--t-border-subtle)" }}>
        {project.language && (
          <span className="flex items-center gap-1.5">
            <span
              className="size-3 rounded-full flex-shrink-0"
              style={{ backgroundColor: project.languageColor ?? "var(--t-fg-faint)" }}
              aria-hidden="true"
            />
            <span className="font-sans text-xs" style={{ color: "var(--t-fg-dim)" }}>{project.language}</span>
          </span>
        )}
        {project.stars > 0 && (
          <span className="flex items-center gap-1">
            <Star className="size-3.5" style={{ color: "var(--k-orange)" }} fill="currentColor" />
            <span className="font-sans text-xs" style={{ color: "var(--t-fg-dim)" }}>{project.stars}</span>
          </span>
        )}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto transition-colors"
          style={{ color: "var(--t-fg-dim)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--t-accent)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--t-fg-dim)")}
          aria-label={`Open ${project.name} on GitHub`}
        >
          <ExternalLink className="size-3.5" />
        </a>
      </div>
    </article>
  );
}

export function ProjectsGrid({
  projects,
  profileUrl,
}: {
  projects: PinnedRepo[];
  profileUrl: string;
}) {
  const { t } = useLang();

  return (
    <section id="projects" className="py-28 px-6" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14">
          <p className="section-label mb-2" style={{ color: "var(--t-accent)" }}>{"// 02"}</p>
          <h2 id="projects-heading" className="font-mono text-2xl font-bold sm:text-3xl">
            {t("Проекты", "Projects")}
          </h2>
          <p className="mt-3 font-sans text-sm max-w-md" style={{ color: "var(--t-fg-dim)" }}>
            {t(
              "Закреплённые репозитории с GitHub — синхронизируются автоматически.",
              "Repositories pinned on GitHub — synced automatically."
            )}
          </p>
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs hover:underline underline-offset-2 transition-colors"
            style={{ color: "var(--t-accent)" }}
          >
            {t("Все репозитории", "All repositories")}
            <ExternalLink className="size-3" />
          </a>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
