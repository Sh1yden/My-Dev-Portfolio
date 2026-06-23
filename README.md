# My-Dev-Portfolio

![icon](public/icon.svg)

> **Liquid Glass + Kanagawa** — персональное портфолио-сайт Python backend-разработчика. Темная и светлая темы, RU/EN, typewriter-эффект, glassmorphism. 🌐 Вживую: https://shayden.ru

## 🛠 Стек

| Слой      | Технология                  |
| --------- | --------------------------- |
| Framework | Next.js 16 (App Router)     |
| UI        | Tailwind CSS v4             |
| Иконки    | Lucide React                |
| Шрифты    | JetBrains Mono + Inter      |
| Язык      | TypeScript                  |
| Деплой    | Docker + собственный сервер |

## 🗄 Структура проекта

```
my-dev-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css        # Kanagawa Liquid Glass тема (dark + light)
│   │   ├── layout.tsx         # Метаданные, шрифты, Providers
│   │   └── page.tsx           # Сборка всех секций
│   │
│   ├── components/
│   │   ├── portfolio/
│   │   │   ├── providers.tsx  # Theme + Language контексты
│   │   │   ├── header.tsx     # Навигация, переключатели темы/языка
│   │   │   ├── hero.tsx       # Typewriter-эффект, mouse glow, orbs
│   │   │   ├── tech-stack.tsx # Карточки технологий (glass)
│   │   │   ├── projects.tsx   # GitHub-style карточки проектов
│   │   │   └── contact.tsx    # Контакты + футер
│   │   └── ui/                # UI-компоненты
│   │
│   └── hooks/                 # React hooks
│
├── public/                    # Статика (SVG-фавикон)
├── Dockerfile
├── docker-compose.yml
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── package.json
└── bun.lock
```

## 💻 Запуск локально

### Требования

- **Node.js** 20+
- **bun** (рекомендуется, но можно и pnpm/npm)

### Установка и запуск

```bash
# Клонировать
git clone https://github.com/Sh1yden/My-Dev-Portfolio.git
cd My-Dev-Portfolio

# Установить зависимости
bun install
# или: pnpm install
# или: npm install

# Запустить dev-сервер
bun dev
# или: pnpm dev
# или: npm run dev
```

Открыть: http://localhost:3000

### Сборка для продакшена

```bash
bun run build
bun start
```

## 🐳 Docker

```bash
# Собрать и запустить
docker compose up -d --build

# Остановить
docker compose down
```

> Контейнер ожидает внешнюю Docker-сеть `internet_bridge`.
> Создать: `docker network create internet_bridge`

## ✨ Фичи

- **Liquid Glass** — полупрозрачные карточки с backdrop-blur и внутренними тенями
- **Kanagawa** — тёмная и светлая палитры с переключением
- **Typewriter** — cycling-эффект с рандомными фразами (RU/EN)
- **RU / EN** — полный перевод контента, переключение в хедере
- **Mouse glow** — следование за курсором
- **Scroll reveal** — появление секций при скролле
- **Progress bar** — градиентный индикатор прокрутки

## 🗄 Архитектура

Статичный SPA без бэкенда и API.
Данные (проекты, стек, контакты) — TypeScript-объекты прямо в компонентах.