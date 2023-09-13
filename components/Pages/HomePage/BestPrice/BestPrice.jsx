'use client';

import { useTranslations } from 'next-intl';

import { useGetPromotionQuery } from '@/redux/productsAPI';
import { ratingStars } from '@/utils/ratingStars';

import IconButton from '@/components/UI/IconButton/IconButton';
import Spinner from '@/components/UI/Spinner/Spinner';

import styles from './BestPrice.module.scss';

export default function BestPrice() {
  const t = useTranslations('homePage');
  const { data, isLoading, isSuccess } = useGetPromotionQuery();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section>
      <h2 className="mb-[24px]">{t('bestPrice')}</h2>
      <div className={styles.container}>
        {isSuccess &&
          data.map(({ article, urlImage, productName, price, promotionPrice, rating }) => (
            <div key={article}>
              <div className={styles.imgBlock}>
                <img src={urlImage} alt={productName} className="h-[113px]" />
              </div>
              <h3 className={styles.productTitle}>{productName}</h3>
              <div className={styles.ratingBlock}>
                <div className="flex">{ratingStars(rating)}</div>
                <span>{Math.round(rating * 2) / 2}</span>
              </div>
              <div className={styles.priceBlock}>
                <div>
                  <p className={styles.price}>{`${price} ${t('UAH')}`}</p>
                  <p className={styles.promotionPrice}>{`${promotionPrice} ${t('UAH')}`}</p>
                </div>
                <IconButton />
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
