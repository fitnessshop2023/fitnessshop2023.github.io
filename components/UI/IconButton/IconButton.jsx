import styles from './IconButton.module.scss';

export default function IconButton() {
  return (
    <button className={styles.button}>
      <img src="icons/trash.svg" />
    </button>
  );
}
