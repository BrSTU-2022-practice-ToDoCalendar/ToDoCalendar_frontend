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

### Run Frontend for Development

```bash
cp .env.example .env
npm ci
npm run start
```

### How to build and upload an image to Docker Hub

1. Log in to Docker Hub:

```bash
docker login
```

2. Build image:

```bash
docker build -t pavelinnokentevichgalanin/todocalendar_frontend .
```

3. Check how it works:

http://localhost:9001

```bash
docker-compose-up
```

4. Uploads the image to Docker Hub:

```bash
docker push pavelinnokentevichgalanin/todocalendar_frontend
```

5. If the image is already loaded on the server or another computer, then update
   it it is possible like this:

```bash
docker pull pavelinnokentevichgalanin/todocalendar_frontend
```

## Application stack

- **[VS Code](https://code.visualstudio.com/#alt-downloads)** - code editor
- **[Node JS](https://nodejs.org/en/)** - for application development
- **[React](https://reactjs.org/)** - frontend framework
- **[Firefox](https://www.mozilla.org/en-US/firefox/enterprise/)** - browser
- **[SVG repo](https://www.svgrepo.com/)** - SVG icons
- **[Docker, docker-compose](https://www.docker.com/)** - to run on the server

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
    |   |-- Container
    |   |-- Error404Page
    |   |-- FooterPattern
    |   |-- Headers
    |   |-- HomePages
    |   |   |-- HomeDatePage
    |   |   |-- HomeMonthPage
    |   |   |-- HomeRedirectPage
    |   |   `-- HomeYearPage
    |   |-- SignPage
    |   `-- TaskPage
    |-- consts
    |-- scripts
    `-- svg

17 directories
```

- **components**:
  - **Description**: A folder with components that can be used several times
  - **Types of files**:
    - `*.jsx`
    - `*.module.css`
- **consts**:
  - **Description**: folder with constants
  - **Types of files**:
    - `*.css`
- **scripts**:
  - **Description**: A folder with application scripts that are repeated on
    several pages
  - **Types of files**:
    - `*.js`
- **svg**
  - **Description**: Icon folder
  - **Types of files**:
    - `*.svg`
