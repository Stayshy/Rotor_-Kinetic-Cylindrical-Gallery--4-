#!/bin/bash

# Скрипт для запуска development версии в Docker

echo "🚀 Запуск Альбом Воспоминаний (Development)..."
echo ""

# Проверка наличия Docker
if ! command -v docker &> /dev/null; then
    echo "❌ Docker не установлен. Пожалуйста, установите Docker."
    exit 1
fi

# Проверка наличия Docker Compose
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose не установлен. Пожалуйста, установите Docker Compose."
    exit 1
fi

# Остановка предыдущих контейнеров
echo "🛑 Остановка предыдущих контейнеров..."
docker-compose -f docker-compose.dev.yml down 2>/dev/null

# Сборка и запуск
echo "🔨 Сборка образа..."
docker-compose -f docker-compose.dev.yml up --build

# Проверка статуса
if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Приложение успешно запущено!"
    echo "🌐 Откройте браузер: http://localhost:5173"
else
    echo ""
    echo "❌ Ошибка при запуске приложения"
    exit 1
fi
