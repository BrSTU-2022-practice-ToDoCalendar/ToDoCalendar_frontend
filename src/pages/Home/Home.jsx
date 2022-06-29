import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Verify from '../../scripts/verify';

import Container from '../../components/Container/Container';
import FooterPattern from '../../components/FooterPattern/FooterPattern';
import Header from '../../components/Header/Header';
import Calendar from './Calendar/Calendar';
import TasksList from './TasksList/TasksList';
import Button from './Button/Button';
import MenuIcon from '../../components/MenuIcon/MenuIcon';

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
    (async function () {
      const isVerify = await Verify.allTokens();
      if (!isVerify) {
        navigate('/sign-in', { replace: true });
        return;
      }
    })();
  }, [navigate]);

  return (
    <FooterPattern
      NotFooter={
        <Container>
          <Header title="Tassker" IconsArray={[<MenuIcon />]} />
          <Calendar calendarDays={calendarDays} />
          <TasksList calendarDays={calendarDays} tasksList={tasksList} />
        </Container>
      }
      Footer={
        <Container>
          <Button />
        </Container>
      }
    />
  );
}

export default Home;
