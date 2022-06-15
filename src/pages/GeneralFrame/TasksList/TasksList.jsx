import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import styles from './TasksList.module.css';

function TasksList(props) {
  return (
    <section>
      <header className={styles.counter__block}>
        <span>{props.tasksList.length} Tasks Today</span>
      </header>
      <ul className={`${styles.task_list__ul} ${styles.window__container}`}>
        {props.tasksList.map((element, index) => {
          return (
            <TaskListElement
              key={index}
              task_name={element.name}
              type={element.type}
            />
          );
        })}
      </ul>
    </section>
  );
}

function TaskListElement(props) {
  const li_type_class =
    props.type === 'current'
      ? styles.task_list__li_current
      : props.type === 'completed'
      ? styles.task_list__li_completed
      : props.type === 'task'
      ? styles.task_list__li_task
      : '';

  return (
    <li className={li_type_class}>
      <span className={styles.task_list__circle}>
        {props.type === 'completed' ? (
          <FontAwesomeIcon icon={faCheck} />
        ) : (
          <></>
        )}
      </span>
      <span className={styles.task_list__title}>{props.task_name}</span>
    </li>
  );
}

export default TasksList;
