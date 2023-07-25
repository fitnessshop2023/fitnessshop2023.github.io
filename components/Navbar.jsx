import styles from '@/styles/Navbar.module.scss';
import { useTranslations } from 'next-intl';
import LanguageLink from 'next-intl/link';
import Link from 'next/link';

export default function Navbar() {
  const t = useTranslations('navbar');
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <span className={styles.navbar_item}>{t('home')}</span>
      </Link>
      <Link href="/users">
        <span className={styles.navbar_item}>{t('users')}</span>
      </Link>
      <div className={styles.languageBlock}>
        <LanguageLink href="/" locale="en">
          EN
        </LanguageLink>
        <LanguageLink href="/" locale="ua">
          UA
        </LanguageLink>
      </div>
    </div>
  );
}
