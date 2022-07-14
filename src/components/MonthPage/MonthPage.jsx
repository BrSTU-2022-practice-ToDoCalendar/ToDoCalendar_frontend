import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import DateFabric from '../../scripts/DateFabric';
import MonthFrame from '../Headers/MonthFrame';
import TaskController from '../../scripts/Task/TaskController';
import ToastController from '../../scripts/Toast/ToastController';
import styles from './MonthPage.module.css';

export default function MonthPage() {
  const { year, month } = useParams();
  const [monthCalendar, setMonthCalendar] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    if (new Date(`${year}-${month}`).toString() === 'Invalid Date') {
      navigate(`/year/${year}/month/${month}/error404`);
      return;
    }

    ToastController.delete_all_messages();

    let monthCalendar = DateFabric.getMonthDays(year, month);

    async function getTasks() {
      const tasks = await TaskController.read({ year, month });
      tasks.forEach((task) => {
        const start_date = DateFabric.convertDateToUTC(
          new Date(task.start_date)
        );
        const start_date__year = start_date.getFullYear();
        const start_date__month = start_date.getMonth() + 1;
        const start_date__date = start_date.getDate();
        monthCalendar.forEach((calendar_element) => {
          if (
            calendar_element.year === start_date__year &&
            calendar_element.month === start_date__month &&
            calendar_element.date === start_date__date
          ) {
            calendar_element.tasks.push(task);
            if (task.completed) {
              calendar_element.has_completed_task = true;
            }
            if (!task.completed) {
              calendar_element.has_not_completed_task = true;
            }
          }
        });
      });
      setMonthCalendar(monthCalendar);
    }
    getTasks();
  }, [month, navigate, year]);

  function chooseDate(d = new Date()) {
    const choosenYear = d.getFullYear();
    const choosenMonth = d.getMonth() + 1;
    const choosenDate = d.getDate();
    if (Number(year) === choosenYear && Number(month) === choosenMonth) {
      navigate(
        `/year/${choosenYear}/month/${choosenMonth}/date/${choosenDate}`
      );
    }
  }

  return (
    <MonthFrame>
      <ul className={styles.array}>
        {monthCalendar.map((dateObj, date_i) => {
          const d = new Date(dateObj.json);
          const currentYear = d.getFullYear();
          const currentMonth = d.getMonth() + 1;
          const currentDate = d.getDate();
          return (
            <li
              key={date_i}
              className={[
                styles.array_element,
                dateObj.isThisMonth ? '' : styles.month_alian_day,
              ].join(' ')}
              onClick={(event) =>
                chooseDate(
                  new Date(`${currentYear}-${currentMonth}-${currentDate}`)
                )
              }
            >
              <div className={styles.element_day}>
                {DateFabric.getStringDay((date_i % 7) + 1, 'ru')}
              </div>
              <div className={styles.element_date}>{currentDate}</div>
              <ul className={styles.element_circles}>
                {dateObj.has_not_completed_task && (
                  <li className={styles.has_not_completed_task_circle}></li>
                )}
                {dateObj.has_completed_task && (
                  <li className={styles.has_completed_task_circle}></li>
                )}
              </ul>
            </li>
          );
        })}
      </ul>
    </MonthFrame>
  );
}
