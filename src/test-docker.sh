#!/bin/bash

# Скрипт для тестирования Docker сборки

echo "🧪 Тестирование Docker сборки..."
echo ""

# Цвета для вывода
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Проверка Docker
echo -n "Проверка Docker... "
if command -v docker &> /dev/null; then
    echo -e "${GREEN}✓${NC}"
else
    echo -e "${RED}✗ Docker не найден${NC}"
    exit 1
fi

# Проверка Docker Compose
echo -n "Проверка Docker Compose... "
if command -v docker-compose &> /dev/null; then
    echo -e "${GREEN}✓${NC}"
else
    echo -e "${RED}✗ Docker Compose не найден${NC}"
    exit 1
fi

# Проверка портов
echo -n "Проверка порта 3000... "
if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null 2>&1 ; then
    echo -e "${YELLOW}⚠ Порт занят${NC}"
else
    echo -e "${GREEN}✓${NC}"
fi

# Сборка образа
echo ""
echo "📦 Сборка Docker образа..."
if docker-compose build --no-cache; then
    echo -e "${GREEN}✓ Сборка успешна${NC}"
else
    echo -e "${RED}✗ Ошибка сборки${NC}"
    exit 1
fi

# Запуск контейнера
echo ""
echo "🚀 Запуск контейнера..."
if docker-compose up -d; then
    echo -e "${GREEN}✓ Контейнер запущен${NC}"
else
    echo -e "${RED}✗ Ошибка запуска${NC}"
    exit 1
fi

# Ожидание запуска
echo ""
echo "⏳ Ожидание запуска приложения (30 секунд)..."
sleep 30

# Проверка health check
echo ""
echo -n "Проверка health endpoint... "
if curl -f http://localhost:3000/health > /dev/null 2>&1; then
    echo -e "${GREEN}✓${NC}"
else
    echo -e "${RED}✗ Health check не прошел${NC}"
fi

# Проверка главной страницы
echo -n "Проверка главной страницы... "
if curl -f http://localhost:3000 > /dev/null 2>&1; then
    echo -e "${GREEN}✓${NC}"
else
    echo -e "${RED}✗ Главная страница недоступна${NC}"
fi

# Логи
echo ""
echo "📋 Последние 20 строк логов:"
docker-compose logs --tail=20

# Результат
echo ""
echo "═══════════════════════════════════════════"
echo -e "${GREEN}✅ Тест завершен!${NC}"
echo "Приложение доступно: http://localhost:3000"
echo ""
echo "Для остановки выполните: docker-compose down"
echo "═══════════════════════════════════════════"
