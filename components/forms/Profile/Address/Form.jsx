'use client'
import React, { useEffect, useState } from 'react';
import Button from '@/components/UI/Button/Button';
import Input from '@/components/UI/Input/Input';

import { yupResolver } from '@hookform/resolvers/yup';
import { useGetProfileDeliveryAdrQuery } from '@/redux/userApi';
import { useTranslations } from 'next-intl';
import Dropdown from '@/components/UI/Dropdown/Dropdown';
import { fetchCity, fetchDep, fetchRgion } from './NPapi';
import validationSchema from './validation';
import { useForm } from 'react-hook-form';



export default function Form({ info, styles }) {
  const tProfile = useTranslations('profile');
  const t = useTranslations('form');


  const {data, isSuccess, isLoading, isError} = useGetProfileDeliveryAdrQuery(info.userId);
  // console.log(data)

  const [regions, setRegions] = useState(null);
  const [cities, setCities] = useState(null);
  const [deps, setDeps] = useState(null);

  const [region, setRegion] = useState(null);
  const [city, setCity] = useState(null);
  const [dep, setDep] = useState('');

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(validationSchema(t)),
  });

  //GET regions
  const getRegions = async () => {
    try {
      let regions = await fetchRgion(region);
      setRegions(regions);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getRegions();
  }, [region])
  //clear loacl storage with region ref
  // useEffect(() => {
  //   localStorage.removeItem('ref');
  // }, [cities])

  //GET cities
  const getCities = async () => {
    try {
      let cities = await fetchCity(city);
      setCities(cities);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if(region) {
      getCities();
    }
  }, [region])

  //GET departments
  const getDeps = async () => {
    try {
      let deps = await fetchDep(city, dep);
      setDeps(deps);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    // getCities()
    if(city) {
      getCities()
      getDeps();
    }
  }, [city])

  //GET departments by entering the number
  useEffect(() => {
    if(city) {
      getDeps();
    }
  }, [dep])

  const onSubmit = async (data) => {
    try {
      console.log(data)
      // await updateProfilePassword(info.userId, data)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        disabled={false}
        type="text"
        placeholder={`${info.firstName} ${info.lastName}`}
        id="fullName"
        resetField={() => resetField('firstName')}
        name={t('label.fullName')}
        register={register}
        error={errors.fullName}
        errorMessage={errors.fullName?.message}
      />
      <Input
        disabled={false}
        type="tel"
        placeholder={info.phoneNumber}
        id="phoneNumber"
        resetField={() => resetField('phoneNumber')}
        name={t('label.phone')}
        register={register}
        error={errors.phoneNumber}
        errorMessage={errors.phoneNumber?.message}
      />
      <Dropdown
        list={regions}
        type="text"
        setPlaceholder={setRegion}
        placeholder={data?.region}
        id="region"
        name={t('label.region')}
        control={control}
        error={errors.region}
        errorMessage={errors.region?.message}
      />
      <Dropdown
        list={cities}
        type="text"
        setPlaceholder={setCity}
        placeholder={data?.city}
        id="city"
        name={t('label.city')}
        control={control}
        error={errors.city}
        errorMessage={errors.city?.message}
      />
      <Dropdown
        list={deps}
        type="text"
        setPlaceholder={setDep}
        placeholder={data?.department}
        id="department"
        name={t('label.department')}
        control={control}
        error={errors.department}
        errorMessage={errors.department?.message}
      />
      <Button title={tProfile('save')} />
    </form>
  );
}
