import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Так как страница Home выводит таски на определеннцю дату по урлу `/:year/:month/:date`,
 * а мы находимся на урлу `/`,
 * то перенаправляем на урл с сегоднящней датой
 * @returns JSX
 */
export default function HomeRedirect() {
  let navigate = useNavigate();

  useEffect(() => {
    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const date = d.getDate();
    navigate(`/${year}/${month}/${date}`, { replace: true });
  }, [navigate]);

  return <></>;
}
