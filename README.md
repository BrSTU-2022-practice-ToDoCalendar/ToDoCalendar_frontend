# README

**Documentation languages**:

- [English](README.md)
- [Русский](README-ru.md)

**Menu**:

- [Task](#task)
- [How to run app](#how-to-run-app)
- [Application stack](#application-stack)
- [Folder structure](#folder-structure)

## Task

- [Google Documents](https://docs.google.com/document/d/1UQgKfPkB8C36dyDDmPU40rjSw3_fXEH8/edit)

## How to run app

```bash
cp .env.example .env
cp .env.production.example .env.production
npm i
npm run start
```

## Application stack

- **[Figma](https://www.figma.com/file/anNALPsTGG4iZa6IHQVJc7/Untitled?node-id=0%3A1)** -
  for design
- **[GitHub pages](https://todocalendar.github.io/ToDoCalendar_frontend/#/general-frame)** -
  hosting
- **React** - framework for frontend
- **Font Awesome** - icons

## Folder structure

```bash
sudo apt install tree
tree --charset ascii -I "node_modules"
```

```
.
|-- public
`-- src
    |-- components
    |   |-- CheckIcon
    |   |-- Container
    |   |-- FooterPattern
    |   |-- Header
    |   `-- MenuIcon
    `-- pages
        |-- Error404
        |-- Home
        |   |-- Button
        |   |-- Calendar
        |   `-- TasksList
        |-- SingIn
        |-- SingUp
        `-- Task
```
