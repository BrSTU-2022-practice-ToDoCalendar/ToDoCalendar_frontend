import styles from './LogoutIcon.module.css';

function LogoutIcon(props) {
  return (
    <i
      style={{
        width: props.size ? `${props.size}px` : '64px',
        height: props.size ? `${props.size}px` : '64px',
      }}
      className={styles.block}
    >
      <span className={styles.reactangle_up}></span>
      <span className={styles.reactangle_down}></span>
      <span className={styles.reactangle_vertical}></span>
      <span className={styles.reactangle_arrow}></span>
      <span className={styles.reactangle_arrow_up}></span>
      <span className={styles.reactangle_arrow_down}></span>
    </i>
  );
}

export default LogoutIcon;
