import { useTranslations } from 'next-intl';
import styles from './UserLoginForm.module.scss';
import PrimaryButton from '@/components/UI/Button/PrimaryButton';

export default function UserLoginForm() {
  const t = useTranslations('login_form');
  return (
    <div className={styles.register_form}>
      <h2 className={styles.h2}>Login</h2>
      <form className="mt-4" action="">
          <label htmlFor="first-name" className={styles.label}>
          {t('username')}
          </label>
          <div className="mt-2">
            <input type="text" name="first-name" id="first-name" className={styles.input} placeholder="" />
          </div>
          <label htmlFor="first-name" className={styles.label}>
          {t('password')}
          </label>
          <div className="mt-2">
            <input type="password" name="first-name" id="first-name" className={styles.input} placeholder="" />
          </div>
          <div className="mt-4">
          <PrimaryButton>{t('login')}</PrimaryButton>
          </div>
      </form>
    </div>
  );
}
