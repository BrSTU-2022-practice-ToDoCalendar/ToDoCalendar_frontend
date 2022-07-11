import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

import YearFrame from '../../Headers/YearFrame';
import DateFabric from '../../../scripts/DateFabric';
import styles from './HomeYearPage.module.css';

export default function HomeYearPage(props) {
  const { year } = useParams();
  let navigate = useNavigate();

  const [yearCalendar, setYearCalendar] = useState([]);

  useEffect(() => {
    const d = new Date(`${year}`);
    if (d.toString() === 'Invalid Date') {
      const timeNow = new Date();
      const yearNow = timeNow.getFullYear();
      navigate(`/${yearNow}`);
      return;
    }
    setYearCalendar([
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
    ]);
  }, [navigate, year]);

  function selectMonth(d = new Date()) {
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    navigate(`/${year}/${month}`);
  }

  return (
    <YearFrame>
      <div className={styles.year_block}>
        {yearCalendar.map((month, month_i) => {
          return (
            <div
              key={`${year}-${month_i + 1}`}
              className={styles.month_wrapper}
              onClick={(event) =>
                selectMonth(new Date(`${year}-${month_i + 1}`))
              }
            >
              <h3>{DateFabric.getStringMonth(month_i + 1)}</h3>
              <div className={styles.month_block}>
                <span>{DateFabric.getStringDay(1, 'ru')}</span>
                <span>{DateFabric.getStringDay(2, 'ru')}</span>
                <span>{DateFabric.getStringDay(3, 'ru')}</span>
                <span>{DateFabric.getStringDay(4, 'ru')}</span>
                <span>{DateFabric.getStringDay(5, 'ru')}</span>
                <span>{DateFabric.getStringDay(6, 'ru')}</span>
                <span>{DateFabric.getStringDay(7, 'ru')}</span>
                {month.map((date, date_i) => {
                  return (
                    <span
                      key={`${year}-${month_i}-${date_i}`}
                      className={date.isThisMonth ? '' : styles.month_alian_day}
                    >
                      {date.date}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </YearFrame>
  );
}
