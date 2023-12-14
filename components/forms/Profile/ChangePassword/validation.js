import * as yup from 'yup';

const validationSchema = (t) => {
  return yup.object({
    oldPassword: yup
      .string()
      .required(t('validation.emptyPassword'))
      .trim(),
    newPassword: yup
      .string()
      .required(t('validation.emptyPassword'))
      .trim()
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{1,}$/, t('validation.password'))
      .min(8, t('validation.minLength').replace('field', 8))
      .max(70, t('validation.maxLength').replace('field', 70)),
  });
};

export default validationSchema;

