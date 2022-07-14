import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

import YearFrame from '../../Headers/YearFrame';
import DateFabric from '../../../scripts/DateFabric';
import styles from './HomeYearPage.module.css';
import TaskController from '../../../scripts/Task/TaskController';
import ToastController from '../../../scripts/Toast/ToastController';

export default function HomeYearPage(props) {
  const { year } = useParams();
  let navigate = useNavigate();

  const [yearCalendar, setYearCalendar] = useState([]);

  useEffect(() => {
    ToastController.delete_all_messages();
    const d = new Date(`${year}`);
    if (d.toString() === 'Invalid Date') {
      const timeNow = new Date();
      const yearNow = timeNow.getFullYear();
      navigate(`/${yearNow}`);
      return;
    }
    let yearArray = [
      DateFabric.getMonthDays(year, 1),
      DateFabric.getMonthDays(year, 2),
      DateFabric.getMonthDays(year, 3),
      DateFabric.getMonthDays(year, 4),
      DateFabric.getMonthDays(year, 5),
      DateFabric.getMonthDays(year, 6),
      DateFabric.getMonthDays(year, 7),
      DateFabric.getMonthDays(year, 8),
      DateFabric.getMonthDays(year, 9),
      DateFabric.getMonthDays(year, 10),
      DateFabric.getMonthDays(year, 11),
      DateFabric.getMonthDays(year, 12),
    ];

    async function fetchTasks() {
      const tasksArray = await TaskController.read({ year });
      tasksArray.forEach((task) => {
        const d = new Date(task.start_date);
        const d_year = d.getFullYear();
        const d_month = d.getMonth() + 1;
        const d_date = d.getDate();
        yearArray.forEach((month) => {
          month.forEach((day) => {
            if (
              day.year === d_year &&
              day.month === d_month &&
              day.date === d_date
            ) {
              day.tasks.push(task);
              if (task.completed) {
                day.has_completed_task = true;
              } else {
                day.has_not_completed_task = true;
              }
            }
          });
        });
      });
      setYearCalendar(yearArray);
    }
    fetchTasks();
  }, [navigate, year]);

  function selectMonth(d = new Date()) {
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    navigate(`/${year}/${month}`);
  }

  return (
    <YearFrame>
      <ul className={styles.array_month}>
        {yearCalendar.map((month, month_i) => {
          return (
            <li
              key={`${year}-${month_i + 1}`}
              className={styles.array_month_element}
              onClick={(event) =>
                selectMonth(new Date(`${year}-${month_i + 1}`))
              }
            >
              <h3>{DateFabric.getStringMonth(month_i + 1)}</h3>
              <ul className={styles.array_days}>
                {[1, 2, 3, 4, 5, 6, 7].map((day, day_i) => {
                  return (
                    <li key={day_i} className={styles.array_days_element}>
                      {DateFabric.getStringDay(day, 'ru')}
                    </li>
                  );
                })}
                {month.map((date, date_i) => {
                  return (
                    <li
                      key={`${year}-${month_i}-${date_i}`}
                      className={[
                        styles.array_days_element,
                        date.isThisMonth ? '' : styles.month_alian_day,
                      ].join(' ')}
                    >
                      <div className={styles.array_days_element__number}>
                        {date.date}
                      </div>
                      <div className={styles.array_days_element__circles}>
                        {date.has_completed_task ? (
                          <span
                            className={
                              styles.array_days_element__has_completed_task_circle
                            }
                          ></span>
                        ) : (
                          ''
                        )}
                        {date.has_not_completed_task && (
                          <span
                            className={
                              styles.array_days_element__has_not_completed_task_circle
                            }
                          ></span>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </YearFrame>
  );
}
