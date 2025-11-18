@echo off
REM Скрипт для тестирования Docker сборки (Windows)

echo 🧪 Тестирование Docker сборки...
echo.

REM Проверка Docker
echo Проверка Docker...
docker --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ✗ Docker не найден
    pause
    exit /b 1
) else (
    echo ✓ Docker установлен
)

REM Проверка Docker Compose
echo Проверка Docker Compose...
docker-compose --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ✗ Docker Compose не найден
    pause
    exit /b 1
) else (
    echo ✓ Docker Compose установлен
)

REM Проверка порта 3000
echo Проверка порта 3000...
netstat -ano | findstr :3000 >nul 2>&1
if %errorlevel% equ 0 (
    echo ⚠ Порт 3000 занят
) else (
    echo ✓ Порт свободен
)

REM Сборка образа
echo.
echo 📦 Сборка Docker образа...
docker-compose build --no-cache
if %errorlevel% equ 0 (
    echo ✓ Сборка успешна
) else (
    echo ✗ Ошибка сборки
    pause
    exit /b 1
)

REM Запуск контейнера
echo.
echo 🚀 Запуск контейнера...
docker-compose up -d
if %errorlevel% equ 0 (
    echo ✓ Контейнер запущен
) else (
    echo ✗ Ошибка запуска
    pause
    exit /b 1
)

REM Ожидание запуска
echo.
echo ⏳ Ожидание запуска приложения (30 секунд)...
timeout /t 30 /nobreak >nul

REM Проверка health check
echo.
echo Проверка health endpoint...
curl -f http://localhost:3000/health >nul 2>&1
if %errorlevel% equ 0 (
    echo ✓ Health check прошел
) else (
    echo ⚠ Health check не прошел
)

REM Проверка главной страницы
echo Проверка главной страницы...
curl -f http://localhost:3000 >nul 2>&1
if %errorlevel% equ 0 (
    echo ✓ Главная страница доступна
) else (
    echo ⚠ Главная страница недоступна
)

REM Логи
echo.
echo 📋 Последние 20 строк логов:
docker-compose logs --tail=20

REM Результат
echo.
echo ═══════════════════════════════════════════
echo ✅ Тест завершен!
echo Приложение доступно: http://localhost:3000
echo.
echo Для остановки выполните: docker-compose down
echo ═══════════════════════════════════════════

pause
