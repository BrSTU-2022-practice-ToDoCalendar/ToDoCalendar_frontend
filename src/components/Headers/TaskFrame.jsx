import { useNavigate } from 'react-router';

import Header from './Header';
import styles from './Header.module.css';

export default function TaskFrame(props) {
  let navigate = useNavigate();

  function toHome() {
    navigate('/');
  }

  return (
    <div className={styles.wrapper}>
      <Header
        title={`Task`}
        left_buttons={<button onClick={toHome}>{'<'}</button>}
      />
      {props.children}
    </div>
  );
}
