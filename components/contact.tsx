import { GitFork, Mail, ExternalLink, Briefcase } from "lucide-react"

type SocialLink = {
  label: string
  handle: string
  href: string
  icon: React.ElementType
  color: string
}

const socials: SocialLink[] = [
  {
    label: "Telegram",
    handle: "@shayden",
    href: "https://t.me/shayden",
    icon: Mail,
    color: "#7E9CD8",
  },
  {
    label: "GitHub",
    handle: "github.com/shayden",
    href: "https://github.com",
    icon: GitFork,
    color: "#DCD7BA",
  },
  {
    label: "Kwork",
    handle: "kwork.ru/shayden",
    href: "https://kwork.ru",
    icon: Briefcase,
    color: "#76946A",
  },
  {
    label: "Profi.ru",
    handle: "profi.ru/shayden",
    href: "https://profi.ru",
    icon: ExternalLink,
    color: "#FFA066",
  },
]

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section label */}
        <p className="font-mono text-xs text-[#FFA066] mb-2">// 03</p>

        {/* CTA heading */}
        <h2
          id="contact-heading"
          className="font-mono text-2xl font-bold text-foreground sm:text-3xl mb-4 text-balance"
        >
          Построим что-то{" "}
          <span className="text-[#76946A]">эффективное</span> вместе
        </h2>
        <p className="font-sans text-base text-muted-foreground max-w-lg leading-relaxed mb-12">
          Открыт к работе. Пишите — отвечаю быстро.
        </p>

        {/* Social links */}
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {socials.map((s) => {
            const Icon = s.icon
            return (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-all duration-200 hover:scale-[1.02] hover:border-border/60 hover:shadow-md"
                >
                  <div
                    className="flex size-9 flex-shrink-0 items-center justify-center rounded-md transition-colors"
                    style={{ backgroundColor: `${s.color}15` }}
                    aria-hidden="true"
                  >
                    <Icon
                      className="size-4 transition-transform group-hover:scale-110"
                      style={{ color: s.color }}
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-xs font-semibold text-foreground">
                      {s.label}
                    </p>
                    <p className="font-mono text-xs text-muted-foreground truncate">
                      {s.handle}
                    </p>
                  </div>
                </a>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl mt-24 pt-8 border-t border-border flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-muted-foreground">
          <span className="text-[#FFA066]">&gt; shayden.ru</span>{" "}
          &mdash; Kirill (Shayden) &copy; {new Date().getFullYear()}
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          Built with{" "}
          <span className="text-[#7E9CD8]">FastAPI</span>{" "}
          in mind,{" "}
          <span className="text-[#76946A]">Next.js</span>{" "}
          in practice.
        </p>
      </footer>
    </section>
  )
}
