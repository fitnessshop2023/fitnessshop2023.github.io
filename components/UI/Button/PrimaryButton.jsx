import React from 'react';
import styles from './PrimaryButton.module.scss';

export default function PrimaryButton({ children }) {
  return (
    <button className={styles.primary_btn}>{children}</button>
  )
}
