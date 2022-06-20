import styles from './Header.module.css';

function Header(props) {
  return (
    <header className={styles.header}>
      <h2 className={styles.header__title}>{props.title}</h2>
      <nav className={styles.header__nav_buttons}>{props.IconsUlList}</nav>
    </header>
  );
}

export default Header;
