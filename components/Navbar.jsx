'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import LanguageLink from 'next-intl/link';
import Link from 'next/link';

import UserLoginForm from './forms/UserLoginForm/UserLoginForm';
import UserRegistrationForm from './forms/UserRegistrationForm/UserRegistrationForm';
import ModalWindow from './ModalWindow/ModalWindow';

import styles from '@/styles/Navbar.module.scss';

export default function Navbar() {
  const t = useTranslations('navbar');
  const tLoginForm = useTranslations('login_form');
  const tRegForm = useTranslations('registration_form');

  const [isOpen, setIsOpen] = useState(false);
  const [renderForm, setRenderForm] = useState('login');
  const openModal = () => setIsOpen(true);

  return (
    <div className={styles.navbar}>
      <button onClick={openModal}>Login</button>
      <ModalWindow
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        title={renderForm === 'login' ? tLoginForm('title.login') : tRegForm('title.registration')}>
        {renderForm === 'login' && <UserLoginForm setRenderForm={setRenderForm} />}
        {renderForm === 'registration' && <UserRegistrationForm setRenderForm={setRenderForm} />}
      </ModalWindow>
      <Link href="/">
        <span className={styles.navbar_item}>{t('home')}</span>
      </Link>
      {/* <Link href="/users">
        <span className={styles.navbar_item}>{t('users')}</span>
      </Link> */}
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
