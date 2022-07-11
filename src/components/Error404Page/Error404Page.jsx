import { useNavigate } from 'react-router-dom';

import Container from '../Container/Container';
import DefaultFrame from '../Headers/DefaultFrame';

export default function Error404Page() {
  let navigate = useNavigate();

  function toHome() {
    navigate(`/`);
  }

  return (
    <DefaultFrame
      title="404"
      left_buttons={<button onClick={toHome}>{'<'}</button>}
    >
      <Container>
        <h2>Error 404 - Page not found</h2>
      </Container>
    </DefaultFrame>
  );
}
