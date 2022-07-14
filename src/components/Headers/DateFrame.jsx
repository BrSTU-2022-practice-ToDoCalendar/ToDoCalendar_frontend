import { useNavigate, useParams } from 'react-router';

import DateFabric from '../../scripts/DateFabric';
import Header from './Header';
import styles from './Header.module.css';

export default function DateFrame(props) {
  const { year, month, date } = useParams();
  let navigate = useNavigate();

  function prevDate() {
    const prev = DateFabric.getPrevDate(year, month, date);
    navigate(
      `/year/${prev.getFullYear()}/month/${
        prev.getMonth() + 1
      }/date/${prev.getDate()}`
    );
  }

  function nextDate() {
    const next = DateFabric.getNextDate(year, month, date);
    navigate(
      `/year/${next.getFullYear()}/month/${
        next.getMonth() + 1
      }/date/${next.getDate()}`
    );
  }

  return (
    <div className={styles.wrapper}>
      <Header
        title={`${year} ${DateFabric.getStringMonth(month)} ${date}`}
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
