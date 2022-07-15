import { useNavigate, useParams } from 'react-router';

import DateController from '../../scripts/Date/DateController';
import Header from './Header';
import styles from './Header.module.css';

export default function YearFrame(props) {
  const { year } = useParams();
  let navigate = useNavigate();

  function prevYear() {
    const prev_year = DateController.getPrevYear(year);
    navigate(`/year/${prev_year}`);
  }

  function nextYear() {
    const next_year = DateController.getNextYear(year);
    navigate(`/year/${next_year}`);
  }

  return (
    <div className={styles.wrapper}>
      <Header
        title={`${year}`}
        left_buttons={
          <>
            <button onClick={prevYear}>{'<'}</button>
            <button onClick={nextYear}>{'>'}</button>
          </>
        }
      />
      {props.children}
    </div>
  );
}
