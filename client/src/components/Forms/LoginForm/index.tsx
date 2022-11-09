import React, {useEffect} from 'react';

import { authValidations } from '../../../constants/Validations/validations';
import useValidate from '../../../hooks/useValidate';
import { login } from '../../../http/userAPI';
import mainImg from '../../../assets/images/authImg.jpg';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { userSlice } from '../../../store/reducers/UserSlice';
import { useNavigate } from 'react-router';
import { SHOP_ROUTE } from '../../../utils/consts';

interface IUserLogin {
    email: string,
    password: string
}

const formFields = {
    email: '',
    password: '',
};

const LoginForm = () => {
  const navigate = useNavigate();
  const { isAuth } = useAppSelector((state) => state.userReducer);
  const { setUser, setIsAuth } = userSlice.actions;
  const dispatch = useAppDispatch();

  const { handleChange, handleBlur, errors, fields, handleSubmit, handleFocus } = useValidate({
    formFields,
    validations: { email: authValidations.email, password: authValidations.password },
    onSubmit: signInHandler,
  });

  function signInHandler(data: IUserLogin) {
    signIn(data);
  }

  const signIn = async (data: IUserLogin) => {
    try {
      const res = await login(data.email, data.password);
      setUser(res);
      dispatch(setIsAuth(true));
      navigate(SHOP_ROUTE);
    } catch (e) {
      console.log(e);
    }
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
          </div>
          <button
            className={classNames('authorization__button', {
              blocked: errors.email || errors.password,
            })}
            onClick={handleSubmit}
            disabled={errors.email || errors.password ? true : false}>
            <p>АВТОРИЗАЦИЯ</p>
          </button>
        </div>
      </div>
    </main>
  );
};

export default LoginForm;
