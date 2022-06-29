import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import login from './../../scripts/login';
import styles from './SignIn.module.css';

function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  let navigate = useNavigate();

  async function buttonOnClick(event) {
    event.preventDefault();

    localStorage.removeItem('refresh');

    const isLogin = await login(username, password);

    if (isLogin) {
      navigate('/', { replace: true });
      return;
    } else {
      alert('Не авторизован');
      return;
    }
  }

  return (
    <div className={styles.background}>
      <form className={styles.form} action="">
        <h2>Sign in</h2>
        <input
          type="text"
          placeholder={'Username'}
          value={username}
          onInput={(event) => setUsername(event.target.value)}
        />
        <input
          type="password"
          placeholder={'Password'}
          value={password}
          onInput={(event) => setPassword(event.target.value)}
        />
        <Link to={'/sign-up'}>You haven’t account?</Link>
        <button onClick={buttonOnClick}>Submit</button>
      </form>
    </div>
  );
}

export default SignIn;
