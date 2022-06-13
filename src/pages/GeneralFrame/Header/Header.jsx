import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBell } from '@fortawesome/free-regular-svg-icons';

import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h2 className={styles.header__name}>Tassker</h2>
      <nav className={styles.header__nav_buttons}>
        <ul>
          <li>
            <FontAwesomeIcon icon={faBell} />
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
