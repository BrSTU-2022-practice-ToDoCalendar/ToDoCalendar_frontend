FROM node:12-alpine

WORKDIR /app

COPY .env.example /app/.env
COPY .env.production.example /app/.env.production
COPY . /app
