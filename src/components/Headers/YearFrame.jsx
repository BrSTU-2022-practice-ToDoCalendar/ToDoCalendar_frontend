import { useNavigate, useParams } from 'react-router';

import Header from './Header';
import styles from './Header.module.css';

export default function YearFrame(props) {
  const { year } = useParams();
  let navigate = useNavigate();

  function prevYear() {
    navigate(`/${Number(year) - 1}`);
  }

  function nextYear() {
    navigate(`/${Number(year) + 1}`);
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
