import React, {useEffect} from 'react';

import { Image } from 'react-bootstrap';

import { useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchOneProduct } from '../../store/reducers/ActionCreators';

import './devicePage.scss';

const DevicePage = () => {
  const { devices, isLoading } = useAppSelector((state) => state.deviceReducer);
  const dispatch = useAppDispatch();
  const { id } = useParams();
  console.log(devices)
  useEffect(() => {
    dispatch(fetchOneProduct(id));
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Загрузка</p>
      ) : (
        <div className="container">
            <h1 className="title">{devices.name}</h1>
            <p className='id'>Код товара: {devices.id}</p>
          <div className="product-wrapper">
            <div className="product">
              <Image
                width={600}
                height={600}
                src={`${process.env.REACT_APP_API_URL}/${devices.img}`}
              />
              <div className="characteristics">
                <h1 className="characteristics-title">Характеристики</h1>
                {devices?.info.map((characteristic) => <div key={characteristic.id}>{`${characteristic.title} ${characteristic.description}`}</div>)}
                <p className="characteristics__device-title"></p>
                <p className="characteristics__info">{devices?.info?.description}</p>
                <p className='characteristics__price'>{devices.price} ₽</p>
                <button className="characteristics__btn">Добавить в корзину</button>
              </div>
            </div>
          </div>
        </div>
        
      )}
    </>
  );
};

export default DevicePage;
