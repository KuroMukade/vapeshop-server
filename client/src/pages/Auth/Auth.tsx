import React from 'react';

import useInput from '../../hooks/useValidate';
import { authValidations } from '../../constants/Validations/validations';
import { login } from '../../http/userAPI';

import classNames from 'classnames';

import mainImg from '../../assets/images/authImg.jpg';
import './auth.scss';
import useValidate from '../../hooks/useValidate';

const formFields = {
  email: '',
  password: '',
};

interface IUserLogin {
  email: string,
  password: string
}

const Auth = () => {
  const { handleChange, handleBlur, errors, fields, handleSubmit, handleFocus } = useValidate({
    formFields,
    validations: { email: authValidations.email, password: authValidations.password },
    onSubmit: signInHandler
  });

  function signInHandler(data: IUserLogin) {
    signIn(data);
  }

  const signIn = async (data: IUserLogin) => {
    console.log(data)
    const response = await login(data.email, data.password);
    console.log(response)
  };

  return (
    <main className="login">
      <div className="container wrapper">
        <img src={mainImg} alt="Вейпер наваливает в панаме" />
        <div className="authorization">
          <div className="authorization-title">
            <h1>Авторизация</h1>
          </div>
          <div className="authorization__inputs">
            <div className="authorization__input">
              <p>Электронная почта</p>
              <div style={{color: 'red', paddingBottom: '12px'}}>
                {errors.email}
              </div>
              <input
                value={fields.email}
                onBlur={handleBlur}
                onChange={handleChange}
                onFocus={handleFocus}
                name='email'
                className="email"
                placeholder="example@domain.com"
                type="email"
              />
            </div>
            <div className="authorization__input">
              <p>Пароль</p>
              <div style={{color: 'red', paddingBottom: '12px'}}>
                {errors.password && errors.password}
              </div>
              <input
                value={fields.password}
                onBlur={handleBlur}
                onChange={handleChange}
                onFocus={handleFocus}
                name='password'
                className="password"
                placeholder="*******"
                type="password"
              />
            </div>
          </div>
          <button
            className={classNames('authorization__button',
             {'blocked': errors.email || errors.password}
            )}
            onClick={handleSubmit}
            disabled={errors.email || errors.password ? true : false}>
            <p>АВТОРИЗАЦИЯ</p>
          </button>
        </div>
      </div>
    </main>
  );
};
export default Auth;
