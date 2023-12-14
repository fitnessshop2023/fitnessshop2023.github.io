'use client';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { checkUser } from '@/redux/authSlice';
import Head from 'next/head';
import Footer from '../Footer/Footer';

import styles from './MainContainer.module.scss';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';



export default function MainContainer({ children, keywords, title }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUser());
  }, []);

  return (
    <>
      <Header />
      <Navbar />
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  );
}
