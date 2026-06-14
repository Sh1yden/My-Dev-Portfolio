import { ExternalLink } from "lucide-react"

type Project = {
  title: string
  filename: string
  description: string
  tags: string[]
  githubUrl: string
  color: string
}

const projects: Project[] = [
  {
    title: "LinkCutter",
    filename: "link_cutter.py",
    description:
      "Высокопроизводительный асинхронный сервис сокращения ссылок. Спроектирован для работы под высокой нагрузкой с тонкой настройкой маршрутизации и минимальной задержкой.",
    tags: ["FastAPI", "asyncpg", "PostgreSQL", "Cloudflare"],
    githubUrl: "https://github.com",
    color: "#76946A",
  },
  {
    title: "Axis (SkyNode)",
    filename: "axis_skynode.py",
    description:
      "Система автоматизации и управления приватными сетями и VPN-туннелями. Автоматическая ротация, умная маршрутизация трафика и безопасные прокси.",
    tags: ["Python", "Networking", "Cloudflare", "asyncio"],
    githubUrl: "https://github.com",
    color: "#7E9CD8",
  },
  {
    title: "All-In-One Bot",
    filename: "aio_bot.py",
    description:
      "Высокомасштабируемый многофункциональный Telegram-бот на чистой архитектуре. Конечные автоматы, абсолютные импорты и enterprise-уровень поддерживаемости.",
    tags: ["aiogram", "Redis", "API integration"],
    githubUrl: "https://github.com",
    color: "#FFA066",
  },
]

function WindowDots() {
  return (
    <div className="flex items-center gap-1.5" aria-hidden="true">
      <span className="size-3 rounded-full bg-[#FF5F57]" />
      <span className="size-3 rounded-full bg-[#FEBC2E]" />
      <span className="size-3 rounded-full bg-[#28C840]" />
    </div>
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
            Избранные работы — от API-сервисов до сетевой инфраструктуры.
          </p>
        </div>

        {/* Project cards grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col rounded-lg border border-border bg-card overflow-hidden transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:border-border/60"
            >
              {/* Terminal title bar */}
              <div className="flex items-center justify-between border-b border-border bg-[#252531] px-4 py-3">
                <WindowDots />
                <span className="font-mono text-xs text-muted-foreground">
                  {project.filename}
                </span>
                <span className="font-mono text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                  .py
                </span>
              </div>

              {/* Card content */}
              <div className="flex flex-1 flex-col p-5">
                {/* Title */}
                <h3
                  className="font-mono text-base font-bold mb-3"
                  style={{ color: project.color }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm leading-relaxed text-muted-foreground flex-1 mb-5">
                  {project.description}
                </p>

                {/* Tags */}
                <ul className="flex flex-wrap gap-2 mb-5" aria-label="Технологии">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="font-mono text-xs px-2 py-0.5 rounded border"
                      style={{
                        color: project.color,
                        borderColor: `${project.color}40`,
                        backgroundColor: `${project.color}10`,
                      }}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors self-start group/link"
                  aria-label={`Открыть ${project.title} на GitHub`}
                >
                  <ExternalLink className="size-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  GitHub / Docs
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
