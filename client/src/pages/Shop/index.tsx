import React, { useEffect } from 'react'

import TypeBar from '../../components/TypeBar';
import BrandBar from '../../components/BrandBar';
import DeviceList from '../../components/DeviceList';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchBrands, fetchProducts, fetchTypes } from '../../store/reducers/ActionCreators';

import './shop.scss';


const Shop = () => {
  const { devices, page } = useAppSelector((state) => state.deviceReducer);
  const { types, selectedType } = useAppSelector((state) => state.typeReducer);
  const { brands, selectedBrand } = useAppSelector((state) => state.brandReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTypes())
    dispatch(fetchBrands())
    dispatch(fetchProducts('', '', '1', '6')) 
  }, []);

  // useEffect(() => {
  //   dispatch(fetchProducts(`${selectedType}`, `${selectedBrand}`, `1`, `2`))
  // }, [selectedBrand, selectedBrand, page]);

  return (
    <div className='container shop'>
        <TypeBar />
        <BrandBar />
        <DeviceList />
    </div>
  )
}

export default Shop 