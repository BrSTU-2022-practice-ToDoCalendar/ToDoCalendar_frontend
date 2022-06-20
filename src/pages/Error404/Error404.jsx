import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';

function Error404() {
  return (
    <Container InnerHTML={<Header title="Error 404 - Page not found" />} />
  );
}

export default Error404;
