import { useNavigate, useParams } from 'react-router';

import DateController from '../../scripts/Date/DateController';
import Header from './Header';
import styles from './Header.module.css';

export default function MonthFrame(props) {
  const { year, month } = useParams();
  let navigate = useNavigate();

  function prevMonth() {
    const prev = DateController.getPrevMonth(year, month);
    navigate(`/year/${prev.getFullYear()}/month/${prev.getMonth() + 1}`);
  }

  function nextMonth() {
    const next = DateController.getNextMonth(year, month);
    navigate(`/year/${next.getFullYear()}/month/${next.getMonth() + 1}`);
  }

  return (
    <div className={styles.wrapper}>
      <Header
        title={`${year} ${DateController.getStringMonth(month)}`}
        left_buttons={
          <>
            <button onClick={prevMonth}>{'<'}</button>
            <button onClick={nextMonth}>{'>'}</button>
          </>
        }
      />
      {props.children}
    </div>
  );
}
