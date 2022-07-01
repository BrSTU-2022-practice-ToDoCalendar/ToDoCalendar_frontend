import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Verify from '../../scripts/verify';
import calendar from '../../scripts/calendar';
import logout from '../../scripts/logout';
import { ReactComponent as LogoutSVG } from '../../svg/logout-svgrepo-com.svg';

import Container from '../../components/Container/Container';
import FooterPattern from '../../components/FooterPattern/FooterPattern';
import Header from '../../components/Header/Header';
import Calendar from './Calendar/Calendar';
import TasksList from './TasksList/TasksList';
import Button from './Button/Button';

// import calendar_json_example from './calendar_example.json';
// import task_today_example from './tasks_today_example.json';

function Home() {
  const [calendarDays, setCalendarDays] = useState([]);
  const [tasksList, setTasksList] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    (async function () {
      const calendar_days = await calendar.read();
      setCalendarDays(calendar_days);

      let tasks_list = [];
      for (let i = 0; i < calendar_days.length; ++i) {
        if (calendar_days[i].selected) {
          tasks_list = calendar_days[i].tasks_list;
          break;
        }
      }

      setTasksList(tasks_list);
    })();
  }, []);

  // Функция, которая вызывается один раз (костыль коструктора)
  // useEffect(() => {
  //   setCalendarDays(calendar_json_example);
  //   setTasksList(task_today_example);
  // }, []);

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
          <Header>
            <LogoutSVG onClick={(event) => logout(navigate)} />
            <h2>Tassker</h2>
          </Header>
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
