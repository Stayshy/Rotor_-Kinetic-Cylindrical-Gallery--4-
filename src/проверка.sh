#!/bin/bash

# Скрипт автоматической проверки готовности к запуску

echo "╔═══════════════════════════════════════════════════════════╗"
echo "║         ПРОВЕРКА ГОТОВНОСТИ К ЗАПУСКУ В DOCKER            ║"
echo "╚═══════════════════════════════════════════════════════════╝"
echo ""

# Цвета
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

ERRORS=0
WARNINGS=0

# Проверка 1: Docker установлен
echo -n "✓ Проверка Docker... "
if command -v docker &> /dev/null; then
    VERSION=$(docker --version)
    echo -e "${GREEN}OK${NC} ($VERSION)"
else
    echo -e "${RED}ОШИБКА: Docker не найден${NC}"
    ERRORS=$((ERRORS + 1))
fi

# Проверка 2: Docker Compose установлен
echo -n "✓ Проверка Docker Compose... "
if command -v docker-compose &> /dev/null; then
    VERSION=$(docker-compose --version)
    echo -e "${GREEN}OK${NC} ($VERSION)"
else
    echo -e "${RED}ОШИБКА: Docker Compose не найден${NC}"
    ERRORS=$((ERRORS + 1))
fi

# Проверка 3: Docker daemon запущен
echo -n "✓ Проверка Docker daemon... "
if docker ps &> /dev/null; then
    echo -e "${GREEN}ЗАПУЩЕН${NC}"
else
    echo -e "${RED}НЕ ЗАПУЩЕН${NC}"
    ERRORS=$((ERRORS + 1))
fi

# Проверка 4: Порт 3000
echo -n "✓ Проверка порта 3000... "
if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null 2>&1 ; then
    echo -e "${YELLOW}ЗАНЯТ (измените порт в docker-compose.yml)${NC}"
    WARNINGS=$((WARNINGS + 1))
else
    echo -e "${GREEN}СВОБОДЕН${NC}"
fi

# Проверка 5: Необходимые файлы
echo ""
echo "Проверка файлов проекта:"

FILES=("Dockerfile" "docker-compose.yml" "package.json" "index.html" "main.jsx" "App.tsx" "vite.config.js" "nginx.conf")

for file in "${FILES[@]}"; do
    echo -n "  • $file... "
    if [ -f "$file" ]; then
        echo -e "${GREEN}✓${NC}"
    else
        echo -e "${RED}✗ НЕ НАЙДЕН${NC}"
        ERRORS=$((ERRORS + 1))
    fi
done

# Проверка 6: Папки
echo ""
echo "Проверка папок:"

DIRS=("components" "styles" "hooks" "data" "utils" "webgl")

for dir in "${DIRS[@]}"; do
    echo -n "  • $dir/... "
    if [ -d "$dir" ]; then
        echo -e "${GREEN}✓${NC}"
    else
        echo -e "${YELLOW}⚠ не найдена (может работать)${NC}"
        WARNINGS=$((WARNINGS + 1))
    fi
done

# Проверка 7: Свободное место
echo ""
echo -n "✓ Свободное место на диске... "
AVAILABLE=$(df -h . | awk 'NR==2 {print $4}')
echo -e "${GREEN}${AVAILABLE} доступно${NC}"

# Проверка 8: Интернет
echo -n "✓ Интернет-соединение... "
if ping -c 1 google.com &> /dev/null; then
    echo -e "${GREEN}OK${NC}"
else
    echo -e "${YELLOW}НЕТ (может быть проблемой)${NC}"
    WARNINGS=$((WARNINGS + 1))
fi

# Результаты
echo ""
echo "═══════════════════════════════════════════════════════════"

if [ $ERRORS -eq 0 ]; then
    echo -e "${GREEN}✅ ВСЁ ГОТОВО К ЗАПУСКУ!${NC}"
    echo ""
    echo "Выполните команду для запуска:"
    echo "  docker-compose up --build -d"
    echo ""
    echo "Затем откройте: http://localhost:3000"
else
    echo -e "${RED}❌ НАЙДЕНО ОШИБОК: $ERRORS${NC}"
    echo "Исправьте ошибки выше перед запуском"
fi

if [ $WARNINGS -gt 0 ]; then
    echo -e "${YELLOW}⚠ ПРЕДУПРЕЖДЕНИЙ: $WARNINGS${NC}"
fi

echo "═══════════════════════════════════════════════════════════"
