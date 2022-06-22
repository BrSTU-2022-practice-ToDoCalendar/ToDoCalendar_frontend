import styles from './MenuIcon.module.css';

function MenuIcon(props) {
  return (
    <i
      style={{
        width: props.size ? `${props.size}px` : '64px',
        height: props.size ? `${props.size}px` : '64px',
      }}
      className={styles.block}
    >
      <span className={styles.reactangle}></span>
      <span className={styles.reactangle}></span>
      <span className={styles.reactangle}></span>
    </i>
  );
}

export default MenuIcon;
