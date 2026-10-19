import type { PinnedRepo } from "@/lib/github";

/**
 * Snapshot of the repositories pinned on github.com/Sh1yden.
 * Used only when GITHUB_TOKEN is missing or the GitHub API is unreachable.
 * Live data is fetched at runtime and revalidated every hour (ISR).
 */
export const fallbackProjects: PinnedRepo[] = [
  {
    name: "SkyNode",
    description: "🌩 SkyNode — твой персональный погодный хаб.",
    url: "https://github.com/Sh1yden/SkyNode",
    stars: 0,
    language: "Python",
    languageColor: "#3572A5",
    archived: false,
  },
  {
    name: "LinkCutter",
    description:
      "✂️🔗 Быстрый и современный сервис для сокращения URL-адресов. Наподобие Bitly. Проект построен на базе асинхронного стека Python, обеспечивая высокую производительность и легкость развертывания. 🌐 Вживую: https://linkcutter.shayden.ru/",
    url: "https://github.com/Sh1yden/LinkCutter",
    stars: 0,
    language: "Python",
    languageColor: "#3572A5",
    archived: false,
  },
  {
    name: "SyncNode-Backend",
    description: "SyncNode-Backend",
    url: "https://github.com/Sh1yden/SyncNode-Backend",
    stars: 0,
    language: "Python",
    languageColor: "#3572A5",
    archived: false,
  },
  {
    name: "ywallhaven",
    description:
      "🖼️🔍 Десктопное GUI-приложение для поиска, просмотра и скачивания обоев с Wallhaven. Построено на асинхронном стеке Python и Flet — без браузера и лишнего интерфейса, только нативное окно.",
    url: "https://github.com/Sh1yden/ywallhaven",
    stars: 1,
    language: "Python",
    languageColor: "#3572A5",
    archived: false,
  },
  {
    name: "Avito-Parser",
    description: "Авито парсер для любых объявлений. / Avito is a parser for any ads.",
    url: "https://github.com/Sh1yden/Avito-Parser",
    stars: 1,
    language: "HTML",
    languageColor: "#e34c26",
    archived: false,
  },
  {
    name: "Nodya",
    description: "Нодя)",
    url: "https://github.com/Sh1yden/Nodya",
    stars: 0,
    language: "Python",
    languageColor: "#3572A5",
    archived: false,
  },
];
