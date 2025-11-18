@echo off
REM Скрипт для запуска development версии в Docker (Windows)

echo 🚀 Запуск Альбом Воспоминаний (Development)...
echo.

REM Проверка наличия Docker
docker --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Docker не установлен. Пожалуйста, установите Docker Desktop.
    pause
    exit /b 1
)

REM Проверка наличия Docker Compose
docker-compose --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Docker Compose не установлен. Пожалуйста, установите Docker Compose.
    pause
    exit /b 1
)

REM Остановка предыдущих контейнеров
echo 🛑 Остановка предыдущих контейнеров...
docker-compose -f docker-compose.dev.yml down >nul 2>&1

REM Сборка и запуск
echo 🔨 Сборка образа...
docker-compose -f docker-compose.dev.yml up --build

if %errorlevel% equ 0 (
    echo.
    echo ✅ Приложение успешно запущено!
    echo 🌐 Откройте браузер: http://localhost:5173
) else (
    echo.
    echo ❌ Ошибка при запуске приложения
    pause
    exit /b 1
)
