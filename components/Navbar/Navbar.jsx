'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next-intl/client';
import Link from 'next/link';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import UserLoginForm from '../forms/UserLoginForm/UserLoginForm';
import UserRegistrationForm from '../forms/UserRegistrationForm/UserRegistrationForm';
import ModalWindow from '../ModalWindow/ModalWindow';

import styles from './Navbar.module.scss';

export default function Navbar() {
  const isAuth = useSelector((state) => state.auth.isAuth);

  const pathname = usePathname();

  const tLoginForm = useTranslations('login_form');
  const tRegForm = useTranslations('registration_form');

  const [isOpen, setIsOpen] = useState(false);
  const [renderForm, setRenderForm] = useState('login');

  const checkActiveLink = (link) => {
    if (pathname === `/${link}`) {
      return `/icons/navbar_${link}_active.svg`;
    }
    if (pathname === '/' && !link) {
      return `/icons/navbar_home_active.svg`;
    }
    return link ? `/icons/navbar_${link}.svg` : `/icons/navbar_home.svg`;
  };

  return (
    <>
      {/* <div className={styles.navbar2}>
        <div className={styles.languageBlock}>
          <LanguageLink href="/" locale="en">
            EN
          </LanguageLink>
          <LanguageLink href="/" locale="ua">
            UA
          </LanguageLink>
        </div>
      </div> */}
      <nav className={styles.navbar}>
        <ModalWindow
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          title={renderForm === 'login' ? tLoginForm('title.login') : tRegForm('title.registration')}>
          {renderForm === 'login' && <UserLoginForm setRenderForm={setRenderForm} setIsOpen={setIsOpen} />}
          {renderForm === 'registration' && <UserRegistrationForm setRenderForm={setRenderForm} />}
        </ModalWindow>
        <div className={styles.menu}>
          <Link href="/">
            <img src={checkActiveLink()} />
          </Link>
          <Link href="/basket">
            <img src={checkActiveLink('basket')} />
          </Link>
          {isAuth ? (
            <Link href="/profile">
              <img src={checkActiveLink('profile')} />
            </Link>
          ) : (
            <img src="/icons/navbar_profile.svg" onClick={() => setIsOpen(true)} className="cursor-pointer" />
          )}
          <Link href="/more">
            <img src={checkActiveLink('more')} />
          </Link>
        </div>
      </nav>
    </>
  );
}
