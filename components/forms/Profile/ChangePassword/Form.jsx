'use client'
import React, { useEffect, useState } from 'react';
import Button from '@/components/UI/Button/Button';
import Input from '@/components/UI/Input/Input';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useUpdateProfilePasswordMutation } from '@/redux/userApi';
import validation from './validation';
import { useTranslations } from 'next-intl';
import Alert from '@/components/UI/Alert/Alert';
import { useRouter } from 'next/navigation';

export default function Form({ info, styles }) {
  const router = useRouter();
  const tProfile = useTranslations('profile');
  const t = useTranslations('form');
  const [showAlert, setShowAlert] = useState(false);
  const [updateProfilePassword, { isLoading, isSuccess, isError, error } ] = useUpdateProfilePasswordMutation();

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

  const onSubmit = async (data) => {
    try {
      await updateProfilePassword({ id: info.userId, data });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          disabled={false}
          type="password"
          placeholder={t('placeholder.current')}
          id="oldPassword"
          resetField={() => resetField('password')}
          name={t('label.password')}
          register={register}
          error={errors.oldPassword}
          errorMessage={errors.oldPassword?.message}
        />
        <Input
          disabled={false}
          type="password"
          placeholder={t('placeholder.new')}
          id="newPassword"
          resetField={() => resetField('password')}
          name={t('label.newPassword')}
          register={register}
          error={errors.newPassword}
          errorMessage={errors.newPassword?.message}
        />
        <Button title={tProfile('save')} />
      </form>
      {showAlert && isSuccess && <Alert toProfile={true} success={true} message={t('change_password.success')} />}
      {showAlert && isError && <Alert error={true} message={error?.data?.message} />}
    </>
  );
}
