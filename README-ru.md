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
npm i
npm run start
```

## Стэк приложений

- **[Figma](https://www.figma.com/file/anNALPsTGG4iZa6IHQVJc7/Untitled?node-id=0%3A1)** -
  для дизайна
- **[GitHub pages](https://todocalendar.github.io/ToDoCalendar_frontend/#/general-frame)** -
  хостинг
- **React** - фреймворк для фронта
- **Font Awesome** - иконки

## Структура проекта

```bash
sudo apt install tree
tree --charset ascii -I "node_modules"
```

```
.
|-- LICENSE
|-- README.md
|-- build
|-- build-gh-pages
|-- package-lock.json
|-- package.json
|-- public
`-- src
    `-- pages
        |-- EditFrame
        |-- Error404
        |-- GeneralFrame
        |   |-- Button
        |   |-- Calendar
        |   |-- Header
        |   `-- TasksList
        |-- SingIn
        |-- SingUp
        `-- ViewFrame
```
