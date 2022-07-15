# README

**Языки документации**:

- [English](README.md)
- [Русский](README-ru.md)

**Меню**:

- [Задание](#задание)
- [Как запустить приложение](#как-запустить-приложение)
- [Стэк приложений](#стэк-приложений)
- [Структура проекта](#структура-проекта)

## Задание

- [Google Documents](https://docs.google.com/document/d/1UQgKfPkB8C36dyDDmPU40rjSw3_fXEH8/edit)

## Как запустить приложение

Запускаем backend:

```bash
git clone https://github.com/ToDoCalendar/ToDoCalendar_server.git
#git clone git@github.com:ToDoCalendar/ToDoCalendar_server.git
cd ToDoCalendar_server
cp .env.example .env
docker-compose up -d
docker-compose ps
```

Запускаем frontend:

```bash
git clone https://github.com/ToDoCalendar/ToDoCalendar_frontend.git
#git clone git@github.com:ToDoCalendar/ToDoCalendar_frontend.git
cd ToDoCalendar_frontend
npm ci
cp .env.example .env
npm run start
```

## Стэк приложений

- **[VS Code](https://code.visualstudio.com/#alt-downloads)** - редактор кода
- **[Node JS](https://nodejs.org/en/)** - для разработки приложения
- **[React](https://reactjs.org/)** - фреймворк для фронтенда
- **[Firefox](https://www.mozilla.org/en-US/firefox/enterprise/)** - браузер
- **[SVG repo](https://www.svgrepo.com/)** - SVG иконки
- **[Docker, docker-compose](https://www.docker.com/)** - для запуска на сервере

## Структура проекта

```bash
sudo apt install tree
tree --charset ascii -I "node_modules|build" -d
```

```
.
|-- public
`-- src
    |-- components
    |   |-- Container
    |   |-- DatePage
    |   |-- Error404Page
    |   |-- FooterPattern
    |   |-- Headers
    |   |-- HomeRedirectPage
    |   |-- MonthPage
    |   |-- SignPage
    |   |-- TaskPage
    |   `-- YearPage
    |-- consts
    |-- scripts
    |   |-- Sign
    |   |-- Task
    |   |-- Toast
    |   |-- Verify
    |   `-- sleep
    `-- svg

21 directories
```

- **components**:
  - **Описание**: папка с компонентами, которые можно несколько раз использовать
  - **Виды файлов**:
    - `*.jsx`
    - `*.module.css`
- **consts**:
  - **Описание**: папка с константами
  - **Виды файлов**:
    - `*.css`
- **scripts**:
  - **Описание**: папка со скриптами приложения, которые повторяются на
    нескольких страницах
  - **Виды файлов**:
    - `*.js`
- **svg**
  - **Описание**: папка с иконками
  - **Виды файлов**:
    - `*.svg`
