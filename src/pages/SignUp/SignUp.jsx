import { Link } from 'react-router-dom';

import styles from './SignUp.module.css';
import { useState } from 'react';

function SignUp() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function registration(event) {
    event.preventDefault();
    const URL = `${process.env.REACT_APP_api_server}/api/v1/register/`;
    const body = {
      email,
      username,
      password,
    };
    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      const status = response.status;

      if (status !== 200) {
        alert(JSON.stringify(data, null, 2));
      }
    } catch (error) {
      alert('' + error);
    }
  }

  return (
    <div className={styles.background}>
      <form className={styles.form} action=''>
        <h2>Sign up</h2>
        <input type='email' placeholder={'Email'} value={email} onInput={event => setEmail(event.target.value)} />
        <input type='text' placeholder={'Login'} value={username} onInput={event => setUsername(event.target.value)} />
        <input type='password' placeholder={'Password'} value={password}
               onInput={event => setPassword(event.target.value)} />
        <Link to={'/sign-in'}>You have account?</Link>
        <button onClick={event => registration(event)}>Submit</button>
      </form>
    </div>
  );
}

export default SignUp;
