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
  application for design
- **[VS Code](https://code.visualstudio.com/#alt-downloads)** - code editor
- **[Node JS](https://nodejs.org/en/)** - for application development
- **[React](https://reactjs.org/)** - frontend framework
- **[Firefox](https://www.mozilla.org/en-US/firefox/enterprise/)** - browser
- **[SVG repo](https://www.svgrepo.com/)** - SVG icons

## Folder structure

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
    |   `-- TasksList
    |-- pages
    |   |-- Error404
    |   |-- Home
    |   |-- SignIn
    |   |-- SignUp
    |   `-- Task
    |-- scripts
    `-- svg

21 directories
```

- **components**:
  - **Description**: A folder with components that can be used several times
  - **Types of files**:
    - `*.jsx`
    - `*.module.css`
- **pages**:
  - **Description**: Folder with application pages
  - **Types of files**:
    - `*.jsx`
    - `*.module.css`
- **scripts**:
  - **Description**: A folder with application scripts that are repeated on
    several pages
  - **Types of files**:
    - `*.js`
- **svg**
  - **Description**: Icon folder
  - **Types of files**:
    - `*.svg`
