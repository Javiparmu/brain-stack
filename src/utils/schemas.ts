import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup.string().required('Please enter an email.'),
  password: yup
    .string()
    .required('Please enter a password.')
    .min(8, 'Password too short.')
    .test(
      'Password is strong enough.',
      'Password must contain lowercase, uppercase and number.',
      (value: string) => {
        const hasUpperCase = /[A-Z]/.test(value);
        const hasLowerCase = /[a-z]/.test(value);
        const hasNumber = /[0-9]/.test(value);
        let validConditions = 0;
        const numberOfMustBeValidConditions = 3;
        const conditions = [hasLowerCase, hasUpperCase, hasNumber];
        conditions.forEach((condition) =>
          condition ? validConditions++ : null,
        );
        if (validConditions >= numberOfMustBeValidConditions) {
          return true;
        }
        return false;
      },
    ),
});

export const registerSchema = yup.object({
  username: yup
    .string()
    .min(3, 'Username needs to be at least 3 characters long.')
    .required('Please enter a username.'),
  email: yup.string().required('Please enter an email.'),
  password: yup
    .string()
    .required('Please enter a password.')
    .min(8, 'Password too short.')
    .test(
      'Password is strong enough.',
      'Password must contain lowercase, uppercase and number.',
      (value: string) => {
        const hasUpperCase = /[A-Z]/.test(value);
        const hasLowerCase = /[a-z]/.test(value);
        const hasNumber = /[0-9]/.test(value);
        let validConditions = 0;
        const numberOfMustBeValidConditions = 3;
        const conditions = [hasLowerCase, hasUpperCase, hasNumber];
        conditions.forEach((condition) =>
          condition ? validConditions++ : null,
        );
        if (validConditions >= numberOfMustBeValidConditions) {
          return true;
        }
        return false;
      },
    ),
});
