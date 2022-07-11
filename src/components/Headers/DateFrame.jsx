import { useNavigate, useParams } from 'react-router';

import DateFabric from '../../scripts/DateFabric';
import Header from './Header';
import styles from './Header.module.css';

export default function DateFrame(props) {
  const { year, month, date } = useParams();
  let navigate = useNavigate();

  function prevDate() {
    const prev = DateFabric.getPrevDate(year, month, date);
    navigate(`/${prev.getFullYear()}/${prev.getMonth() + 1}/${prev.getDate()}`);
  }

  function nextDate() {
    const next = DateFabric.getNextDate(year, month, date);
    navigate(`/${next.getFullYear()}/${next.getMonth() + 1}/${next.getDate()}`);
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
