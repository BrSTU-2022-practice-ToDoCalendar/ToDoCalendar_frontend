import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

import DateFabric from '../../../scripts/DateFabric';
import TaskController from '../../../scripts/Task/TaskController';
import Container from '../../Container/Container';
import styles from './HomeDatePage.module.css';
import DateFrame from '../../Headers/DateFrame';
import ToastController from '../../../scripts/Toast/ToastController';

export default function HomeDatePage() {
  const { year, month, date } = useParams();
  const [tasks, setTasks] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    ToastController.delete_all_messages();
    async function fetchTasksToday() {
      const tasks_array = await TaskController.read({ year, month, day: date });
      setTasks(tasks_array);
    }
    fetchTasksToday();
  }, [date, month, year]);

  function selectTask(id) {
    navigate(`/task/${id}`);
  }

  return (
    <DateFrame>
      <Container>
        <div className={styles.counter_block}>{tasks.length} tasks</div>
        <ul className={styles.array}>
          {tasks.map((task, task_i) => {
            const start_date = DateFabric.convertDateToUTC(
              new Date(task.start_date)
            );

            let hours = start_date.getHours();
            hours = hours < 10 ? `0${hours}` : `${hours}`;

            let minutes = start_date.getMinutes();
            minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

            return (
              <li
                key={task_i}
                className={styles.array_element}
                onClick={(event) => selectTask(task.id)}
              >
                {task.completed ? (
                  <span className={styles.task_completed_circle}></span>
                ) : (
                  <span className={styles.task_not_completed_circle}></span>
                )}
                <span className={styles.time}>
                  ({hours}:{minutes})
                </span>
                <span>{task.title}</span>
              </li>
            );
          })}
        </ul>
      </Container>
    </DateFrame>
  );
}
