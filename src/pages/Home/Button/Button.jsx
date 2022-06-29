import { Link } from 'react-router-dom';

import styles from './Button.module.css';

function Button() {
  return (
    <section>
      <Link to={'/task'} className={styles.btn}>
        + Add a New Task
      </Link>
    </section>
  );
}

export default Button;
