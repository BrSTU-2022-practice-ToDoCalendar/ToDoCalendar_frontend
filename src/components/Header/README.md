# Header

**Header** - компонент, который возвращает заголовок.

Нужен для того, чтобы на любой странице выглядил одинакого.

```html
<header>
  <div class="title">...</div>
  <div class="nav_buttons">...</div>
</header>
```

Принимает параметры:

- title: String - заголовок (не обязательный параметр)
- IconsArray: JSX Array - массив иконок (не обязательный параметр)

Пример:

```jsx
<Header
  title="Tassker"
  IconsArray={[<MenuIcon />, <MenuIcon />, <MenuIcon />]}
/>
```
