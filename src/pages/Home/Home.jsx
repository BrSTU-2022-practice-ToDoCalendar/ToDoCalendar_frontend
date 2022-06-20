import { useEffect, useState } from 'react';

import Container from '../../components/Container/Container';
import FooterPattern from '../../components/FooterPattern/FooterPattern';

import Header from './Header/Header';
import Calendar from './Calendar/Calendar';
import TasksList from './TasksList/TasksList';
import Button from './Button/Button';

import calendar_json_example from './calendar_example.json';
import task_today_example from './tasks_today_example.json';

function Home() {
  const [calendarDays, setCalendarDays] = useState([]);
  const [tasksList, setTasksList] = useState([]);
  useEffect(() => {
    setCalendarDays(calendar_json_example);
    setTasksList(task_today_example);
  }, []);

  return (
    <FooterPattern
      NotFooter={
        <>
          <Container InnerHTML={<Header />} />
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
