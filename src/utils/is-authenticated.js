import { isEmpty } from 'lodash';

const isAuthenticated = () => !isEmpty(localStorage.getItem('access-token')) && !isEmpty(localStorage.getItem('client'))
  && !isEmpty(localStorage.getItem('uid'));

export default isAuthenticated;
