# ПЛЕНКИН — сайт компании по монтажу архитектурных плёнок

## Технологии
- Next.js 16 (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- React Hook Form + Zod

## Установка

```bash
pnpm install
```

## Запуск dev-сервера

```bash
pnpm dev
```

Открыть http://localhost:3000

> **Важно:** Из-за кириллицы в пути запускайте через junction:
> `mklink /J C:\Users\BOSS\Desktop\plenkin-build "C:\Users\BOSS\Desktop\сайт пленкин\plenkin"`
> `cd C:\Users\BOSS\Desktop\plenkin-build && pnpm dev`

## Сборка

```bash
pnpm build
pnpm start
```

## Настройка .env.local

```bash
cp .env.example .env.local
```

Заполнить:
- `EMAIL_SERVER_PASSWORD` — пароль приложения Yandex (https://passport.yandex.ru/profile/services)
- `NEXT_PUBLIC_YANDEX_METRIKA_ID` — номер счётчика Яндекс.Метрики

## Структура

```
src/
├── app/
│   ├── (public)/           # Публичные страницы
│   │   ├── services/       # 7 услуг + хаб
│   │   ├── portfolio/      # Портфолио с фильтрами
│   │   ├── calculator/     # 3-шаговый калькулятор
│   │   ├── certificates/   # Сертификаты ГОСТ
│   │   ├── blog/           # Блог + 8 статей
│   │   ├── faq/            # 17 вопросов
│   │   ├── contacts/       # Форма заявки
│   │   └── privacy/        # Политика конфиденциальности
│   ├── api/leads/          # API заявок (email через nodemailer)
│   ├── not-found.tsx       # Кастомная 404
│   ├── sitemap.ts          # sitemap.xml (25 URL)
│   └── robots.ts           # robots.txt
├── components/
│   ├── layout/             # Header, Footer, FloatingButtons, ScrollProgress, Breadcrumbs
│   ├── sections/           # Hero, Motion, ServiceItem
│   ├── seo/                # JsonLd, YandexMetrika
│   └── ui/                 # Button, Card, Input, Select, Textarea, Modal, Badge
└── lib/
    ├── theme.ts            # Цвета классов защиты
    └── utils.ts            # Утилиты (cn, formatPrice)

## Страницы (30 маршрутов)
- `/` — главная
- `/services` — каталог + 7 услуг
- `/portfolio` — портфолио
- `/calculator` — калькулятор
- `/certificates` — сертификаты
- `/blog` + 8 статей
- `/faq` — 17 вопросов
- `/contacts` — заявка
- `/privacy` — политика

## Контакты
- Телефон: +7 985 780 13 75
- Email: plenkininfo@yandex.ru
