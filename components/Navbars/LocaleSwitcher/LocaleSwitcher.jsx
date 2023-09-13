'use client'
import { useLocale, useTranslations } from "next-intl"
import LanguageLink from 'next-intl/link';
import styles from './LocaleSwitcher.module.scss';
import { useState, useEffect } from "react";

export default function LocaleSwitcher() {
    const t = useTranslations('LocaleSwitcher');
    const locale = useLocale();
    const [dropdownVisibility, setDropdownVisibility] = useState(false);

    const toggleDropdownVisibility = () => {
        setDropdownVisibility(!dropdownVisibility);
    }
    useEffect(() => {
        const closeDropdown = () => {
          if (dropdownVisibility) {
            setDropdownVisibility(false);
          }
        };
      
        document.addEventListener('click', closeDropdown);
        return () => {
          document.removeEventListener('click', closeDropdown);
        };
    }, [dropdownVisibility]);

    return (
        <div className={styles.locale_switcher}>
            <div className={styles.dropdown}>
                <div className={styles.dropdown_btn} onClick={toggleDropdownVisibility}>
                    <p className={styles.p}>
                        {locale === 'ua' ? t('ua') : locale === 'en' ? t('en') : t('en')}
                    </p>
                    <img src="/icons/down_arrow.svg" alt="search" />
                </div>
                <div className={`${styles.dropdown_contnent} ${dropdownVisibility ? styles.show : ''}`}>
                    {(() => {
                        if (locale === 'ua') {
                        return <LanguageLink href="/" locale="en">{t('en')}</LanguageLink>;
                        } else if (locale === 'en') {
                        return <LanguageLink href="/" locale="ua">{t('ua')}</LanguageLink>;
                        } else {
                        return '';
                        }
                    })()}
                </div>
            </div>
      </div>
    )
}
