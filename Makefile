DC=docker-compose
DC_EXEC=$(DC) exec
FRONTEND=$(DC_EXEC) money-manager
NPM=$(FRONTEND) npm run
FIREBASE=$(FRONTEND) firebase

start:
	$(DC) up -d

stop:
	$(DC) stop

ssh:
	$(FRONTEND) sh

install:
	$(FRONTEND) npm install

dev:
	$(NPM) dev

start-dev:
	$(DC) up -d && $(NPM) dev

build:
	$(NPM) build

deploy:
	$(FIREBASE) deploy