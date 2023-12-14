'use client'
import { useGetProfileOrdersQuery } from '@/redux/userApi';
import React from 'react'
import { useSelector } from 'react-redux';
import styles from './page.module.scss'
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import MainContainer from '@/components/MainContainer/MainContainer';
import { useRouter } from 'next/navigation';
import Spinner from '@/components/UI/Spinner/Spinner';

export const metadata = {
    title: 'Sport Area',
}

export default function page() {
    const router = useRouter();
    const auth = useSelector((state) => state.auth);
    const tProfile = useTranslations('profile');

    const { data: orders, isLoading } = useGetProfileOrdersQuery(auth?.userId);
    console.log(orders);
    
    return (
        <MainContainer>
            <div className={styles.orders}>
                <div className={styles.orders_head}>
                    <h1>{tProfile('goods.orders.title')}</h1>
                    <button className={styles.back_btn} onClick={() => router.back()}>
                        <Image src="/icons/arrow-left.svg" width={16} height={16} alt='arrow-left icon' />
                        <span>{tProfile('back_to_account')}</span>
                    </button>
                </div>
                {isLoading && <Spinner />}
                <div className={styles.orders_body}>
                    <ul className={styles.orders_list}>
                        { orders && orders.map(({ orderId, products, orderStatus, orderTotalPrice }) => (
                            <li className={styles.ordre_item} key={orderId}>
                                <div className={styles.img_wrapper}>
                                    {
                                        products.slice(0, 4).map( ({ productName, urlImage }) => (
                                            <img src={urlImage} alt={productName}/>
                                        ))
                                    }
                                </div>
                                <div className={styles.description}>
                                    <h2>{tProfile('goods.orders.title')} № {orderId}</h2>
                                    <p>{tProfile('goods.orders.status')}: <span className={`${styles.status} ${styles}.${orderStatus}`}>{orderStatus}</span></p>
                                    <p>{tProfile('goods.orders.sum')}: <span className={styles.sum}>{orderTotalPrice}</span></p>
                                    <button>
                                        <span>{tProfile('goods.orders.more')}</span>
                                        <Image src="/icons/arrow-left.svg" width={16} height={16} alt='arrow-left icon' />
                                    </button>
                                </div>
                                <ul className={styles.products}>
                                    {
                                        products.map( ({ productId, productName, urlImage, productQuantity, productPrice }) => (
                                            <li className={styles.product} key={productId}>
                                                <div className={styles.img_wrapper}>
                                                    <img src={urlImage} alt={productName} />
                                                </div>
                                                <div className={styles.product_info}>
                                                    <h3>{productName}</h3>
                                                    <p>{tProfile('goods.orders.quantity')}: {productQuantity}</p>
                                                    <p>{tProfile('goods.orders.price')}: {productPrice}</p>
                                                </div>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </MainContainer>
    )
}
