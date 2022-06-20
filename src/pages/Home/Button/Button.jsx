import styles from './Button.module.css';

function Button() {
  return (
    <section>
      <button className={styles.button_section__button}>
        + Add a New Task
      </button>
    </section>
  );
}

export default Button;
