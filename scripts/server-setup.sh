#!/bin/bash
set -e

echo "=== Настройка сервера для ПЛЕНКИН ==="

# 1. Проверка и установка pnpm
if ! command -v pnpm &> /dev/null; then
  echo "Установка pnpm..."
  npm install -g pnpm
fi

# 2. Проверка и установка PM2
if ! command -v pm2 &> /dev/null; then
  echo "Установка PM2..."
  npm install -g pm2
fi

# 3. Клонирование репозитория
if [ ! -d "/home/frrolamai/Plenkin" ]; then
  echo "Клонирование репозитория..."
  cd /home/frrolamai
  git clone https://github.com/Romlya/Plenkin.git
else
  echo "Репозиторий уже существует, обновляем..."
  cd /home/frrolamai/Plenkin
  git pull origin main
fi

cd /home/frrolamai/Plenkin

# 4. Установка зависимостей
echo "Установка зависимостей..."
pnpm install --frozen-lockfile

# 5. Создание .env.local если нет
if [ ! -f ".env.local" ]; then
  echo "Создание .env.local..."
  cp .env.example .env.local
  echo ""
  echo "!!! ВАЖНО: Отредактируйте .env.local перед сборкой !!!"
  echo "  nano /home/frrolamai/Plenkin/.env.local"
  echo "  Заполните EMAIL_SERVER_PASSWORD и LEADS_API_TOKEN"
  echo ""
  exit 1
fi

# 6. Сборка
echo "Сборка проекта..."
pnpm build

# 7. Запуск через PM2
echo "Настройка PM2..."
pm2 delete plenkin 2>/dev/null || true
pm2 start "pnpm start" --name plenkin
pm2 save
pm2 startup

echo ""
echo "=== Настройка приложения завершена ==="
echo "Приложение запущено на http://localhost:3000"
echo ""
echo "Далее: настройте Nginx (см. DEPLOY.md)"
