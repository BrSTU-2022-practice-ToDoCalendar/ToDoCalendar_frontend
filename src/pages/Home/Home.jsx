import { useEffect, useState } from 'react';

import Header from './Header/Header';
import Calendar from './Calendar/Calendar';
import TasksList from './TasksList/TasksList';
import Button from './Button/Button';

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
    <div className={styles.background_block}>
      <div className={styles.mobile_center_block}>
        <div className={styles.not_footer}>
          <div className={styles.container}>
            <Header />
          </div>
          <Calendar calendarDays={calendarDays} />
          <div className={styles.container}>
            <TasksList calendarDays={calendarDays} tasksList={tasksList} />
          </div>
        </div>
        <footer className={styles.footer}>
          <div className={styles.container}>
            <Button />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default GeneralFrame;
