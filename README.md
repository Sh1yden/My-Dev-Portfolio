# My-Dev-Portfolio

![icon](public/icon.svg)

> **Краткое описание:** Мой персональный портфолио-сайт Python backend-разработчика. Тёмная тема Kanagawa, шрифт JetBrains Mono, GitHub-style карточки проектов с автосинхронизацией закреплённых репозиториев. 🌐 Вживую: [Shayden.ru](https://shayden.ru).

## 🛠 Стек

| Слой      | Технология                    |
| --------- | ----------------------------- |
| Framework | Next.js 16 (App Router)       |
| UI        | shadcn/ui + Base UI           |
| Стили     | Tailwind CSS v4               |
| Иконки    | Lucide React                  |
| Шрифты    | JetBrains Mono + Inter        |
| Язык      | TypeScript                    |
| Данные    | GitHub GraphQL (pinned repos) |
| Деплой    | Docker + собственный сервер   |

## 🗄 Структура проекта

```
my-dev-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css        # Kanagawa-тема, CSS-переменные, анимации
│   │   ├── layout.tsx         # Метаданные, шрифты
│   │   └── page.tsx           # Сборка секций, ISR (revalidate = 3600)
│   │
│   ├── components/portfolio/
│   │   ├── header.tsx         # Навигация, переключатель RU/EN, мобильное меню
│   │   ├── hero.tsx           # Главный экран с анимациями
│   │   ├── tech-stack.tsx     # Сетка технологий
│   │   ├── projects.tsx       # Server-компонент: получает pinned-репозитории
│   │   ├── projects-grid.tsx  # Карточки проектов (клиент: анимации, RU/EN)
│   │   ├── contact.tsx        # Контакты
│   │   ├── footer.tsx         # Подвал: навигация, соцсети, «наверх»
│   │   ├── icons.tsx          # Иконки соцсетей (общие)
│   │   └── providers.tsx      # Контекст темы и языка
│   │
│   ├── data/
│   │   └── projects-fallback.ts  # Аварийный снапшот закреплённых репо
│   │
│   └── lib/
│       └── github.ts          # GitHub GraphQL: закреплённые репозитории
│
├── public/                    # Статика (SVG-фавикон)
├── .env.example               # Шаблон переменных окружения
├── Dockerfile
└── docker-compose.yml
```

## 💻 Запуск локально

### 📖 Требования

- **Node.js** 20+
- **pnpm** (рекомендуется)

```bash
npm install -g pnpm
```

### Установка и запуск

```bash
# Клонировать репозиторий
git clone https://github.com/Sh1yden/My-Dev-Portfolio.git
cd My-Dev-Portfolio

# Установить зависимости
pnpm install

# (опционально) переменные окружения для синхронизации с GitHub
cp .env.example .env.local
# → вписать GITHUB_TOKEN, см. раздел «Синхронизация проектов»

# Запустить dev-сервер
pnpm dev
```

Открыть: [http://localhost:3000](http://localhost:3000/)

### Сборка для продакшена

```bash
pnpm build
pnpm start
```

## 🐳 Docker

```bash
# Собрать и запустить
docker compose up -d --build

# Остановить
docker compose down
```

> Контейнер ожидает внешнюю Docker-сеть `internet_bridge`.
> Создать её можно командой: `docker network create internet_bridge`

> Для сборки с живыми данными GitHub положите `.env` с `GITHUB_TOKEN`
> рядом с `docker-compose.yml`: Next.js прочитает его при сборке образа,
> а Compose — при запуске контейнера. Из готового образа файл удаляется,
> в контейнере токен живёт только как переменная окружения. Обратите
> внимание: значение остаётся в кэше builder-слоёв Docker на машине
> сборки, поэтому токен должен быть без прав (public read-only).
> Без токена сайт соберётся со снапшотом из `projects-fallback.ts`
> и обновится при ISR-регенерации.

## 🗄 Архитектура

Статически сгенерированная страница (App Router) с часовой ISR-регенерацией.
Стек, контакты и подвал — TypeScript-объекты в компонентах; проекты
подтягиваются с GitHub при регенерации страницы.

```
GitHub GraphQL (pinnedItems, read-only токен)
        │
        ▼
src/lib/github.ts   — getPinnedRepos() + fallback при сбое/без токена
        │
        ▼
src/app/page.tsx    — revalidate = 3600 (ISR)
        │
        ▼
Projects (server) → ProjectsGrid (client: RU/EN, анимации)
```

## 🔁 Синхронизация проектов с GitHub

Секция «Проекты» показывает репозитории, **закреплённые** в профиле
[github.com/Sh1yden](https://github.com/Sh1yden) (блок «Pinned»).

- Порядок карточек = порядок закрепа. Закрепили репозиторий — он появится
  на сайте (в течение часа), открепили — исчезнет.
- Описание, язык, цвет языка и звёзды берутся как есть из GitHub.
  Чтобы поправить текст карточки — отредактируйте description репозитория.
- Данные обновляются при ISR-регенерации раз в час. Если GitHub недоступен
  или токен не задан — используется снапшот `src/data/projects-fallback.ts`
  (последний успешный ответ остаётся в памяти процесса до следующей попытки).

Токену не нужны никакие права — читаются только публичные данные.
Подойдёт **classic PAT вообще без скобов**
([создать](https://github.com/settings/tokens/new)).

| Где     | Файл                              | Кто читает                                |
| ------- | --------------------------------- | ----------------------------------------- |
| Локально | `.env.local` (или `.env`)         | Next.js при `pnpm dev` / `pnpm build`     |
| Сервер  | `.env` рядом с `docker-compose.yml` | Compose (подстановка) + сборка образа |

```bash
GITHUB_TOKEN=ghp_...
GITHUB_USERNAME=Sh1yden   # опционально, это значение по умолчанию
```

## 💜 Вопросы, контакты / FAQ

Для вопросов и предложений создавайте Issues в репозитории или же пишите в телеграмм который указан в профиле.

PS Любой помощи или совету буду очень благодарен.
