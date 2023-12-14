'use client'
import MainContainer from "@/components/MainContainer/MainContainer";
import { useDispatch, useSelector } from 'react-redux';
import { useTranslations } from 'next-intl';
import { useGetProfileInofQuery } from '@/redux/userApi';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.scss';
import { usePathname } from "next/navigation";
import Spinner from "@/components/UI/Spinner/Spinner";
import { useEffect, useState } from "react";
import { logout } from "@/redux/authSlice";

export default function page() {
  const dispatch = useDispatch();
  const [pagloading, setPageloading] = useState(false);
  const pathname = usePathname()
  const tProfile = useTranslations('profile');

  const auth = useSelector((state) => state.auth);

  const { data: info, isLoading} = useGetProfileInofQuery(auth?.userId);

  useEffect(() => {
    setTimeout(() => {
      setPageloading(true)
    }, 500);
  })

  const logoutHandler = () => {
    console.log(auth);
    dispatch(logout(auth));
  }

  if (!pagloading) {
    return <MainContainer><Spinner/></MainContainer>
  }
  return (
    <MainContainer>
      {auth.isAuth ? (
        <div className={styles.profiel_page}>
          {isLoading && <Spinner/>}
          <div className={styles.head}>
            <h1>{tProfile('title')}, {info?.firstName} {info?.lastName}</h1>
          </div>
          <div className={styles.profile_inner}>
            <h2>{tProfile('goods.title')}</h2>
            <ul className={styles.inner_list}>
                <li>
                  <Link href={`${pathname}/orders`} className={styles.btn} data-target="orders">
                    <div className={styles.btn_text}>
                      <Image src="/icons/orders.svg" width={24} height={24} alt='Orders icon'/>
                      <span>{tProfile('goods.orders.title')}</span>
                    </div>
                    <Image src="/icons/arrow-right.svg" width={16} height={16} alt='Arrow-right icon'/>
                  </Link>
                </li>
                <li>
                  <Link href="#" className={styles.btn}>
                    <div className={styles.btn_text}>
                      <Image src="/icons/reviews.svg" width={24} height={24} alt='Reviews icon'/>
                      <span>{tProfile('goods.reviews')}</span>
                    </div>
                    <Image src="/icons/arrow-right.svg" width={16} height={16} alt='Arrow-right icon'/>
                  </Link>
                </li>
            </ul>
            <h2>{tProfile('account.title')}</h2>
            <ul className={styles.inner_list}>
                <li>
                  <Link href={`${pathname}/details`} className={styles.btn} data-target="details" onClick={(e) => openInfo(e)}>
                    <div className={styles.btn_text}>
                      <Image src="/icons/my_data.svg" width={24} height={24} alt='Profile icon'/>
                      <span>{tProfile('account.data.title')}</span>
                    </div>
                    <Image src="/icons/arrow-right.svg" width={16} height={16} alt='Arrow-right icon'/>
                  </Link>
                </li>
                <li>
                  <Link href={`${pathname}/address`} className={styles.btn}>
                    <div className={styles.btn_text}>
                      <Image src="/icons/geo.svg" width={24} height={24} alt='Geo icon'/>  
                      <span>{tProfile('account.delivery_address.title')}</span>
                    </div>
                    <Image src="/icons/arrow-right.svg" width={16} height={16} alt='Arrow-right icon'/>
                  </Link>
                </li>
                <li>
                  <Link href="#" className={styles.btn}>
                    <div className={styles.btn_text}>
                      <Image src="/icons/payments.svg" width={24} height={24} alt='Payments icon'/>  
                      <span>{tProfile('account.payment_methods')}</span>
                    </div>
                    <Image src="/icons/arrow-right.svg" width={16} height={16} alt='Arrow-right icon'/>
                  </Link>
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
          <Link href={`${pathname}/change-password`} className={styles.logout}>
            <Image src="/icons/show.svg" width={16} height={16} alt='show icon'/>
            <span>{tProfile('change_password')}</span>
          </Link>
          <button className={styles.logout} onClick={logoutHandler}>
            <Image src="/icons/logout.svg" width={16} height={16} alt='Logout icon'/>
            <span>{tProfile('logout')}</span>
          </button>
          <button className={styles.logout}>
            <Image src="/icons/trash_black.svg" width={16} height={16} alt='Logout icon'/>
            <span>{tProfile('delete')}</span>
          </button>
        </div>
      ) : (
        <>
          <h1>{tProfile('noAuth')}</h1>
        </>
      )}
    </MainContainer>
  );
}
