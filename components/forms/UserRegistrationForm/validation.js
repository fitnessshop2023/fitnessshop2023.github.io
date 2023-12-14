import * as yup from 'yup';

const validationSchema = (t) => {
  return yup.object({
    firstName: yup
      .string()
      .trim()
      .min(3, t('validation.minLength').replace('field', 3))
      .max(30, t('validation.maxLength').replace('field', 30)),
    lastName: yup
      .string()
      .trim()
      .min(3, t('validation.minLength').replace('field', 3))
      .max(30, t('validation.maxLength').replace('field', 30)),
    email: yup
      .string()
      .trim()
      .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z]+[.][a-zA-Z]{2,5}$/, t('validation.email')),
    phoneNumber: yup
      .string()
      .matches(/^\d+$/, t('validation.phone'))
      .min(10, t('validation.minLength').replace('field', 10))
      .max(13, t('validation.minLength').replace('field', 13)),
    password: yup
      .string()
      .trim()
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{1,}$/, t('validation.password'))
      .min(8, t('validation.minLength').replace('field', 8))
      .max(70, t('validation.maxLength').replace('field', 70)),
  });
};

export default validationSchema;
