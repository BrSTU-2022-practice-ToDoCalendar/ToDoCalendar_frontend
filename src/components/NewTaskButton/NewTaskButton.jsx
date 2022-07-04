import { Link } from 'react-router-dom';

import styles from './NewTaskButton.module.css';

/**
 * Функция, которая выводит JSX кнопку,
 * которая перенаправляет на страницу создания таски
 * @returns JSX
 */
export default function NewTaskButton() {
  return (
    <section>
      <Link to={'/task'} className={styles.btn}>
        + Add a New Task
      </Link>
    </section>
  );
}
