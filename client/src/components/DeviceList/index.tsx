import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { IDevice } from '../../models/IDevice';
import { fetchProducts } from '../../store/reducers/ActionCreators';
import DeviceItem from '../DeviceItem';
import Loader from '../Loader';

import './deviceList.scss';

const DeviceList = () => {
  const { devices, isLoading } = useAppSelector((state) => state.deviceReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts('', '', '', '6'))
  }, []);
  return (
    <div className="device-list">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {devices.map((item: IDevice) => (
            <DeviceItem key={item.id} device={item} />
          ))}
        </>
      )}
    </div>
  );
};

export default DeviceList;
