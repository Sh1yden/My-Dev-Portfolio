"use client"

import { MoreHorizontal } from "lucide-react"

type Project = {
  title: string
  description: string
  language: string
  languageColor: string
  stars?: number
  githubUrl: string
}

const projects: Project[] = [
  {
    title: "SkyNode",
    description:
      "SkyNode — твой персональный погодный хаб. Telegram-бот с агрегацией данных из нескольких источников (OpenMeteo, WeatherAPI, VisualCrossing, Яндекс.Погода), вебхуки через Tuna туннели, кэширование на Redis и интернационализация через Fluentogram.",
    language: "Python",
    languageColor: "#3572A5",
    githubUrl: "https://github.com",
  },
  {
    title: "LinkCutter",
    description:
      "Быстрый и современный сервис для сокращения URL-адресов. Наподобие Bitly. Проект построен на базе асинхронного стека Python, обеспечивая высокую производительность и лёгкость развёртывания. Тестовое задание на позицию junior backend от Авито.",
    language: "Python",
    languageColor: "#3572A5",
    githubUrl: "https://github.com",
  },
  {
    title: "PyPyQt6PostgreSQLApp",
    description:
      "Школьное приложение на ПК. / A school application on a PC. Сделано на Python, PyQt 6, PostgreSQL. Несколько уровней доступа — что-то вроде электронного журнала.",
    language: "Python",
    languageColor: "#3572A5",
    githubUrl: "https://github.com",
  },
  {
    title: "Avito-Parser",
    description:
      "Авито парсер для любых объявлений. / Avito is a parser for any ads. Можно добавлять любую страницу с объявлениями. Результат сохраняется в ParserOutput.txt. Страница сохраняется один раз, чтобы не получить блокировку.",
    language: "HTML",
    languageColor: "#e34c26",
    stars: 1,
    githubUrl: "https://github.com",
  },
]

function RepoIcon() {
  return (
    <svg
      aria-hidden="true"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      className="text-muted-foreground flex-shrink-0"
      fill="currentColor"
    >
      <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg
      aria-hidden="true"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      className="text-muted-foreground"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 11.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
    </svg>
  )
}

export function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-14">
          <p className="font-mono text-xs text-[#7E9CD8] mb-2">// 02</p>
          <h2
            id="projects-heading"
            className="font-mono text-2xl font-bold text-foreground sm:text-3xl"
          >
            Проекты
          </h2>
          <p className="mt-3 font-sans text-sm text-muted-foreground max-w-md">
            Избранные работы. От Telegram-ботов до веб-сервисов и desktop-приложений.
          </p>
        </div>

        {/* GitHub-style project grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col rounded-md border border-border bg-card p-4 transition-all duration-200 hover:border-border/60 hover:shadow-md"
            >
              {/* Top row: icon + title + badge + dots */}
              <div className="flex items-center gap-2 mb-3">
                <RepoIcon />
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm font-semibold text-[#7E9CD8] hover:underline truncate"
                >
                  {project.title}
                </a>
                <span className="ml-1 flex-shrink-0 rounded-full border border-border px-2 py-0.5 font-sans text-[10px] text-muted-foreground">
                  Public
                </span>
                <button
                  type="button"
                  className="ml-auto text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
                  aria-label="Дополнительные действия"
                >
                  <MoreHorizontal className="size-4" />
                </button>
              </div>

              {/* Description */}
              <p className="font-sans text-xs leading-relaxed text-muted-foreground flex-1 mb-4">
                {project.description}
              </p>

              {/* Bottom row: language dot + stars */}
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <span
                    className="size-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: project.languageColor }}
                    aria-hidden="true"
                  />
                  <span className="font-sans text-xs text-muted-foreground">
                    {project.language}
                  </span>
                </span>
                {project.stars !== undefined && (
                  <span className="flex items-center gap-1">
                    <StarIcon />
                    <span className="font-sans text-xs text-muted-foreground">
                      {project.stars}
                    </span>
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
