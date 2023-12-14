import * as yup from 'yup';

const fieldValidation = (t) => ({
  fullName: yup
    .string()
    .transform((originalValue) => (originalValue ? originalValue.trim() : undefined))
    .min(3, t('validation.minLength').replace('field', 3))
    .max(30, t('validation.maxLength').replace('field', 50)),
  phoneNumber: yup
    .string()
    .transform((originalValue) => (originalValue ? originalValue.trim() : undefined))
    .matches(/^\d+$/, t('validation.phone'))
    .min(10, t('validation.minLength').replace('field', 10))
    .max(13, t('validation.minLength').replace('field', 13)),
  region: yup
    .string()
    .transform((originalValue) => (originalValue ? originalValue.trim() : undefined)),
  city: yup
    .string()
    .when('region', {
      is: (region) => !!region, // Виконується, якщо 'region' має значення
      then: yup.string().required(t('validation.city')), // Якщо 'region' має значення, 'city' - обов'язковий
      otherwise: yup.string(), // В іншому випадку 'city' не обов'язковий
    })
    .transform((originalValue) => (originalValue ? originalValue.trim() : undefined)),
  department: yup
    .string()
    .when('region', {
      is: (region) => !!region, // Виконується, якщо 'region' має значення
      then: yup.string().required(t('validation.department')), // Якщо 'region' має значення, 'department' - обов'язковий
      otherwise: yup.string(), // В іншому випадку 'department' не обов'язковий
    })
    .transform((originalValue) => (originalValue ? originalValue.trim() : undefined)),
});

const validationSchema = (t) => {
  return yup.object().shape(fieldValidation(t));
};

export default validationSchema;
