import * as yup from 'yup';

const validationSchema = (t) => {
  return yup.object({
    email: yup.string().trim().required(t('validation.required')),
    password: yup.string().trim().required(t('validation.required')),
  });
};

export default validationSchema;
