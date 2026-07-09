# Деплой ПЛЕНКИН

## Автоматический деплой через GitHub Actions

При пуше в ветку `main` GitHub Actions автоматически:
1. Подключается к серверу по SSH
2. Выполняет `git pull`
3. Устанавливает зависимости (`pnpm install`)
4. Собирает проект (`pnpm build`)
5. Перезапускает приложение через PM2

### Необходимые GitHub Secrets

В репозитории → Settings → Secrets and variables → Actions:

| Secret | Значение |
|--------|----------|
| `SSH_PRIVATE_KEY` | Приватный SSH-ключ для доступа к серверу |
| `SERVER_IP` | `80.93.52.144` |
| `SERVER_USER` | `root` |
| `SITE_URL` | `https://www.plenkinaokna.ru` |

### Переменные окружения на сервере

Файл `/var/www/plenkin/.env.local` на сервере:

```env
NEXT_PUBLIC_SITE_URL=https://www.plenkinaokna.ru
NEXT_PUBLIC_PHONE=+7 985 780 13 75
NEXT_PUBLIC_EMAIL=plenkininfo@yandex.ru
NEXT_PUBLIC_YANDEX_METRIKA_ID=
EMAIL_SERVER_HOST=smtp.yandex.ru
EMAIL_SERVER_PORT=465
EMAIL_SERVER_USER=plenkininfo@yandex.ru
EMAIL_SERVER_PASSWORD=<пароль приложения Яндекс.Почты>
EMAIL_FROM=plenkininfo@yandex.ru
EMAIL_TO=plenkininfo@yandex.ru
LEADS_API_TOKEN=<случайный токен для защиты API>
```

> **Важно:** Пароль приложения Яндекс и `LEADS_API_TOKEN` хранятся **только** в `.env.local` на сервере. Они не коммитятся в репозиторий.

## Ручная настройка сервера (первичная)

### 1. Клонировать репозиторий

```bash
cd /var/www
git clone https://github.com/Romlya/Plenkin.git plenkin
cd plenkin
```

### 2. Установить pnpm и PM2 (если нет)

```bash
npm install -g pnpm pm2
```

### 3. Создать .env.local

```bash
cp .env.example .env.local
nano .env.local
# Заполнить значения (см. таблицу выше)
```

### 4. Установить зависимости и собрать

```bash
pnpm install
pnpm build
```

### 5. Запустить через PM2

```bash
pm2 start "pnpm start" --name plenkin
pm2 save
pm2 startup
```

### 6. Nginx (reverse proxy)

```nginx
# /etc/nginx/sites-available/plenkinaokna.ru

# Редирект с plenkinaokna.ru → www.plenkinaokna.ru
server {
    listen 80;
    server_name plenkinaokna.ru;
    return 301 https://www.plenkinaokna.ru$request_uri;
}

# Основной домен www.plenkinaokna.ru
server {
    listen 80;
    server_name www.plenkinaokna.ru;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/plenkinaokna.ru /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 7. SSL (Let's Encrypt)

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d plenkinaokna.ru -d www.plenkinaokna.ru
```

## Проверка после деплоя

- Главная: https://www.plenkinaokna.ru
- sitemap: https://www.plenkinaokna.ru/sitemap.xml
- robots: https://www.plenkinaokna.ru/robots.txt
- Яндекс верификация: https://www.plenkinaokna.ru/yandex_bfb86aacf5c761ad.html
- API заявки: `POST https://www.plenkinaokna.ru/api/leads`
- Список заявок: `GET https://www.plenkinaokna.ru/api/leads` (требует заголовок `Authorization: Bearer <LEADS_API_TOKEN>`)
