import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import login from './../../scripts/login';
import verify from '../../scripts/verify';
import styles from './SignIn.module.css';

function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  let navigate = useNavigate();

  async function buttonOnClick(event) {
    event.preventDefault();

    localStorage.removeItem('refresh');

    await login(username, password);
    const verify_flag = await verify(localStorage.getItem('refresh'));

    if (!verify_flag) {
      return;
    }

    navigate('/', { replace: true });
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
