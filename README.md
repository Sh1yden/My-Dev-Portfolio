# My-Dev-Portfolio

Персональный portfolio-сайт Python Backend Developer'а — Кирилл (Shayden).  
Тёмная тема в стиле [Kanagawa](https://github.com/rebelot/kanagawa.nvim), шрифт JetBrains Mono, GitHub-style карточки проектов.

---

## Стек технологий

| Слой | Технология |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| UI-библиотека | [shadcn/ui](https://ui.shadcn.com) + [Base UI](https://base-ui.com) |
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
