@echo off
REM Скрипт автоматической проверки готовности к запуску (Windows)

echo ═══════════════════════════════════════════════════════════
echo          ПРОВЕРКА ГОТОВНОСТИ К ЗАПУСКУ В DOCKER
echo ═══════════════════════════════════════════════════════════
echo.

set ERRORS=0
set WARNINGS=0

REM Проверка 1: Docker установлен
echo [1/8] Проверка Docker...
docker --version >nul 2>&1
if %errorlevel% equ 0 (
    docker --version
    echo ✓ OK
) else (
    echo ✗ ОШИБКА: Docker не найден
    set /a ERRORS+=1
)
echo.

REM Проверка 2: Docker Compose установлен
echo [2/8] Проверка Docker Compose...
docker-compose --version >nul 2>&1
if %errorlevel% equ 0 (
    docker-compose --version
    echo ✓ OK
) else (
    echo ✗ ОШИБКА: Docker Compose не найден
    set /a ERRORS+=1
)
echo.

REM Проверка 3: Docker daemon запущен
echo [3/8] Проверка Docker daemon...
docker ps >nul 2>&1
if %errorlevel% equ 0 (
    echo ✓ ЗАПУЩЕН
) else (
    echo ✗ НЕ ЗАПУЩЕН - Запустите Docker Desktop
    set /a ERRORS+=1
)
echo.

REM Проверка 4: Порт 3000
echo [4/8] Проверка порта 3000...
netstat -ano | findstr :3000 >nul 2>&1
if %errorlevel% equ 0 (
    echo ⚠ ЗАНЯТ - измените порт в docker-compose.yml
    set /a WARNINGS+=1
) else (
    echo ✓ СВОБОДЕН
)
echo.

REM Проверка 5: Необходимые файлы
echo [5/8] Проверка файлов проекта:

if exist "Dockerfile" (echo   ✓ Dockerfile) else (echo   ✗ Dockerfile НЕ НАЙДЕН & set /a ERRORS+=1)
if exist "docker-compose.yml" (echo   ✓ docker-compose.yml) else (echo   ✗ docker-compose.yml НЕ НАЙДЕН & set /a ERRORS+=1)
if exist "package.json" (echo   ✓ package.json) else (echo   ✗ package.json НЕ НАЙДЕН & set /a ERRORS+=1)
if exist "index.html" (echo   ✓ index.html) else (echo   ✗ index.html НЕ НАЙДЕН & set /a ERRORS+=1)
if exist "main.jsx" (echo   ✓ main.jsx) else (echo   ✗ main.jsx НЕ НАЙДЕН & set /a ERRORS+=1)
if exist "App.tsx" (echo   ✓ App.tsx) else (echo   ✗ App.tsx НЕ НАЙДЕН & set /a ERRORS+=1)
if exist "vite.config.js" (echo   ✓ vite.config.js) else (echo   ✗ vite.config.js НЕ НАЙДЕН & set /a ERRORS+=1)
if exist "nginx.conf" (echo   ✓ nginx.conf) else (echo   ✗ nginx.conf НЕ НАЙДЕН & set /a ERRORS+=1)
echo.

REM Проверка 6: Папки
echo [6/8] Проверка папок:

if exist "components\" (echo   ✓ components/) else (echo   ⚠ components/ не найдена & set /a WARNINGS+=1)
if exist "styles\" (echo   ✓ styles/) else (echo   ⚠ styles/ не найдена & set /a WARNINGS+=1)
if exist "hooks\" (echo   ✓ hooks/) else (echo   ⚠ hooks/ не найдена & set /a WARNINGS+=1)
if exist "data\" (echo   ✓ data/) else (echo   ⚠ data/ не найдена & set /a WARNINGS+=1)
echo.

REM Проверка 7: Свободное место
echo [7/8] Свободное место на диске:
for /f "tokens=3" %%a in ('dir /-c ^| find "bytes free"') do set FREE=%%a
echo   Свободно: %FREE% байт
echo.

REM Проверка 8: Интернет
echo [8/8] Интернет-соединение...
ping -n 1 google.com >nul 2>&1
if %errorlevel% equ 0 (
    echo ✓ OK
) else (
    echo ⚠ НЕТ СОЕДИНЕНИЯ
    set /a WARNINGS+=1
)
echo.

REM Результаты
echo ═══════════════════════════════════════════════════════════

if %ERRORS% equ 0 (
    echo.
    echo ✅ ВСЁ ГОТОВО К ЗАПУСКУ!
    echo.
    echo Выполните команду для запуска:
    echo   docker-compose up --build -d
    echo.
    echo Затем откройте: http://localhost:3000
    echo.
) else (
    echo.
    echo ❌ НАЙДЕНО ОШИБОК: %ERRORS%
    echo Исправьте ошибки выше перед запуском
    echo.
)

if %WARNINGS% gtr 0 (
    echo ⚠ ПРЕДУПРЕЖДЕНИЙ: %WARNINGS%
    echo.
)

echo ═══════════════════════════════════════════════════════════

pause
