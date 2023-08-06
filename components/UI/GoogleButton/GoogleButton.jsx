import styles from './GoogleButton.module.scss';

export default function GoogleButton({ title }) {
  return (
    <button className={styles.googleButton}>
      <div className={styles.googleIcon}>
        <img src="/icons/google.svg" />
      </div>
      <span className="font-medium">{title}</span>
    </button>
  );
}
