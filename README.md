# My-Dev-Portfolio

Персональный portfolio-сайт Python Backend Developer'а — Кирилл (Shayden).
Тёмная тема в стиле [Kanagawa](https://github.com/rebelot/kanagawa.nvim), шрифт JetBrains Mono, GitHub-style карточки проектов.

---

## Стек технологий

| Слой | Технология |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Стили | [Tailwind CSS v4](https://tailwindcss.com) |
| Иконки | [Lucide React](https://lucide.dev) |
| Шрифты | JetBrains Mono + Inter (Google Fonts) |
| Язык | TypeScript |
| Аналитика | Vercel Analytics |
| Деплой | [Vercel](https://vercel.com) |

---

## Архитектура

```
Однострочное SPA (Single Page Application)
  └── Next.js App Router
        ├── Server Components — layout, page (SEO, metadata)
        └── Client Components — header, hero, tech-stack, projects, contact
```

Сайт полностью статичен — никакого бэкенда, баз данных и API-запросов.
Все данные (проекты, стек, контакты) хранятся прямо в компонентах в виде TypeScript-объектов.
Тема — Kanagawa Dark + Light, реализована через CSS-переменные в `globals.css`.

---

## Структура проекта

```
my-dev-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css        # Kanagawa Liquid Glass тема (dark + light)
│   │   ├── layout.tsx         # Метаданные, шрифты, Providers
│   │   └── page.tsx           # Сборка всех секций
│   │
│   └── components/
│       └── portfolio/
│           ├── providers.tsx  # Theme + Language контексты
│           ├── header.tsx     # Навигация, переключатели темы/языка
│           ├── hero.tsx       # Typewriter-эффект, mouse glow, orbs
│           ├── tech-stack.tsx # Карточки технологий (glass)
│           ├── projects.tsx   # GitHub-style карточки проектов
│           └── contact.tsx    # Контакты + футер
│
├── public/                    # Статика (иконки favicon)
├── next.config.ts
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

## Деплой на Vercel

Самый простой способ — нажать кнопку:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Sh1yden/My-Dev-Portfolio)

Или через CLI:

```bash
npm i -g vercel
vercel
```

---

## 💜 Вопросы и контакты

Если есть вопросы по коду, хочешь предложить улучшение или просто написать — welcome:

| | |
|---|---|
| **Telegram** | [@shayden](https://t.me/shayden) |
| **VK** | [vk.com/shayden](https://vk.com/shayden) |
| **GitHub** | [github.com/Sh1yden](https://github.com/Sh1yden) |
| **LinkedIn** | [linkedin.com/in/shayden](https://linkedin.com/in/shayden) |