import React from 'react';

import { useLocation } from 'react-router';
import { LOGIN_ROUTE } from '../../utils/consts';
import LoginForm from '../../components/Forms/LoginForm';
import RegistrationForm from '../../components/Forms/RegistrationForm';

import './auth.scss';

const Auth = () => {
  const location = useLocation();
  const isLogged = location.pathname === LOGIN_ROUTE;

  return (
    <>
      {isLogged ? <LoginForm /> : <RegistrationForm />}
    </>
  );
};
export default Auth;
