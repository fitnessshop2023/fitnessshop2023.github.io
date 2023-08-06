'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from '@/components/UI/Button/Button';
import GoogleButton from '@/components/UI/GoogleButton/GoogleButton';
import Input from '@/components/UI/Input/Input';
import Spinner from '@/components/UI/Spinner/Spinner';
import validationSchema from './validation';

import styles from './UserRegistrationForm.module.scss';

export default function UserRegistrationForm({ setRenderForm }) {
  const [loading, setLoading] = useState(false);
  const t = useTranslations('registration_form');

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema(t)),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/registration`, data);
      return response;
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <GoogleButton title={t('title.googleRegister')} />
      <div className={styles.or}>{t('title.or')}</div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder={t('placeholder.firstName')}
          id="firstName"
          resetField={() => resetField('firstName')}
          name={t('label.firstName')}
          register={register}
          error={errors.firstName}
          errorMessage={errors.firstName?.message}
        />
        <Input
          type="text"
          placeholder={t('placeholder.lastName')}
          id="lastName"
          resetField={() => resetField('lastName')}
          name={t('label.lastName')}
          register={register}
          error={errors.lastName}
          errorMessage={errors.lastName?.message}
        />
        <Input
          type="tel"
          placeholder={t('placeholder.phone')}
          id="phoneNumber"
          resetField={() => resetField('phoneNumber')}
          name={t('label.phone')}
          register={register}
          error={errors.phoneNumber}
          errorMessage={errors.phoneNumber?.message}
        />
        <Input
          type="text"
          placeholder={t('placeholder.email')}
          id="email"
          resetField={() => resetField('email')}
          name={t('label.email')}
          register={register}
          error={errors.email}
          errorMessage={errors.email?.message}
        />
        <Input
          type="password"
          placeholder={t('placeholder.password')}
          id="password"
          name={t('label.password')}
          register={register}
          error={errors.password}
          errorMessage={errors.password?.message}
        />
        <Button title={t('title.register')} />
      </form>
      <div className={styles.loginContainer}>
        <span className="text-xs">{t('title.haveAnAccount')}</span>
        <span className={styles.login} onClick={() => setRenderForm('login')}>
          {t('title.login')}
        </span>
      </div>
    </>
  );
}
