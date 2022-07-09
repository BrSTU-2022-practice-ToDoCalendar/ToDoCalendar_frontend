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

### Запуск Frontend для разработки

```bash
cp .env.example .env
npm ci
npm run start
```

### Как сбилдить и загрузить образ на Docker Hub

1. Авторизуемся на Docker Hub:

```bash
docker login
```

2. Билдим образ:

```bash
docker build -t pavelinnokentevichgalanin/todocalendar_frontend .
```

3. Проверяем как работает:

http://localhost:9001

```bash
docker-compose up
```

4. Загружает образ на Docker Hub:

```bash
docker push pavelinnokentevichgalanin/todocalendar_frontend
```

5. Если на сервере или другом компьютере уже загружен образ, то обновить его
   можно так:

```bash
docker pull pavelinnokentevichgalanin/todocalendar_frontend
```

## Стэк приложений

- **[Figma](https://www.figma.com/file/anNALPsTGG4iZa6IHQVJc7/Untitled?node-id=0%3A1)** -
  приложение для проектирования дизайна
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
    |   |-- ArrowIcon
    |   |-- Calendar
    |   |-- CheckIcon
    |   |-- Container
    |   |-- FooterPattern
    |   |-- Header
    |   |-- LogoutIcon
    |   |-- MenuIcon
    |   |-- NewTaskButton
    |   |-- SignPage
    |   `-- TasksList
    |-- consts
    |-- pages
    |   |-- Error404
    |   |-- Home
    |   `-- Task
    |-- scripts
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
- **pages**:
  - **Описание**: папка со страницами приложения
  - **Виды файлов**:
    - `*.jsx`
    - `*.module.css`
- **scripts**:
  - **Описание**: папка со скриптами приложения, которые повторяются на
    нескольких страницах
  - **Виды файлов**:
    - `*.js`
- **svg**
  - **Описание**: папка с иконками
  - **Виды файлов**:
    - `*.svg`
