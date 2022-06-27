import styles from './ArrowIcon.module.css';

function ArrowIcon(props) {
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
    </i>
  );
}

export default ArrowIcon;
