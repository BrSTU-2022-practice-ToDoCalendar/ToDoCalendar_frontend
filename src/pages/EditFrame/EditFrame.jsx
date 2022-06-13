import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as Calendar } from "./Calendarbutton.svg";
import { ReactComponent as Circle } from "./circle.svg";
import style from './EditFrame.module.css'
import {Link} from "react-router-dom";
function EditFrame() {
    return (
        <div className={style.window}>
            <header className={style.header}>
                <Link to={"/view-frame"} className={style.Link}>
                    <FontAwesomeIcon className={style.arrow} icon={faAngleLeft}/>
                    Task
                </Link>
            </header>
            <main className={style.main}>
                <form action="">
                    <Circle className={style.circle}></Circle>
                    <input type="text" className={style.input} placeholder={"Name task"}/>
                    <textarea>
                        It was be text
                    </textarea>
                </form>
            </main>
            <footer>
                <menu>
                    <Calendar className={style.svg}></Calendar>
                </menu>
            </footer>
        </div>
    )
}

export default EditFrame;
