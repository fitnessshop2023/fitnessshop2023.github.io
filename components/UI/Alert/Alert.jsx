'use client';

import { useState } from 'react';

import styles from './Alert.module.scss';
import { useRouter } from 'next/navigation';

export default function Alert({ toProfile, success, error, message }) {
  const router = useRouter()
  const [showAlert, setShowAlert] = useState(success || error);

  const closeHandler = () => {
    if (toProfile) {
      router.push('/profile');
    }
    setShowAlert(false);
  }

  return (
    <>
      {showAlert ? (
        <>
          <div className={styles.alertPosition}>
            <div className={styles.alertWidth}>
              <div
                className={`${styles.alertContainer} ${success ? styles.alertSuccess : ''} ${
                  error ? styles.alertError : ''
                }`}>
                <div className="flex gap-3 items-center">
                  {success && <img src="/icons/alert-success.svg" />}
                  {error && <img src="/icons/alert-danger.svg" />}
                  <span className="text-sm text-black/100">{message}</span>
                </div>
                <img
                  src="/icons/close.svg"
                  className="cursor-pointer w-[20px] h-[20px]"
                  onClick={closeHandler}
                />
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
