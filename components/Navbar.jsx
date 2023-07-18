import Link from 'next/link'
import React from 'react'
import styles from "@/styles/Navbar.module.scss"

export default function Navbar() {
  return (
    <div className={styles.navbar}>
        <Link href="/">
            <span className={styles.navbar_item}>Home</span>
        </Link>
        <Link href="/users">
            <span className={styles.navbar_item}>Users</span>
        </Link>
  </div>
  )
}
