import { useNavigate, useParams } from 'react-router';

import DateFabric from '../../scripts/DateFabric';
import Header from './Header';
import styles from './Header.module.css';

export default function MonthFrame(props) {
  const { year, month } = useParams();
  let navigate = useNavigate();

  function prevMonth() {
    const prev = DateFabric.getPrevMonth(year, month);
    navigate(`/${prev.getFullYear()}/${prev.getMonth() + 1}`);
  }

  function nextMonth() {
    const next = DateFabric.getNextMonth(year, month);
    navigate(`/${next.getFullYear()}/${next.getMonth() + 1}`);
  }

  return (
    <div className={styles.wrapper}>
      <Header
        title={`${year} ${DateFabric.getStringMonth(month)}`}
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
