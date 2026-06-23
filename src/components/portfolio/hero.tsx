"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { useLang } from "./providers";

const PHRASES_RU = [
  "Привет, я Кирилл",
  "Python Backend Developer",
  "Фанат асинхронности",
  "Люблю чистый код",
  "Telegram-бот мастер",
  "FastAPI энтузиаст",
];

const PHRASES_EN = [
  "Hi, I'm Kirill",
  "Python Backend Developer",
  "Async enthusiast",
  "Clean code lover",
  "Telegram bot craftsman",
  "FastAPI enthusiast",
];

const TYPING_SPEED = 75;
const DELETING_SPEED = 45;
const PAUSE_AFTER_TYPE = 2200;
const PAUSE_AFTER_DELETE = 400;

type Phase = "typing" | "pausing" | "deleting" | "waiting";

export function Hero() {
  const { t, lang } = useLang();
  const mouseGlowRef = useRef<HTMLDivElement>(null);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<Phase>("typing");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const phaseStart = useRef(Date.now());
  const [progress, setProgress] = useState(0);

  const phrases = lang === "RU" ? PHRASES_RU : PHRASES_EN;

  // Typewriter
  useEffect(() => {
    setDisplayed("");
    setPhase("typing");
    setPhraseIdx(0);
    setCharIdx(0);
    phaseStart.current = Date.now();
  }, [lang]);

  useEffect(() => {
    let rafId: number;
    const loop = () => {
      const now = Date.now();
      const elapsed = now - phaseStart.current;

      if (phase === "typing") {
        const chars = Math.floor(elapsed / TYPING_SPEED);
        const phrase = phrases[phraseIdx];
        const target = Math.min(chars, phrase.length);
        if (target < phrase.length) {
          setDisplayed(phrase.slice(0, target + 1));
          setCharIdx(target + 1);
          rafId = requestAnimationFrame(loop);
        } else {
          setDisplayed(phrase);
          setPhase("pausing");
          phaseStart.current = now;
          rafId = requestAnimationFrame(loop);
        }
      } else if (phase === "pausing") {
        if (elapsed >= PAUSE_AFTER_TYPE) {
          setPhase("deleting");
          phaseStart.current = now;
        }
        rafId = requestAnimationFrame(loop);
      } else if (phase === "deleting") {
        const deleted = Math.floor(elapsed / DELETING_SPEED);
        if (deleted < charIdx) {
          setDisplayed(phrases[phraseIdx].slice(0, charIdx - deleted - 1));
          rafId = requestAnimationFrame(loop);
        } else {
          setDisplayed("");
          setPhraseIdx((i) => (i + 1) % phrases.length);
          setCharIdx(0);
          setPhase("waiting");
          phaseStart.current = now;
          rafId = requestAnimationFrame(loop);
        }
      } else if (phase === "waiting") {
        if (elapsed >= PAUSE_AFTER_DELETE) {
          setPhase("typing");
          phaseStart.current = now;
        }
        rafId = requestAnimationFrame(loop);
      }
    };
    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, [phase, phraseIdx, charIdx, phrases]);

  // Mouse glow
  useEffect(() => {
    const el = mouseGlowRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      el.style.left = e.clientX + "px";
      el.style.top = e.clientY + "px";
      el.style.opacity = "1";
    };
    const onLeave = () => { el.style.opacity = "0"; };
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  // Scroll progress
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="progress-bar" style={{ width: `${progress}%` }} />
      <div ref={mouseGlowRef} className="mouse-glow" />

      <section id="hero" className="relative flex min-h-screen flex-col items-start justify-center px-6 pt-24 pb-16 max-w-6xl mx-auto">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.025] bg-grid" aria-hidden="true" />

        {/* Orbs */}
        <div className="orb animate-drift" style={{ width: 400, height: 400, top: "5%", right: "10%", background: "var(--k-wave2)" }} aria-hidden="true" />
        <div className="orb animate-drift" style={{ width: 300, height: 300, bottom: "15%", left: "5%", background: "var(--k-purple)", animationDelay: "7s" }} aria-hidden="true" />
        <div className="orb animate-drift" style={{ width: 250, height: 250, top: "40%", right: "30%", background: "var(--k-green)", animationDelay: "12s" }} aria-hidden="true" />

        {/* Prompt */}
        <p className="font-mono text-sm mb-6 animate-fade-in-up opacity-0">
          <span style={{ color: "var(--t-fg-faint)" }}>~/portfolio</span>{" "}
          <span style={{ color: "var(--t-prompt)" }}>$</span>
        </p>

        {/* Typewriter heading */}
        <h1 className="font-mono text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl animate-fade-in-up opacity-0 delay-100 text-balance min-h-[1.3em]">
          <span style={{ color: "var(--t-name)" }}>{displayed}</span>
          <span className="cursor-blink" style={{ color: "var(--t-accent)" }} aria-hidden="true">▌</span>
        </h1>

        {/* Subtitle */}
        <div className="mt-5 animate-fade-in-up opacity-0 delay-200">
          <p className="font-mono text-lg sm:text-xl">
            <span style={{ color: "var(--t-prompt)" }}>&gt;</span>{" "}
            <span style={{ color: "var(--t-accent)" }}>Python Backend Developer</span>
          </p>
        </div>

        {/* Bio */}
        <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed sm:text-lg animate-fade-in-up opacity-0 delay-300" style={{ color: "var(--t-fg-dim)" }}>
          {t(
            "Проектирую быстрые асинхронные API и телеграм-ботов. Пишу чистый, масштабируемый код. ",
            "Building fast async APIs and Telegram bots. Writing clean, scalable code. "
          )}
          <span style={{ color: "var(--t-fg)" }}>
            {t("Открыт к фриланс-задачам и интересным проектам.", "Open for freelance tasks and interesting projects.")}
          </span>
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up opacity-0 delay-400">
          <a href="#projects" className="glass-btn inline-flex items-center gap-2 px-5 py-2.5 font-mono text-sm font-semibold">
            {t("Посмотреть проекты", "View projects")}
            <ArrowRight className="size-4" />
          </a>
          <a href="#contact" className="glass-btn-outline inline-flex items-center gap-2 px-5 py-2.5 font-mono text-sm font-semibold">
            {t("Связаться", "Contact")}
            <Mail className="size-4" />
          </a>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-6 hidden md:flex items-center gap-3 animate-fade-in opacity-0 delay-600">
          <div className="flex flex-col gap-1.5" aria-hidden="true">
            <span className="block h-px w-10" style={{ background: "var(--t-border)" }} />
            <span className="block h-px w-6" style={{ background: "var(--t-border-subtle)" }} />
          </div>
          <span className="font-mono text-xs" style={{ color: "var(--t-fg-faint)" }}>
            {t("Пролистните вниз", "Scroll down")}
          </span>
        </div>
      </section>
    </>
  );
}