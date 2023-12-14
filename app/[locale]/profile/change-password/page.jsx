'use client'
import MainContainer from '@/components/MainContainer/MainContainer'
import styles from './page.module.scss'
import Form from '@/components/forms/Profile/ChangePassword/Form'
import { useGetProfileInofQuery } from '@/redux/userApi';
import { useTranslations } from 'next-intl';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Spinner from '@/components/UI/Spinner/Spinner';

export default function page() {
    const router = useRouter();
    const auth = useSelector((state) => state.auth);
    console.log(auth)
    const tProfile = useTranslations('profile');
  
  
    const { data: info, isLoading, isSuccess } = useGetProfileInofQuery(auth?.userId);
    console.log(info);

    return (
        <MainContainer>
            <div className={styles.password}>
                {isLoading && <Spinner />}
                {isSuccess && (
                    <>
                        <div className={styles.password_head}>
                            <h1>{tProfile('change_password')}</h1>
                            <button className={styles.back_btn} onClick={() => router.back()}>
                                <Image src="/icons/arrow-left.svg" width={24} height={24} alt='arrow-left icon' />
                            </button>
                        </div>
                        <div className={styles.password_body}>
                            <Form info={info} styles={styles} />
                        </div>
                    </>
                )}
            </div>
        </MainContainer>
    )
}
