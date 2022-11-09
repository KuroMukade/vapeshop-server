import React from 'react'
import { useNavigate } from 'react-router';
import { DEVICE_ROUTE } from '../../utils/consts';

import noCardImg from '../../assets/images/noCardImage.png';
import './deviceItem.scss';

const DeviceItem = ({device}: any) => {
  const navigateDevice = useNavigate();
  return (
    <div className="card" onClick={() => navigateDevice(`${DEVICE_ROUTE}/${device.id}`)}>
      <div className="card-wrapper">
        <div className="card-image__wrapper">
          {device.img ? (
            <img
              className="card__image"
              src={`${process.env.REACT_APP_API_URL}/${device.img}`}
              alt="productImage"
            />
          ) : (
            <img className="card__image" src={noCardImg} alt="noImage" />
          )}
        </div>
        <div className="card-bottom">
          <h3 className="card__description-title">{device.name}</h3>
          <p className="card__description">{device?.description}</p>
          <button className="card__button">В корзину</button>
        </div>
      </div>
    </div>
  );
};

export default DeviceItem