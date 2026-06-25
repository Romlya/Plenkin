# Деплой ПЛЕНКИН

## Вариант 1: Vercel (проще всего)

1. Зайдите на https://vercel.com
2. Import Git Repository → выберите `plenkin`
3. Framework Preset: Next.js
4. Environment Variables:
   - `EMAIL_SERVER_USER` = `plenkininfo@yandex.ru`
   - `EMAIL_SERVER_PASSWORD` = `zxdmnmqalyucokjj`
   - `EMAIL_SERVER_HOST` = `smtp.yandex.ru`
   - `EMAIL_SERVER_PORT` = `465`
   - `EMAIL_FROM` = `plenkininfo@yandex.ru`
   - `EMAIL_TO` = `plenkininfo@yandex.ru`
5. Deploy

## Вариант 2: Свой сервер (Ubuntu/Debian)

### Установка

```bash
# 1. Установить Node.js 22
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs

# 2. Установить pnpm
npm install -g pnpm

# 3. Клонировать репозиторий
git clone https://github.com/ВАШ_ЛОГИН/plenkin.git
cd plenkin

# 4. Установить зависимости
pnpm install

# 5. Создать .env.local
cp .env.example .env.local
nano .env.local
# Заполнить: EMAIL_SERVER_PASSWORD=zxdmnmqalyucokjj

# 6. Собрать
pnpm build

# 7. Запустить (тест)
pnpm start
```

### PM2 (продакшн)

```bash
npm install -g pm2
pm2 start "pnpm start" --name plenkin
pm2 save
pm2 startup
```

### Nginx (reverse proxy)

```nginx
server {
    listen 80;
    server_name plenkin.ru www.plenkin.ru;

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

### SSL (Let's Encrypt)

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d plenkin.ru -d www.plenkin.ru
```

## Переменные окружения

| Переменная | Значение |
|-----------|----------|
| `EMAIL_SERVER_HOST` | `smtp.yandex.ru` |
| `EMAIL_SERVER_PORT` | `465` |
| `EMAIL_SERVER_USER` | `plenkininfo@yandex.ru` |
| `EMAIL_SERVER_PASSWORD` | `zxdmnmqalyucokjj` |
| `EMAIL_FROM` | `plenkininfo@yandex.ru` |
| `EMAIL_TO` | `plenkininfo@yandex.ru` |
| `NEXT_PUBLIC_YANDEX_METRIKA_ID` | (номер счётчика, если есть) |

## Проверка после деплоя

- Главная: https://plenkin.ru
- sitemap: https://plenkin.ru/sitemap.xml
- robots: https://plenkin.ru/robots.txt
- API заявки: `POST https://plenkin.ru/api/leads`
- Список заявок: `GET https://plenkin.ru/api/leads`
