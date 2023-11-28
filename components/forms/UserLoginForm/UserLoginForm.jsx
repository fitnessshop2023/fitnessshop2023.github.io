import { useLoginMutation } from '@/redux/userApi';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import Alert from '@/components/UI/Alert/Alert';
import Button from '@/components/UI/Button/Button';
import GoogleButton from '@/components/UI/GoogleButton/GoogleButton';
import Input from '@/components/UI/Input/Input';
import Spinner from '@/components/UI/Spinner/Spinner';
import { setUser, toggleRememberMe } from '@/redux/authSlice';
import validationSchema from './validation';

import styles from './UserLoginForm.module.scss';

export default function UserLoginForm({ setRenderForm, setIsOpen }) {
  const dispatch = useDispatch();
  const rememberMe = useSelector((state) => state.auth.rememberMe);
  const [showAlert, setShowAlert] = useState(true);
  const [login, { isLoading, data, isError, isSuccess, error }] = useLoginMutation();
  const t = useTranslations('login_form');

  const {
    register,
    handleSubmit,
    resetField,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema(t)),
  });

  useEffect(() => {
    if (isSuccess) {
      const { token, userId } = data;
      dispatch(setUser({ token, userId }));
      reset();
      setIsOpen(false);
    }

    if (isError) {
      setShowAlert(true);

      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isError, isSuccess]);

  const onSubmit = async (user) => {
    try {
      await login(user);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  const handleToggleRememberMe = () => {
    dispatch(toggleRememberMe());
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
        <div className={styles.rememberMeContainer}>
          <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
            <input
              className={styles.checkbox}
              type="checkbox"
              id="checkboxChecked"
              checked={rememberMe}
              onChange={handleToggleRememberMe}
            />
            <label className="inline-block pl-[0.15rem] hover:cursor-pointer text-xs" htmlFor="checkboxChecked">
              {t('title.rememberMe')}
            </label>
          </div>
          <span className="text-sm underline hover:text-primary hover:cursor-pointer">{t('title.forgotPassword')}</span>
        </div>
        <div className={styles.buttonsContainer}>
          <Button title={t('title.SignIn')} />
          <GoogleButton title={t('title.SignInGoogle')} />
        </div>
      </form>
      <div className={styles.signUpContainer}>
        <span className="text-xs">{t('title.noAcc')}</span>
        <span className={styles.signUp} onClick={() => setRenderForm('registration')}>
          {t('title.signUp')}
        </span>
      </div>
      {showAlert && isError && <Alert error={true} message={error?.data} />}
    </>
  );
}
