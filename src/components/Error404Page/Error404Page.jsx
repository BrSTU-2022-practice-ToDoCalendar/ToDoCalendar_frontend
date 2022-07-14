import { useNavigate, NavLink } from 'react-router-dom';

import DefaultFrame from '../Headers/DefaultFrame';
import styles from './Error404Page.module.css';

export default function Error404Page() {
  let navigate = useNavigate();

  function toHome() {
    navigate(`/`);
  }

  return (
    <DefaultFrame
      title="Error 404"
      left_buttons={<button onClick={toHome}>{'<'}</button>}
    >
      <div className={styles.wrapper}>
        <div className={styles.title_block}>404</div>
        <div className={styles.description_block}>
          <p>Данные не найдены</p>
          <p>
            Нажми, чтобы вернуться на <NavLink to="/">домашнюю</NavLink>{' '}
            страницу
          </p>
        </div>
      </div>
    </DefaultFrame>
  );
}
