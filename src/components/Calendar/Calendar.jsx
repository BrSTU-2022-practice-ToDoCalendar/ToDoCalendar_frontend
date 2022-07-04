import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import CalendarFabric from '../../scripts/calendar';
import styles from './Calendar.module.css';

/**
 * Функция, которая возвращает JSX с календарем с точками
 * - желтая - есть не выполненные таски
 * - зелённая - есть выполненные таски
 * @returns JSX
 */
export default function Calendar() {
  let navigate = useNavigate();
  let { year, month, date } = useParams();
  const [calendarDays, setCalendarDays] = useState([]);

  useEffect(() => {
    (async function () {
      const calendar_days = await CalendarFabric.read();
      setCalendarDays(calendar_days);
    })();
  }, []);

  function isSelected(json_date) {
    const d = new Date(json_date);
    const element_year = '' + d.getFullYear();
    const element_month = '' + (d.getMonth() + 1);
    const element_date = '' + d.getDate();

    if (
      year === element_year &&
      month === element_month &&
      date === element_date
    ) {
      return true;
    }

    return false;
  }

  function isWeekend(d = new Date()) {
    const day = d.getDay();
    if (day === 5 || day === 6) {
      return true;
    }
    return false;
  }

  function chooseDay(json_date) {
    const d = new Date(json_date);
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const date = d.getDate();
    navigate(`/${year}/${month}/${date}`, { replace: true });
  }

  return (
    <section className={styles.calendar_section}>
      <ul>
        {calendarDays.map((element, index) => {
          return (
            <li key={index} onClick={(event) => chooseDay(element.date)}>
              <div
                className={[
                  styles.day,
                  isWeekend(new Date(element.date)) ? styles.isWeekend : '',
                  isSelected(new Date(element.date)) ? styles.isSelected : '',
                ].join(' ')}
              >
                <DayComponent json_date={element.date} />
                <DateComponent json_date={element.date} />
              </div>
              <div className={styles.circles_block}>
                <CompletedCircle completed={element.completed} />
                <NotCompletedCircle not_completed={element.not_completed} />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function DayComponent(props) {
  function getDay(d = new Date()) {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return days[d.getDay()];
  }

  return <div>{getDay(new Date(props.json_date))}</div>;
}

function DateComponent(props) {
  function getDate(d = new Date()) {
    return d.getDate();
  }

  return <div>{getDate(new Date(props.json_date))}</div>;
}

function CompletedCircle(props) {
  return props.completed ? (
    <span className={styles.circle_task_completed}></span>
  ) : (
    <></>
  );
}

function NotCompletedCircle(props) {
  return props.not_completed ? (
    <span className={styles.circle_task_not_completed}></span>
  ) : (
    <></>
  );
}
