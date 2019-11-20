import { map } from 'lodash';

const mountErrorMessage = (err) => {
  let { errors } = err.response.data;
  errors = map(errors, item => `${item}`);
  errors = errors.reduce((previousValue, currentValue) => `
  ${previousValue}
  ${currentValue}`,
  `Error${errors.length > 1 ? 's' : ''} occured: `);
  return errors;
};

const handleErrors = (err) => {
  if (err.response.status === 403 || err.response.status === 403) {
    return err.response.data.errors.details;
  }
  if (err.response.status === 401 || err.response.status === 422) {
    return mountErrorMessage(err);
  }
  if (err.response.status === 500) {
    return 'Internal server error. Please, contact our support';
  }
  return 'An unexpected error occurred. Please, contact our support';
};

export default handleErrors;
