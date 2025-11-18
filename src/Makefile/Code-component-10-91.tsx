.PHONY: help build up down restart logs clean dev prod install

help: ## Показать справку
	@echo "Доступные команды:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'

install: ## Установить зависимости локально
	npm install

dev: ## Запустить development версию в Docker
	docker-compose -f docker-compose.dev.yml up --build

prod: ## Запустить production версию в Docker
	docker-compose up --build -d
	@echo "Приложение доступно на http://localhost:3000"

build: ## Собрать Docker образ
	docker-compose build

up: ## Запустить контейнеры
	docker-compose up -d

down: ## Остановить контейнеры
	docker-compose down

restart: ## Перезапустить контейнеры
	docker-compose restart

logs: ## Показать логи
	docker-compose logs -f

clean: ## Очистить Docker ресурсы
	docker-compose down -v
	docker system prune -f

rebuild: ## Пересобрать без кэша
	docker-compose build --no-cache
	docker-compose up -d

status: ## Показать статус контейнеров
	docker-compose ps

shell: ## Войти в контейнер
	docker exec -it album-vospominaniy sh
