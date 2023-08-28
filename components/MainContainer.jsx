'use client';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { checkUser } from '@/redux/authSlice';
import Head from 'next/head';
import Navbar from './Navbar/Navbar';

export default function MainContainer({ children, keywords }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUser());
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta keywords={'NextJS, Test, ' + keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div>{children}</div>
    </>
  );
}
