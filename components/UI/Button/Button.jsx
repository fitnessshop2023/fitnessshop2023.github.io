import styles from './Button.module.scss';

export default function Button({ title }) {
  return <button className={styles.primary_btn}>{title}</button>;
}
