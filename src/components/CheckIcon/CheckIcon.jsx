import styles from './CheckIcon.module.css';

function CheckIcon(props) {
  return (
    <i
      style={{
        width: props.size ? `${props.size}px` : '64px',
        height: props.size ? `${props.size}px` : '64px',
      }}
      className={styles.block}
    >
      <span className={styles.reactangle_left}></span>
      <span className={styles.reactangle_right}></span>
    </i>
  );
}

export default CheckIcon;
