import React from 'react';

import useValidate from '../../../hooks/useValidate';
import mainImg from '../../../assets/images/registerImg.jpg';
import { authValidations } from '../../../constants/Validations/validations';
import classNames from 'classnames';
import { register } from '../../../http/userAPI';
import { useNavigate } from 'react-router';
import { useAppSelector } from '../../../hooks/redux';
import { userSlice } from '../../../store/reducers/UserSlice';
import { SHOP_ROUTE } from '../../../utils/consts';

interface IUserRegister {
  email: string;
  password: string;
}

const formFields = {
  email: '',
  password: '',
  passwordRepeat: '',
};

const RegistrationForm = () => {
  const navigate = useNavigate();
  const { isAuth } = useAppSelector((state) => state.userReducer);
  const { setUser, setIsAuth } = userSlice.actions;
  setIsAuth(true)

  const signUpHandler = (data: IUserRegister) => {
    signUp(data);
  };

  const signUp = async (data: IUserRegister) => {
    try {
      const res = await register(data.email, data.password);
      setUser(res);
      setIsAuth(true);
      navigate(SHOP_ROUTE);
    } catch (e) {
      console.log(e);
    }
  };

  const { handleChange, handleBlur, handleFocus, handleSubmit, fields, errors } = useValidate({
    formFields,
    validations: {
      email: authValidations.email,
      password: authValidations.password,
      passwordRepeat: authValidations.passwordRepeat,
    },
    onSubmit: signUpHandler,
  });

  return (
    <main className="login">
      <div className="container wrapper">
        <img src={mainImg} alt="Вейпер наваливает в панаме" />
        <div className="authorization">
          <div className="authorization-title">
            <h1>Регистрация</h1>
          </div>
          <div className="authorization__inputs">
            <div className="authorization__input">
              <p>Электронная почта</p>
              <div style={{ color: 'red', paddingBottom: '12px' }}>{errors.email}</div>
              <input
                value={fields.email}
                onBlur={handleBlur}
                onChange={handleChange}
                onFocus={handleFocus}
                name="email"
                className="email"
                placeholder="example@domain.com"
                type="email"
              />
            </div>
            <div className="authorization__input">
              <p>Пароль</p>
              <div style={{ color: 'red', paddingBottom: '12px' }}>
                {errors.password && errors.password}
              </div>
              <input
                value={fields.password}
                onBlur={handleBlur}
                onChange={handleChange}
                onFocus={handleFocus}
                name="password"
                className="password"
                placeholder="*******"
                type="password"
              />
            </div>
            <div className="authorization__input">
              <p>Повторите пароль</p>
              <div style={{ color: 'red', paddingBottom: '12px' }}>
              </div>
              <input
                onBlur={handleBlur}
                onChange={handleChange}
                onFocus={handleFocus}
                name="passwordRepeat"
                className="passwordRepeat"
                placeholder="*******"
                type="password"
              />
            </div>
          </div>
          <button
            className={classNames('authorization__button', {
              blocked: errors.email || errors.password,
            })}
            onClick={handleSubmit}
            disabled={errors.email || errors.password ? true : false}>
            <p>Регистрация</p>
          </button>
        </div>
      </div>
    </main>
  );
};

export default RegistrationForm;
