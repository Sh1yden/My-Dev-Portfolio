"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";

/* ─── Theme ─── */
type Theme = "dark" | "light";

const ThemeCtx = createContext<{
  theme: Theme;
  toggle: () => void;
}>({ theme: "dark", toggle: () => {} });

export function useTheme() {
  return useContext(ThemeCtx);
}

/* ─── Language ─── */
type Lang = "RU" | "EN";

const LangCtx = createContext<{
  lang: Lang;
  toggle: () => void;
  t: (ru: string, en: string) => string;
}>({
  lang: "RU",
  toggle: () => {},
  t: (ru) => ru,
});

export function useLang() {
  return useContext(LangCtx);
}

/* ─── Provider ─── */
export function Providers({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [lang, setLang] = useState<Lang>("RU");
  const [mounted, setMounted] = useState(false);

  // On mount — read saved prefs
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const savedLang = localStorage.getItem("lang") as Lang | null;
    if (savedTheme) setTheme(savedTheme);
    if (savedLang) setLang(savedLang);
    setMounted(true);
  }, []);

  // Sync theme class on <html>
  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(theme);
    root.style.colorScheme = theme;
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  // Sync lang
  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = lang === "RU" ? "ru" : "en";
    localStorage.setItem("lang", lang);
  }, [lang, mounted]);

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }, []);

  const toggleLang = useCallback(() => {
    setLang((l) => (l === "RU" ? "EN" : "RU"));
  }, []);

  const t = useCallback(
    (ru: string, en: string) => (lang === "RU" ? ru : en),
    [lang]
  );

  // Prevent flash of wrong theme
  if (!mounted) {
    return (
      <ThemeCtx.Provider value={{ theme: "dark", toggle: toggleTheme }}>
        <LangCtx.Provider value={{ lang: "RU", toggle: toggleLang, t }}>
          {children}
        </LangCtx.Provider>
      </ThemeCtx.Provider>
    );
  }

  return (
    <ThemeCtx.Provider value={{ theme, toggle: toggleTheme }}>
      <LangCtx.Provider value={{ lang, toggle: toggleLang, t }}>
        {children}
      </LangCtx.Provider>
    </ThemeCtx.Provider>
  );
}