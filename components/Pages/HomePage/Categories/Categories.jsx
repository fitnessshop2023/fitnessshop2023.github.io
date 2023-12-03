'use client';

import { useGetCategoriesQuery } from '@/redux/categoriesApi';
import { useLocale } from 'next-intl';

import Spinner from '@/components/UI/Spinner/Spinner';

import styles from './Categories.module.scss';

export function Categories() {
  const { data, isLoading, isSuccess } = useGetCategoriesQuery();
  const locale = useLocale();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section>
      <div className={styles.container}>
        {isSuccess &&
          data.map(({ categoryId, nameCategory, translateName, iconHttp }) => (
            <div className={styles.categoryContainer} key={categoryId}>
              <img src={iconHttp} alt="" />
              <p className={styles.title}>{locale === 'en' ? translateName : nameCategory}</p>
            </div>
          ))}
      </div>
    </section>
  );
}
