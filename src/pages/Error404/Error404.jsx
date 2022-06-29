import { useNavigate } from 'react-router-dom';

import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';
import { ReactComponent as ArrowLeftSVG } from '../../svg/left-arrow-svgrepo-com.svg';

function Error404() {
  let navigate = useNavigate();

  return (
    <Container>
      <Header>
        <ArrowLeftSVG onClick={(event) => navigate(`/`, { replace: true })} />
        <h2>Error 404 - Page not found</h2>
      </Header>
    </Container>
  );
}

export default Error404;
