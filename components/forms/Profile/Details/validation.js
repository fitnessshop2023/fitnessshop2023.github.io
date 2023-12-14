import * as yup from 'yup';

const fieldValidation = (t) => ({
  firstName: yup
    .string()
    .transform((originalValue) => (originalValue ? originalValue.trim() : undefined)) // Трансформація значення перед валідацією
    .min(3, t('validation.minLength').replace('field', 3))
    .max(30, t('validation.maxLength').replace('field', 30)),
  lastName: yup
    .string()
    .transform((originalValue) => (originalValue ? originalValue.trim() : undefined))
    .min(3, t('validation.minLength').replace('field', 3))
    .max(30, t('validation.maxLength').replace('field', 30)),
  email: yup
    .string()
    .transform((originalValue) => (originalValue ? originalValue.trim() : undefined))
    .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z]+[.][a-zA-Z]{2,5}$/, t('validation.email')),
  phoneNumber: yup
    .string()
    .transform((originalValue) => (originalValue ? originalValue.trim() : undefined))
    .matches(/^\d+$/, t('validation.phone'))
    .min(10, t('validation.minLength').replace('field', 10))
    .max(13, t('validation.minLength').replace('field', 13)),
});

const validationSchema = (t) => {
  return yup.object().shape(fieldValidation(t));
};

export default validationSchema;
