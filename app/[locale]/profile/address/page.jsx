'use client';
import MainContainer from '@/components/MainContainer/MainContainer';
import Spinner from '@/components/UI/Spinner/Spinner';
import { useGetProfileInofQuery } from '@/redux/userApi';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import styles from './page.module.scss';
import Form from '@/components/forms/Profile/Address/Form';



export default function page() {
  const router = useRouter();
  const auth = useSelector((state) => state.auth);
  const tProfile = useTranslations('profile');

  const { data: info, isLoading, isSuccess } = useGetProfileInofQuery(auth?.userId);

  return (
    <MainContainer>
      <div className={styles.address}>
        {isLoading && <Spinner />}
        {isSuccess && (
          <>
            <div className={styles.address_head}>
              <button className={styles.back_btn} onClick={() => router.back()}>
                <Image src="/icons/arrow-left.svg" width={24} height={24} alt="arrow-left icon" />
              </button>
              <h1>{tProfile('account.delivery_address.title')}</h1>
            </div>
            <div className={styles.address_body}>
              <Form info={info} styles={styles} />
            </div>
          </>
        )}
      </div>
    </MainContainer>
  );
}
