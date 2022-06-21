import styles from './Button.module.css';
import { Link } from 'react-router-dom';

function Button() {
  return (
    <section>
      <Link to={'/edit-frame'} className={styles.button_section__button}>
        + Add a New Task
      </Link>
    </section>
  );
}

export default Button;
