import {
  Terminal,
  Database,
  Server,
  Wrench,
} from "lucide-react"

type Category = {
  icon: React.ElementType
  label: string
  color: string
  items: string[]
}

const categories: Category[] = [
  {
    icon: Terminal,
    label: "Languages",
    color: "#FFA066",
    items: ["Python", "SQL"],
  },
  {
    icon: Server,
    label: "Frameworks",
    color: "#7E9CD8",
    items: ["FastAPI", "Django", "SQLAlchemy", "aiogram"],
  },
  {
    icon: Database,
    label: "Databases",
    color: "#76946A",
    items: ["PostgreSQL", "SQLite", "SQLAlchemy", "DjangoORM", "asyncpg", "Redis"],
  },
  {
    icon: Wrench,
    label: "DevOps & Tools",
    color: "#FFA066",
    items: ["Linux / WSL 2", "Cloudflare Tunnels", "Docker", "Git"],
  },
]

export function TechStack() {
  return (
    <section
      id="stack"
      className="py-24 px-6"
      aria-labelledby="stack-heading"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-14">
          <p className="font-mono text-xs text-[#76946A] mb-2">// 01</p>
          <h2
            id="stack-heading"
            className="font-mono text-2xl font-bold text-foreground sm:text-3xl"
          >
            Стек технологий
          </h2>
          <p className="mt-3 font-sans text-sm text-muted-foreground max-w-md">
            Инструменты и технологии, которые я использую в работе каждый день.
          </p>
        </div>

        {/* Category cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <div
                key={cat.label}
                className="group rounded-lg border border-border bg-card p-5 transition-all duration-200 hover:scale-[1.02] hover:border-border/80 hover:shadow-lg"
                style={{ "--cat-color": cat.color } as React.CSSProperties}
              >
                {/* Card header */}
                <div className="mb-4 flex items-center gap-2">
                  <div
                    className="flex size-8 items-center justify-center rounded-md"
                    style={{ backgroundColor: `${cat.color}18` }}
                    aria-hidden="true"
                  >
                    <Icon
                      className="size-4"
                      style={{ color: cat.color }}
                    />
                  </div>
                  <span
                    className="font-mono text-xs font-semibold"
                    style={{ color: cat.color }}
                  >
                    {cat.label}
                  </span>
                </div>

                {/* Tech items */}
                <ul className="flex flex-col gap-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 font-mono text-sm text-foreground/80"
                    >
                      <span
                        className="size-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: cat.color }}
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
