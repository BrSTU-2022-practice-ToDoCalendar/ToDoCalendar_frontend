import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import verify from '../../scripts/verify';
import MenuIcon from '../../components/MenuIcon/MenuIcon';
import Container from '../../components/Container/Container';
import FooterPattern from '../../components/FooterPattern/FooterPattern';
import Header from '../../components/Header/Header';
import Calendar from './Calendar/Calendar';
import TasksList from './TasksList/TasksList';
import Button from './Button/Button';
import calendar_json_example from './calendar_example.json';
import task_today_example from './tasks_today_example.json';

function Home() {
  const [calendarDays, setCalendarDays] = useState([]);
  const [tasksList, setTasksList] = useState([]);

  let navigate = useNavigate();

  // Функция, которая вызывается один раз (костыль коструктора)
  useEffect(() => {
    setCalendarDays(calendar_json_example);
    setTasksList(task_today_example);
  }, []);

  // Функция, которая вызывается один раз (костыль коструктора)
  useEffect(() => {
    const check_refresh_token = () => {
      const refresh_token = localStorage.getItem('refresh');

      // Если нет в локальной базе данных refresh токена, то выйти
      // Если refresh токен не авторизован, то выйти
      if (!refresh_token || !verify(refresh_token)) {
        navigate('/sign-in', { replace: true });
        return;
      }
    };
    check_refresh_token();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FooterPattern
      NotFooter={
        <>
          <Container
            InnerHTML={<Header title="Tassker" IconsArray={[<MenuIcon />]} />}
          />
          <Container InnerHTML={<Calendar calendarDays={calendarDays} />} />
          <Container
            InnerHTML={
              <TasksList calendarDays={calendarDays} tasksList={tasksList} />
            }
          />
        </>
      }
      Footer={<Container InnerHTML={<Button />} />}
    />
  );
}

export default Home;
