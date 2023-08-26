'use client';

import { useState } from 'react';

import styles from './Alert.module.scss';

export default function Alert({ success, error, message }) {
  const [showAlert, setShowAlert] = useState(success || error);

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
                  onClick={() => setShowAlert(false)}
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
