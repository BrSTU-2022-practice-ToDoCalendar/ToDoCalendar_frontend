import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import login from './../../scripts/login';
import verify from '../../scripts/verify';
import style from './SignIn.module.css';

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
    <div className={style.window}>
      <main className={style.main}>
        <h2 className={style.h2}>Sign in</h2>
        <form>
          <input
            type="text"
            className={style.input}
            placeholder={'Name'}
            value={username}
            onInput={(event) => setUsername(event.target.value)}
          />
          <input
            type="password"
            className={style.input}
            placeholder={'Password'}
            value={password}
            onInput={(event) => setPassword(event.target.value)}
          />
          <Link to={'/sign-up'} className={style.Link}>
            You haven’t account?
          </Link>
          <button className={style.button} onClick={buttonOnClick}>
            Submit
          </button>
        </form>
      </main>
    </div>
  );
}

export default SignIn;
