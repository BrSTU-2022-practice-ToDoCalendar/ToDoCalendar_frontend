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
  const circle_type_class =
    props.type === 'current'
      ? styles.task_list__circle_current
      : props.type === 'completed'
      ? styles.task_list__circle_completed
      : props.type === 'task'
      ? styles.task_list__circle_task
      : '';

  return (
    <li>
      <span
        className={`${styles.task_list__circle} ${circle_type_class}`}
      ></span>
      <span>{props.task_name}</span>
    </li>
  );
}

export default TasksList;
