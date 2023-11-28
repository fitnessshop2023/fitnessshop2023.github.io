import Input from '@/components/UI/Input/Input'
import Image from 'next/image'
import React from 'react'

export default function Details({ styles, tProfile, data }) {
  return (
    <div className={styles.details}>
        <div className={styles.details_head}>
            <h1>{tProfile('account.data.title')}</h1>
            <button className={styles.back_btn}>
                <Image src="/icons/arrow-left.svg" width={16} height={16} alt='arrow-left icon' />
                <span>{tProfile('back_to_accoutn')}</span>
            </button>
        </div>
        <div className={styles.details_body}>
            <form>
                
            </form>
        </div>
    </div>
  )
}
