'use client';

import { useGetCompanyReviewsQuery } from '@/redux/reviewsApi';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

import styles from './CustomerReviews.module.scss';

export default function CustomerReviews() {
  const { data, isSuccess } = useGetCompanyReviewsQuery();
  const [currentIndex, setCurrentIndex] = useState(0);
  const t = useTranslations('customerReviews');

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (data && currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <section className="mt-[35px] overflow-hidden">
      <div className="flex justify-between">
        <h2>{t('customerReviews')}</h2>
        <div className="flex gap-3">
          <button onClick={handlePrevClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15.09 19.9201L8.56997 13.4001C7.79997 12.6301 7.79997 11.3701 8.56997 10.6001L15.09 4.08008"
                stroke={currentIndex === 0 ? '#7C7C7C' : '#242424'}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button onClick={handleNextClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008"
                stroke={isSuccess && currentIndex === data.length - 1 ? '#7C7C7C' : '#242424'}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className={styles.reviewBlock} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {isSuccess &&
          data.map(({ message, commentId, userDTO }) => (
            <div className={styles.wrapper} key={commentId}>
              <span className={styles.customer}>{userDTO.firstName}</span>
              <p className={styles.comment}>{message}</p>
            </div>
          ))}
      </div>
    </section>
  );
}
