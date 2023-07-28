'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import Input from '../../UI/Input/Input';
import schema from './validation';

export default function UserRegistrationForm() {
  const t = useTranslations('registration_form');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form action="" className="flex justify-center flex-col gap-[23px] p-4 " onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        placeholder="Enter your first name"
        id="firstName"
        name={t('label.firstName')}
        register={register}
        error={errors.firstName}
        errorMessage={errors.firstName?.message}
      />
      <Input
        type="text"
        placeholder={t('placeholder.lastName')}
        id="lastName"
        name={t('label.lastName')}
        register={register}
        error={errors.lastName}
        errorMessage={errors.lastName?.message}
      />
      <Input
        type="tel"
        placeholder={t('placeholder.phone')}
        id="phoneNumber"
        name={t('label.phone')}
        register={register}
        error={errors.phoneNumber}
        errorMessage={errors.phoneNumber?.message}
      />
      <Input
        type="text"
        placeholder={t('placeholder.email')}
        id="email"
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
        showPassword
      />
      <button className="bg-orange-500 p-2 rounded-md max-w-fit m-auto text-white">Sign In</button>
    </form>
  );
}
