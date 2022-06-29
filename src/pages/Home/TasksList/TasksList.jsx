import { useNavigate } from 'react-router-dom';

import CheckIcon from '../../../components/CheckIcon/CheckIcon';
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
              task_name={element.title}
              element={element}
            />
          );
        })}
      </ul>
    </section>
  );
}

function TaskListElement(props) {
  let navigate = useNavigate();

  const li_type_class =
    props.type === 'current'
      ? styles.task_list__li_current
      : props.element.completed === true
      ? styles.task_list__li_completed
      : styles.task_list__li_task;

  function tast_selected(id) {
    navigate(`/task/${id}/`, { replace: true });
  }

  return (
    <li
      className={li_type_class}
      onClick={(event) => tast_selected(props.element.id)}
    >
      <span className={styles.task_list__circle}>
        {props.type === 'completed' ? <CheckIcon /> : <></>}
      </span>
      <span className={styles.task_list__title}>{props.task_name}</span>
    </li>
  );
}

export default TasksList;
