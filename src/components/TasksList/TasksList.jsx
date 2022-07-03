import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import CheckIcon from '../CheckIcon/CheckIcon';
import TaskOnDayFabric from '../../scripts/TasksOnDay';
import styles from './TasksList.module.css';

/**
 * Функция, которая возвращает список задач на день в виде JSX
 * @returns JSX
 */
function TasksList() {
  let { year, month, date } = useParams();
  const [tasksToday, setTasksToday] = useState([]);

  useEffect(() => {
    (async function () {
      const tasks_today = await TaskOnDayFabric.read(year, month, date);
      setTasksToday(tasks_today);
    })();
  }, [year, month, date]);

  return (
    <section>
      <CounterBlock
        length={tasksToday.length}
        date={`${year}-${month}-${date}`}
      />
      <ul className={styles.ul}>
        {tasksToday.map((element, index) => {
          return (
            <TaskListElement
              key={index}
              id={element.id}
              title={element.title}
              completed={element.completed}
            />
          );
        })}
      </ul>
    </section>
  );
}

function CounterBlock(props) {
  return (
    <header className={styles.counter_block}>
      <span>{props.length} Tasks</span>
    </header>
  );
}

function TaskListElement(props) {
  let navigate = useNavigate();

  function choose_task(id) {
    navigate(`/task/${id}/`, { replace: true });
  }

  return (
    <li
      className={[props.completed ? styles.completed : ''].join(' ')}
      onClick={(event) => choose_task(props.id)}
    >
      <Circle completed={props.completed} />
      <Title completed={props.completed} title={props.title} />
    </li>
  );
}

function Circle(props) {
  return (
    <span
      className={[
        styles.circle,
        props.completed ? styles.circle_completed : '',
      ].join(' ')}
    >
      {props.completed ? <CheckIcon /> : <></>}
    </span>
  );
}

function Title(props) {
  return (
    <span
      className={[
        styles.task_list__title,
        props.completed ? styles.title_completed : '',
      ].join(' ')}
    >
      {props.title}
    </span>
  );
}

export default TasksList;
