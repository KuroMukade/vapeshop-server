import React, { useEffect } from 'react';
import classNames from 'classnames';

import { useState } from 'react';
import { login } from '../../http/userAPI';

import mainImg from '../../assets/images/authImg.jpg';
import './auth.scss';

const Auth = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailDirty, setEmailDirty] = useState<boolean>(false);
  const [passwordDirty, setpasswordDirty] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>('Емаил не может быть путым');
  const [passwordError, setPasswordError] = useState<string>('Пароль не может быть пустым');
  const [formValid, setFormValid] = useState<boolean>(false);

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError])

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Некорректный емаил');
    } else {
      setEmailError('');
    }
  };

  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (e.target.value.length < 5 || e.target.value.length > 12) {
      setPasswordError('Пароль должен содержать не менее 5 и не более 12 символов');
      if (!e.target.value) {
        setPasswordError('Пароль не должен быть пустым');
      }
    } else {
      setPasswordError('');
    }
  }

  const blurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name);
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setpasswordDirty(true);
        break;
    }
  };

  // const signIn = async () => {
  //   if (email && password) {
  //     const response = await login(email, password);
  //     console.log(response)
  //   }
  // }

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
              {emailDirty && emailError && (
                <div style={{ color: 'red', marginBottom: '6px' }}>{emailError}</div>
              )}
              <input
                onBlur={(e) => blurHandler(e)}
                value={email}
                onChange={(e) => emailHandler(e)}
                name={'email'}
                className="email"
                placeholder="example@domain.com"
                type="email"
              />
            </div>
            <div className="authorization__input">
              <p>Пароль</p>
              {passwordDirty && passwordError && (
                <div style={{ color: 'red', marginTop: '6px' }}>{passwordError}</div>
              )}
              <input
                onBlur={(e) => blurHandler(e)}
                value={password}
                onChange={(e) => passwordHandler(e)}
                name={'password'}
                className="password"
                placeholder="*******"
                type="password"
              />
            </div>
          </div>
          <button
            className={classNames(
              'authorization__button',
              !formValid ? 'blocked' : '',
            )}
            disabled={!formValid}
            onClick={() => console.log('успех')}
            >
            <p>АВТОРИЗАЦИЯ</p>
          </button>
        </div>
      </div>
    </main>
  );
};
export default Auth;
