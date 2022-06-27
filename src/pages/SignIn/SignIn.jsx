import { Link } from 'react-router-dom';

import styles from './SignIn.module.css';

function SingIn() {
  return (
    <div className={styles.background}>
      <form className={styles.form} action="">
        <h2>Sign in</h2>
        <input type="email" placeholder={'Email'} />
        <input type="password" placeholder={'Password'} />
        <Link to={'/sign-up'}>You haven’t account?</Link>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SingIn;
