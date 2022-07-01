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

```bash
cp .env.example .env
cp .env.production.example .env.production
npm i
npm run start
```

## Стэк приложений

- **[Figma](https://www.figma.com/file/anNALPsTGG4iZa6IHQVJc7/Untitled?node-id=0%3A1)** -
  приложение для проектирования дизайна
- **[VS Code](https://code.visualstudio.com/#alt-downloads)** - редактор кода
- **[Node JS](https://nodejs.org/en/)** - для разработки приложения
- **[React](https://reactjs.org/)** - фреймворк для фронтенда
- **[Firefox](https://www.mozilla.org/en-US/firefox/enterprise/)** - браузер
- **[SVG repo](https://www.svgrepo.com/)** - SVG иконки

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
    |   |-- CheckIcon
    |   |-- Container
    |   |-- FooterPattern
    |   |-- Header
    |   |-- LogoutIcon
    |   `-- MenuIcon
    |-- pages
    |   |-- Error404
    |   |-- Home
    |   |   |-- Button
    |   |   |-- Calendar
    |   |   `-- TasksList
    |   |-- SignIn
    |   |-- SignUp
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
