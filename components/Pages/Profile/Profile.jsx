'use client';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import styles from './Profile.module.scss';
import { useTranslations } from 'next-intl';
import { useGetProfileCommentsQuery, useGetProfileDeliveryAdrQuery, useGetProfileInofQuery } from '@/redux/userApi';
import Link from 'next/link';
import Details from './Details';

export default function Profile() {
  const tProfile = useTranslations('profile');

  const auth = useSelector((state) => state.auth);
  console.log(auth);

  const { data: data1 } = useGetProfileInofQuery(auth?.userId);
  const info = data1;
  console.log(info);

  const { data: data2 } = useGetProfileDeliveryAdrQuery(auth?.userId);
  const deliveryAdr = data2;
  console.log(deliveryAdr);

  const { data: data3 } = useGetProfileCommentsQuery(auth?.userId);
  const comments = data3;
  console.log(comments);

  return (
    <>
      {auth.isAuth ? (
        <div className={styles.profiel_page}>
          <div className={styles.head}>
            <h1>{tProfile('title')}, {info?.firstName} {info?.lastName}</h1>
          </div>
          <div className={styles.profile_inner}>
            <h2>{tProfile('goods.title')}</h2>
            <ul className={styles.inner_list}>
                <li>
                  <button>
                    <Image src="/icons/orders.svg" width={24} height={24} alt='Orders icon'/>
                    <span>{tProfile('goods.orders')}</span>
                  </button>
                  <Image src="/icons/arrow-right.svg" width={16} height={16} alt='Arrow-right icon'/>
                </li>
                <li>
                  <button>
                    <Image src="/icons/reviews.svg" width={24} height={24} alt='Reviews icon'/>
                    <span>{tProfile('goods.reviews')}</span>
                  </button>
                  <Image src="/icons/arrow-right.svg" width={16} height={16} alt='Arrow-right icon'/>
                </li>
            </ul>
            <h2>{tProfile('account.title')}</h2>
            <ul className={styles.inner_list}>
                <li>
                  <button>
                    <Image src="/icons/my_data.svg" width={24} height={24} alt='Profile icon'/>
                    <span>{tProfile('account.data.title')}</span>
                  </button>
                  <Image src="/icons/arrow-right.svg" width={16} height={16} alt='Arrow-right icon'/>
                  <Details styles={styles} data={info} tProfile={tProfile}/>
                </li>
                <li>
                  <button>
                    <Image src="/icons/geo.svg" width={24} height={24} alt='Geo icon'/>  
                    <span>{tProfile('account.delivery_address')}</span>
                  </button>
                  <Image src="/icons/arrow-right.svg" width={16} height={16} alt='Arrow-right icon'/>
                </li>
                <li>
                  <button>
                    <Image src="/icons/payments.svg" width={24} height={24} alt='Payments icon'/>  
                    <span>{tProfile('account.payment_methods')}</span>
                  </button>
                  <Image src="/icons/arrow-right.svg" width={16} height={16} alt='Arrow-right icon'/>
                </li>
            </ul>
          </div>
          <div className={styles.contact_us}>
            <h2>{tProfile('contact_us')}</h2>
            <ul>
                <li>
                    <Link href={'/'}>
                        <Image src="/icons/instagram_black.svg" alt="instagram" width={24} height={24}/>
                    </Link>
                </li>
                <li>
                    <Link href={'/'}>
                        <Image src="/icons/facebook_black.svg" alt="facebook" width={24} height={24}/>
                    </Link>
                </li>
                <li>
                    <Link href={'/'}>
                        <Image src="/icons/tiktok_black.svg" alt="tiktok" width={24} height={24}/>
                    </Link>
                </li>
            </ul>
          </div>
          <button className={styles.logout}>
            <Image src="/icons/logout.svg" width={16} height={16} alt='Logout icon'/>
            <span>{tProfile('contact_us')}</span>
          </button>
        </div>
      ) : (
        <h1>{tProfile('noAuth')}</h1>
      )}
    </>
  );
}
