import * as yup from 'yup';

const schema = yup.object({
  firstName: yup.string().trim().required('This field is required!').min('Min length 3').max('Max length 30'),
  lastName: yup.string().trim().required('This field is required!'),
  email: yup.string().trim().required('This field is required!').email('Must be a valid email'),
  phoneNumber: yup.string().required('This field is required!'),
  password: yup.string().trim().required('This field is required!'),
});

export default schema;
