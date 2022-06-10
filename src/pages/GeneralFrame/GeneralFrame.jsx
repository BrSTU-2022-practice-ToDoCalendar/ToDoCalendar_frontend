import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBell } from '@fortawesome/free-regular-svg-icons';

import calendar_json_example from './calendar_example.json';
import task_today_example from './tasks_today_example.json';
import styles from './GeneralFrame.module.css';

function GeneralFrame() {
  const [calendarDays, setCalendarDays] = useState([]);
  const [tasksList, setTasksList] = useState([]);
  useEffect(() => {
    setCalendarDays(calendar_json_example);
    setTasksList(task_today_example);
  }, []);

  return (
    <div className={styles.window_center}>
      <div className="wrapper">
        <div className="content">
          <header className={styles.header}>
            <div className={styles.header__name}>Tassker</div>
            <div className={styles.header__buttons}>
              <span>
                <FontAwesomeIcon icon={faBell} />
              </span>
              <span>
                <FontAwesomeIcon icon={faUser} />
              </span>
            </div>
          </header>
          <div className={styles.dates}>
            {calendarDays.map((element, index) => {
              return (
                <DateComponent
                  key={index}
                  string_data={element.string_data}
                  selected={element.selected}
                />
              );
            })}
          </div>
          <div className={styles.counter__block}>
            <span>{tasksList.length} Tasks Today</span>
          </div>
          <ul className={styles.task_list__ul}>
            {tasksList.map((element, index) => {
              return (
                <TaskListElement
                  key={index}
                  task_name={element.name}
                  type={element.type}
                />
              );
            })}
          </ul>
        </div>
        <div className="footer">
          <button className={styles.button__block}>+ Add a New Task</button>
        </div>
      </div>
    </div>
  );
}

function DateComponent(props) {
  const date_object = new Date(props.string_data);
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  console.log(props.selected);

  function isWeekend() {
    let day = date_object.getDay();
    if (day === 5) return true;
    if (day === 6) return true;
    return false;
  }

  return (
    <div
      className={`${styles.date_component__block} ${
        props.selected ? styles.date_component__block_selected : ''
      } ${isWeekend() ? styles.date_component__block_none : ''}`}
    >
      <div>{days[date_object.getDay()]}</div>
      <div>{date_object.getDate()}</div>
    </div>
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

export default GeneralFrame;
