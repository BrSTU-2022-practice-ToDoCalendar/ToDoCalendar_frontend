import { Link } from 'react-router-dom';

import styles from './SignUp.module.css';

function SignUp() {
  return (
    <div className={styles.background}>
      <form className={styles.form} action="">
        <h2>Sign up</h2>
        <input type="email" placeholder={'Email'} />
        <input type="text" placeholder={'Login'} />
        <input type="password" placeholder={'Password'} />
        <Link to={'/sign-in'}>You have account?</Link>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SignUp;
