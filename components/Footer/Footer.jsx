import { useTranslations } from 'next-intl';

import styles from './Footer.module.scss';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className={styles.footer}>
      <img src="/icons/footer_logo.svg" alt="logo" />
      <div className="w-full">
        <label className={styles.label} htmlFor="email">
          {t('emailDistribution')}
        </label>
        <div className="relative">
          <input className={styles.input} type="text" name="email" id="email" placeholder={t('emailPlaceholder')} />
          <div className={styles.mailingIcon}>
            <img src="/icons/footer_mailing.svg" />
          </div>
        </div>
      </div>
      <div className={styles.socials}>
        <p className="text-xs">{t('blog')}</p>
        <div className="flex gap-16">
          {/* Add link on social medias */}
          <a href="#">
            <img src="/icons/instagram.svg" alt="instagram" />
          </a>
          <a href="#">
            <img src="/icons/facebook.svg" alt="facebook" />
          </a>
          <a href="#">
            <img src="/icons/tiktok.svg" alt="tiktok" />
          </a>
        </div>
      </div>
      <div className={styles.contacts}>
        {/* add links on phone and mail */}
        <p className="font-semibold">{t('connect')}</p>
        <a className={styles.contact_item} href="tel:+380123456789">
          <img src="/icons/footer_phone.svg" alt="phone" />
          <span>+380 (12) 345 67 89</span>
        </a>
        <a className={styles.contact_item} href="mailto:example@gmail.com">
          <img src="/icons/footer_mail.svg" alt="mail" />
          <span>example@gmail.com</span>
        </a>
      </div>
      <p className="text-xs text-white">©Copyright 2023 Sport area</p>
    </footer>
  );
}
