import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faB, faI, faUnderline, faPaperclip, faCheck } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Calendar } from './Calendarbutton.svg';
import { ReactComponent as Circle } from './circle.svg';
import style from './EditFrame.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function EditFrame() {
  const [nameTask, setNameTask] = useState('');
  const [textArea, setTextArea] = useState('');
  return (
    <div className='background_block'>
      <div className='mobile_center_block'>
        <div className='container'>
          <header className={style.header}>
            <Link to={'/general-frame'} className={style.Link}>
              <FontAwesomeIcon className={style.arrow} icon={faAngleLeft} />
              Task
            </Link>
          </header>
          <main>
            <form action=''>
              <div className={style.input__Nametask}>
                <Circle className={style.circle}></Circle>
                <input type='text' className={style.input} placeholder={'Name task'} value={nameTask}
                       onChange={event => setNameTask(event.target.value)} />
              </div>
              <textarea className={style.textarea} placeholder={'Description task...'} maxLength={630} value={textArea}
                        onChange={event => setTextArea(event.target.value)}>
                    </textarea>
            </form>
          </main>
          <footer className={style.footer}>
            <nav className={style.nav}>
              <Calendar className={style.svg}></Calendar>
              <div className={style.svg__block}></div>
              <FontAwesomeIcon className={style.svg} icon={faB} />
              <div className={style.svg__block}></div>
              <FontAwesomeIcon className={style.svg} icon={faI} />
              <div className={style.svg__block}></div>
              <FontAwesomeIcon className={style.svg} icon={faUnderline}></FontAwesomeIcon>
              {/*<div className={style.svg__block}></div>*/}
              {/*<FontAwesomeIcon className={style.svg} icon={faPaperclip}></FontAwesomeIcon>*/}
              <Link to={'/view-frame'} className={style.button}>
                Save
                <FontAwesomeIcon icon={faCheck} />
              </Link>
            </nav>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default EditFrame;
