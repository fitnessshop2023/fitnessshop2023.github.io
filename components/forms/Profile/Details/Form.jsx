'use client'
import React, { useEffect, useState } from 'react';
import Button from '@/components/UI/Button/Button';
import Input from '@/components/UI/Input/Input';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useUpdateProfileInfoMutation } from '@/redux/userApi';
import validation from './validation'
import { useTranslations } from 'next-intl';
import Alert from '@/components/UI/Alert/Alert';
import { useRouter } from 'next/navigation';
import Spinner from '@/components/UI/Spinner/Spinner';

export default function Form({ info, styles }) {
  const router = useRouter()
  const tProfile = useTranslations('profile');
  const t = useTranslations('form');
  const [ updateProfileInfo, { isLoading, isSuccess, isError, error } ] = useUpdateProfileInfoMutation();
  const [showAlert, setShowAlert] = useState(false);

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validation(t)),
  });

  useEffect(() => {
    if (isSuccess || isError) {
      setShowAlert(true);
      const timer = setTimeout(() => {
        setShowAlert(false);
        if (isSuccess) {
          router.push('/profile');
        }
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isSuccess, isError]);

  const onSubmit = async (user) => {
    try {
      console.log(user)
      await updateProfileInfo({ id: info.userId, user });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        {isLoading && 
          <div className='absolute left-[50%] top-0 translate-x-[-50%]'>
            <Spinner />
          </div>
        }
        <Input
          disabled={true}
          type="text"
          placeholder={info.firstName}
          id="firstName"
          resetField={() => resetField('firstName')}
          name={t('label.firstName')}
          register={register}
          error={errors.firstName}
          errorMessage={errors.firstName?.message}
        />
        <Input
          disabled={true}
          type="text"
          placeholder={info.lastName}
          id="lastName"
          resetField={() => resetField('lastName')}
          name={t('label.lastName')}
          register={register}
          error={errors.lastName}
          errorMessage={errors.lastName?.message}
        />
        <Input
          disabled={true}
          type="tel"
          placeholder={info.phoneNumber}
          id="phoneNumber"
          resetField={() => resetField('phoneNumber')}
          name={t('label.phone')}
          register={register}
          error={errors.phoneNumber}
          errorMessage={errors.phoneNumber?.message}
        />
        <Input
          disabled={true}
          type="text"
          placeholder={info.email}
          id="email"
          resetField={() => resetField('email')}
          name={t('label.email')}
          register={register}
          error={errors.email}
          errorMessage={errors.email?.message}
        />
        <Button title={tProfile('save')} />
      </form>
      {showAlert && isSuccess && <Alert toProfile={true} success={true} message={t('details_change.success')} />}
      {showAlert && isError && <Alert error={true} message={error?.data?.message} />}
    </>
  );
}
