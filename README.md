# My-Dev-Portfolio

Мой персональный portfolio-сайт.
Тёмная тема в стиле [Kanagawa](https://github.com/rebelot/kanagawa.nvim), шрифт JetBrains Mono, GitHub-style карточки проектов.

---

## Стек технологий

| Слой          | Технология                                                          |
| ------------- | ------------------------------------------------------------------- |
| Framework     | [Next.js 16](https://nextjs.org) (App Router)                       |
| UI-библиотека | [shadcn/ui](https://ui.shadcn.com) + [Base UI](https://base-ui.com) |
| Стили         | [Tailwind CSS v4](https://tailwindcss.com)                          |
| Иконки        | [Lucide React](https://lucide.dev)                                  |
| Шрифты        | JetBrains Mono + Inter (Google Fonts)                               |
| Язык          | TypeScript                                                          |
| Деплой        | Собственный сайт [Shayden](https://shayden.ru)                      |

---

## Архитектура

```
Однострочное SPA (Single Page Application)
  └── Next.js App Router
        ├── Server Components — layout, page (SEO, metadata)
        └── Client Components — header (смена языка, мобильное меню)
```

Сайт полностью статичен — никакого бэкенда, баз данных и API-запросов.
Все данные (проекты, стек, контакты) хранятся прямо в компонентах в виде TypeScript-объектов.
Тема — Kanagawa Dark, реализована через CSS-переменные в `globals.css`.

---

## Структура проекта

```
my-dev-portfolio/
├── app/
│   ├── globals.css        # Kanagawa-тема, CSS-переменные, анимации
│   ├── layout.tsx         # Метаданные, шрифты, viewport
│   └── page.tsx           # Сборка всех секций
│
├── components/
│   ├── header.tsx         # Навигация, смена языка RU/EN, мобильное меню
│   ├── hero.tsx           # Приветственная секция, мигающий курсор
│   ├── tech-stack.tsx     # Сетка технологий (Languages, Frameworks, DB, DevOps)
│   ├── projects.tsx       # GitHub-style карточки проектов
│   ├── contact.tsx        # Карточки соцсетей, подвал
│   └── ui/
│       └── button.tsx     # shadcn Button
│
├── public/                # Статика (иконки favicon)
├── next.config.mjs
├── tsconfig.json
└── package.json
```

---

## Запуск локально

### Требования

- [Node.js](https://nodejs.org) **18+**
- [pnpm](https://pnpm.io) (рекомендуется) или npm / yarn

```bash
# Установить pnpm глобально, если нет
npm install -g pnpm
```

### 1. Клонировать репозиторий

```bash
git clone https://github.com/Sh1yden/My-Dev-Portfolio.git
cd My-Dev-Portfolio
```

### 2. Установить зависимости

```bash
pnpm install
```

### 3. Запустить dev-сервер

```bash
pnpm dev
```

Открыть в браузере: [http://localhost:3000](http://localhost:3000)

### 4. Сборка для продакшена

```bash
pnpm build
pnpm start
```

### 5. Линтер

```bash
pnpm lint
```

---

## 💜 Вопросы, контакты

Для вопросов и предложений создавайте Issues в репозитории или же пишите в телеграмм который указан в профиле.

PS Любой помощи или совету буду очень благодарен.
