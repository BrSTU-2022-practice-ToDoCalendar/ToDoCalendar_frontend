import styles from './Container.module.css';

function Container(props) {
  return <div className={styles.container}>{props.InnerHTML}</div>;
}

export default Container;
