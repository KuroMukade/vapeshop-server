import React from 'react'

import logo from '../../assets/images/logo-white.svg';
import './footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer-content">
            <div className="footer__left">
                <img src={logo} alt="VAPESHOP" className='footer__logo' />
                <div className="footer-info">
                    <div className="footer-schedule">
                        <h4>График работы:</h4>
                        <p>Пн-Вс: 10:00 - 22:00</p>
                    </div>
                    <div className="footer-contact">
                        <h4>Номер телеофна:</h4>
                        <p>8 902 228 13 37</p>
                    </div>
                </div>
            </div>
            <p className='footer__right'>
                Доступ к сайту разрешен только лицам старше 18 лет, являющимся потребителями табака или иной никотиносодержащей продукции, которые в противном случае продолжат курить или употреблять иную никтотиносодержащую продукцию. Данный сайт не является рекламой, а служит лишь для предоставления достоверной информации о свойствах, характеристиках продукции и её наличии в магазинах сети. (п.1 и п.2 ст.10 Закона «О защите прав потребителей»). Дистанционная продажа и доставка никотиносодержащей продукции не осуществляется.
            </p>
        </div>
    </footer>
  )
}

export default Footer