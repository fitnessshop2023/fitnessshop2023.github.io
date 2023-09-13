'use client'
import { useLocale, useTranslations } from 'next-intl';
import LanguageLink from 'next-intl/link'
import styles from './TopNavbar.module.scss';
import { useTransition } from 'react';
import { usePathname, useRouter } from 'next-intl/client';
import LocaleSwitcher from '../LocaleSwitcher/LocaleSwitcher';

export default function TopNavbar() {
    const t = useTranslations('navbar');

    return (
        <nav className={styles.nav}>
            <div className={styles.search_block}>
                <input className={styles.input} type="text" name="search" id="search" placeholder={t('search')} />
                <button className={styles.btn}>
                    <img src="/icons/search_icon.svg" alt="search" />
                </button>
            </div>
            <div className={styles.lang_switcher}>
                {/* <LanguageLink href="/" locale="ua">
                    Укр
                </LanguageLink>
                <LanguageLink href="/" locale="en">
                    En
                </LanguageLink> */}
                <LocaleSwitcher/>
            </div>
        </nav>
    )
}
