import styles from './UserRegistrationForm.module.scss';

export default function UserRegistrationForm() {
  return (
    <form action="">
      <div className="sm:col-span-3">
        <label htmlFor="first-name" className={styles.label}>
          First name
        </label>
        <div className="mt-2">
          <input type="text" name="first-name" id="first-name" className={styles.input} placeholder="" />
        </div>
      </div>
    </form>
  );
}
