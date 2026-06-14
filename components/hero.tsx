"use client"

import { ArrowRight, Mail } from "lucide-react"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-start justify-center px-6 pt-24 pb-16 max-w-6xl mx-auto"
      aria-label="Главный экран"
    >
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(220,215,186,1) 1px, transparent 1px), linear-gradient(90deg, rgba(220,215,186,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      {/* Prompt line */}
      <p className="font-mono text-sm text-[#76946A] mb-6 animate-fade-in-up opacity-0">
        <span className="text-muted-foreground">~/portfolio</span> $
      </p>

      {/* Main heading */}
      <h1 className="font-mono text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl animate-fade-in-up opacity-0 animate-delay-100 text-balance">
        Привет, я{" "}
        <span className="text-[#957FB8]">Кирилл</span>{" "}
        <span className="text-[#957FB8]">(Shayden)</span>
        <span className="cursor-blink text-[#7E9CD8]" aria-hidden="true">▌</span>
      </h1>

      {/* Subtitle terminal line */}
      <div className="mt-5 animate-fade-in-up opacity-0 animate-delay-200">
        <p className="font-mono text-lg text-[#7E9CD8] sm:text-xl">
          &gt; Python Backend Developer
        </p>
      </div>

      {/* Bio */}
      <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-muted-foreground sm:text-lg animate-fade-in-up opacity-0 animate-delay-300">
        Проектирую быстрые асинхронные API, оптимизирую базы данных, настраиваю безопасные
        сетевые туннели и пишу чистый, масштабируемый код.{" "}
        <span className="text-foreground">Открыт к фриланс-задачам и интересным проектам.</span>
      </p>

      {/* CTA buttons */}
      <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up opacity-0 animate-delay-400">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-md bg-[#76946A] px-5 py-2.5 font-mono text-sm font-semibold text-[#1F1F28] transition-all hover:bg-[#76946A]/85 hover:scale-[1.03] active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#76946A]"
        >
          Посмотреть проекты
          <ArrowRight className="size-4" />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-md border border-[#7E9CD8] px-5 py-2.5 font-mono text-sm font-semibold text-[#7E9CD8] transition-all hover:bg-[#7E9CD8]/10 hover:scale-[1.03] active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#7E9CD8]"
        >
          Связаться
          <Mail className="size-4" />
        </a>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-6 hidden md:flex items-center gap-2 animate-fade-in-up opacity-0 animate-delay-500">
        <div className="flex flex-col gap-1" aria-hidden="true">
          <span className="block h-px w-12 bg-border" />
        </div>
        <span className="font-mono text-xs text-muted-foreground">scroll down</span>
      </div>
    </section>
  )
}
