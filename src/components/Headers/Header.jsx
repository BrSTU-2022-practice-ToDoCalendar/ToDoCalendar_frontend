import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import VerifyController from '../../scripts/Verify/VerifyController';
import styles from './Header.module.css';

export default function Header(props) {
  let navigate = useNavigate();

  useEffect(() => {
    (async function () {
      const isVerify = await VerifyController.verifyTokens();
      if (isVerify) return;
      navigate('/sign-in');
    })();
  }, [navigate]);

  function navigateToTask() {
    navigate(`/task`);
  }

  function navigateToDate() {
    const timeNow = new Date();
    const yearNow = timeNow.getFullYear();
    const monthNow = timeNow.getMonth() + 1;
    const dateNow = timeNow.getDate();
    navigate(`/year/${yearNow}/month/${monthNow}/date/${dateNow}`);
  }

  function navigateToMonth() {
    const timeNow = new Date();
    const yearNow = timeNow.getFullYear();
    const monthNow = timeNow.getMonth() + 1;
    navigate(`/year/${yearNow}/month/${monthNow}`);
  }

  function navigateToYear() {
    const timeNow = new Date();
    const yearNow = timeNow.getFullYear();
    navigate(`/year/${yearNow}`);
  }

  return (
    <header className={styles.header}>
      <div>
        {props.left_buttons}
        <h2>{props.title}</h2>
      </div>
      <div>
        <button onClick={navigateToTask} title="Добавить таску">
          + Таска
        </button>
        <button onClick={navigateToDate} title="День сейчас">
          День
        </button>
        <button onClick={navigateToMonth} title="Месяц сейчас">
          Месяц
        </button>
        <button onClick={navigateToYear} title="Год сейчас">
          Год
        </button>
      </div>
    </header>
  );
}
