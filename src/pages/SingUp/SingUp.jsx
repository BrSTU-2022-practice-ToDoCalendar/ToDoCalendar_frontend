import style from '../SingUp/SignUp.module.css';
import { Link } from 'react-router-dom';

function SingUp() {
  return (
    <>
      <div className={style.window}>
        <main className={style.main}>
          <h2 className={style.h2}>Sign up</h2>
          <form action="">
            <input type="email" className={style.input} placeholder={'Email'} />
            <input type="text" className={style.input} placeholder={'Login'} />
            <input
              type="password"
              className={style.input}
              placeholder={'Password'}
            />
            <Link to={'/sing-in'} className={style.Link}>
              You have account?
            </Link>
            <button className={style.button}>Submit</button>
          </form>
        </main>
      </div>
    </>
  );
}

export default SingUp;
