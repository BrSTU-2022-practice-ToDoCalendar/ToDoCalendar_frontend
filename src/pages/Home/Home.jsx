import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Verify from '../../scripts/verify';
import logout from '../../scripts/logout';
import { ReactComponent as LogoutSVG } from '../../svg/logout-svgrepo-com.svg';
import Container from '../../components/Container/Container';
import FooterPattern from '../../components/FooterPattern/FooterPattern';
import Header from '../../components/Header/Header';
import Calendar from '../../components/Calendar/Calendar';
import TasksList from '../../components/TasksList/TasksList';
import NewTaskButton from '../../components/NewTaskButton/NewTaskButton';

/**
 * Функция, которая выводит содержание страницы Home по урлу `/:year/:month/:date`
 * @returns
 */
function Home() {
  let navigate = useNavigate();

  useEffect(() => {
    (async function () {
      const isVerify = await Verify.verifyTokens();
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
          <Calendar />
          <TasksList />
        </Container>
      }
      Footer={
        <Container>
          <NewTaskButton />
        </Container>
      }
    />
  );
}

export default Home;
