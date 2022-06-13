import style from "./SignIn.module.css"
import GeneralFrame from "../GeneralFrame/GeneralFrame";
import {Link} from "react-router-dom";

function SingIn() {
    return (
        <>
            <div className={style.generalframe}><GeneralFrame/></div>
            <div className={style.window}>
                <main className={style.main}>
                    <h2 className={style.h2}>Sign in</h2>
                    <form action="">
                        <input type="email" className={style.input} placeholder={"Email"}/>
                        <input type="password" className={style.input} placeholder={"Password"}/>
                        <Link to={"/sing-up"} className={style.Link}>You haven’t account?</Link>
                        <button className={style.button}>Submit</button>
                    </form>
                </main>
            </div>

        </>
    )
}

export default SingIn;