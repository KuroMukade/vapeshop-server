import React from 'react';

import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
import './header.scss';

const index = () => {
  return (
    <header className="header">
        <div className="header-container header-wrapper">
          <div className="header-wrapper-top">
            <div className="header-logo">
              <Link href="?????"><img src={logo} alt="VAPESHOP logo"/></Link>
            </div>
            <div className="header-wrapper-top-navigation">
              <input className="header-wrapper-top-navigation__input" placeholder='Поиск по сайту' type="text" />
              <a className="header-wrapper-top-navigation__order" href="заглушка">
                Мои заказы
              </a>
              <div className="header-top-navigation__cart-wrapper">
                <a className="header-top-navigation__cart" href="заглушка">
                  Корзина
                </a>
                <div className="header-top-navigation__cart-circle">5</div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-wrapper-bottom">
          <div className="header-container">
            <ul className="header-bottom-navigation">
                <li><a href="заглушка">Одноразовые</a></li>
                <li><a href="заглушка">POD-системы</a></li>
                <li><a href="заглушка">Электронные сигареты</a></li>
                <li><a href="заглушка">Атомайзеры</a></li>
                <li><a href="заглушка">Жидкости</a></li>
                <li><a href="заглушка">Аксессуары</a></li>
            </ul>
          </div>
        </div>
    </header>
  )
}

export default index