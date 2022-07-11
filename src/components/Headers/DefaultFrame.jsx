import Header from './Header';
import styles from './Header.module.css';

export default function DefaultFrame(props) {
  return (
    <div className={styles.wrapper}>
      <Header title={props.title} left_buttons={props.left_buttons} />
      {props.children}
    </div>
  );
}
