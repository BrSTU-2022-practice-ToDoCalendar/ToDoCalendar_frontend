import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

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
  const [htmlRedirect, setHtmlRedirect] = useState(<></>);

  useEffect(() => {
    constructor();
  }, []);

  function constructor() {
    setCalendarDays(calendar_json_example);
    setTasksList(task_today_example);

    const refresh_token = localStorage.getItem('refresh');
    console.log(refresh_token);

    // Если нет в локальной базе данных refresh токена, то выйти
    if (refresh_token === null) {
      setHtmlRedirect(<Navigate to="/sign-in" replace={true} />);
      return;
    }

    // Если refresh токен не авторизован, то выйти
    if (verify(refresh_token) === false) {
      setHtmlRedirect(<Navigate to="/sign-in" replace={true} />);
      return;
    }
  }

  return (
    <FooterPattern
      NotFooter={
        <>
          {htmlRedirect}
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
