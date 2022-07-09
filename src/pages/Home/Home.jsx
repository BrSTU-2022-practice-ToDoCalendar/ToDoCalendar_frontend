import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import VerifyFabric from '../../scripts/VerifyFabric';
import SignFabric from '../../scripts/SignFabric';
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
      const isVerify = await VerifyFabric.verifyTokens();
      if (isVerify) return;
      navigate('/sign-in');
    })();
  }, [navigate]);

  function logout() {
    SignFabric.logout();
    navigate('/sign-in');
  }

  return (
    <FooterPattern
      NotFooter={
        <Container>
          <Header>
            <LogoutSVG onClick={logout} />
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
