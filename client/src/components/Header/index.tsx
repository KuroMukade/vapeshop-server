import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { userSlice } from '../../store/reducers/UserSlice';
import { ADMIN_ROUTE, LOGIN_ROUTE } from '../../utils/consts';
import './header.scss';

const Header = () => {
  const navigateToMain = useNavigate();
  const { isAuth } = useAppSelector((state) => state.userReducer);
  const { setUser, setIsAuth } = userSlice.actions;
  const dispatch = useAppDispatch();
  const logOut = () => {
    dispatch(setUser({}));
    dispatch(setIsAuth(false));
    navigateToMain('/');
  };

  return (
    <header className="header">
      <div className="header-container header-wrapper">
        <div className="header-wrapper-top">
          <div className="header-logo">
            <Link to={'/'}>
              <img src={logo} alt="VAPESHOP logo" />
            </Link>
          </div>
          <div className="header-wrapper-top-navigation">
            <input
              className="header-wrapper-top-navigation__input"
              placeholder="Поиск по сайту"
              type="text"
            />
            <a className="header-wrapper-top-navigation__order" href="заглушка">
              Мои заказы
            </a>
            {isAuth ? (
              <div>
                <Link className="header-wrapper-top-navigation__order" to={ADMIN_ROUTE}>
                  Админ панель
                </Link>
                <button onClick={() => logOut()} className="header-wrapper-top-navigation__order">
                  Выйти
                </button>
              </div>
            ) : (
              <Link to={LOGIN_ROUTE}>Авторизация</Link>
            )}
            <div className="header-top-navigation__cart-wrapper">
              <Link className="header-top-navigation__cart" to="заглушка">
                Корзина
              </Link>
              <div className="header-top-navigation__cart-circle">5</div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-wrapper-bottom">
        <div className="header-container bottom">
          <ul className="header-bottom-navigation">
            <li>
              <Link to="заглушка">Одноразовые</Link>
            </li>
            <li>
              <Link to="заглушка">POD-системы</Link>
            </li>
            <li>
              <Link to="заглушка">Электронные сигареты</Link>
            </li>
            <li>
              <Link to="заглушка">Атомайзеры</Link>
            </li>
            <li>
              <Link to="заглушка">Жидкости</Link>
            </li>
            <li>
              <Link to="заглушка">Аксессуары</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
