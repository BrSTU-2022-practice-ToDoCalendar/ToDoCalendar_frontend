import { useNavigate, useParams } from 'react-router';

import DateController from '../../scripts/Date/DateController';
import Header from './Header';
import styles from './Header.module.css';

export default function DateFrame(props) {
  const { year, month, date } = useParams();
  let navigate = useNavigate();

  function prevDate() {
    const prev = DateController.getPrevDate(year, month, date);
    navigate(
      `/year/${prev.getFullYear()}/month/${
        prev.getMonth() + 1
      }/date/${prev.getDate()}`
    );
  }

  function nextDate() {
    const next = DateController.getNextDate(year, month, date);
    navigate(
      `/year/${next.getFullYear()}/month/${
        next.getMonth() + 1
      }/date/${next.getDate()}`
    );
  }

  return (
    <div className={styles.wrapper}>
      <Header
        title={`${year} ${DateController.getStringMonth(month)} ${date}`}
        left_buttons={
          <>
            <button onClick={prevDate}>{'<'}</button>
            <button onClick={nextDate}>{'>'}</button>
          </>
        }
      />
      {props.children}
    </div>
  );
}
