import { GitFork } from "lucide-react"

function IconTelegram({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 13.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.942z" />
    </svg>
  )
}

function IconVk({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.785 16.241s.288-.032.436-.194c.136-.148.132-.427.132-.427s-.02-1.304.587-1.496c.598-.19 1.365 1.26 2.178 1.817.615.42 1.082.328 1.082.328l2.172-.03s1.135-.07.597-1.006c-.044-.073-.314-.658-1.615-1.86-1.362-1.258-1.18-1.054.46-3.229.999-1.33 1.398-2.142 1.273-2.49-.12-.332-.855-.244-.855-.244l-2.443.015s-.181-.025-.315.055c-.132.078-.216.26-.216.26s-.387 1.028-.903 1.903c-1.088 1.848-1.52 1.946-1.698 1.832-.413-.267-.31-1.072-.31-1.644 0-1.787.271-2.53-.528-2.723-.265-.064-.46-.106-1.138-.113-.87-.009-1.606.003-2.022.207-.277.135-.49.437-.36.454.161.02.525.098.719.36.25.34.241 1.104.241 1.104s.144 2.105-.336 2.367c-.329.18-.781-.187-1.75-1.865-.497-.859-.873-1.81-.873-1.81s-.072-.176-.202-.27c-.157-.115-.376-.152-.376-.152l-2.322.015s-.349.01-.477.162c-.114.135-.009.414-.009.414s1.818 4.25 3.876 6.395c1.888 1.97 4.03 1.84 4.03 1.84h.972z" />
    </svg>
  )
}

function IconLinkedin({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

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
    icon: IconTelegram,
    color: "#7E9CD8",
  },
  {
    label: "VK",
    handle: "vk.com/shayden",
    href: "https://vk.com/shayden",
    icon: IconVk,
    color: "#5181B8",
  },
  {
    label: "GitHub",
    handle: "github.com/shayden",
    href: "https://github.com/shayden",
    icon: GitFork,
    color: "#DCD7BA",
  },
  {
    label: "LinkedIn",
    handle: "linkedin.com/in/shayden",
    href: "https://linkedin.com/in/shayden",
    icon: IconLinkedin,
    color: "#0A66C2",
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
          &mdash; Kirill (Shayden & Sh1yden) &copy; {new Date().getFullYear()}
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          TODO: написать что-то умное
        </p>
      </footer>
    </section>
  )
}
