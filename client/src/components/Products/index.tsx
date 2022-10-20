import React from 'react'

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchProducts } from '../../store/reducers/ActionCreators';
import Card from '../Card';
import Skeleton from '../Card/Skeleton';

import './products.scss';

const Products = () => {    
    const { devices, isLoading } = useAppSelector(state => state.deviceReducer);
    const dispatch = useAppDispatch();

    console.log(devices);

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    const skeletons = [...new Array(4)].map((index) => <Skeleton key={index}/>);
    console.log(skeletons[0])

    const productDevices = devices?.map((device) => <Card descriptionHeading={device.name} description={'описание ебейшее'} image={device.img} />);

    return (
        <div className='products'>
            <div className='products-top'>
                <h1 className='prodcuts-top__heding'>Продукция</h1>
                <div className="products-navigation">
                    
                </div>
                <div className="products-wrapper">
                    {isLoading ? skeletons : productDevices}                                       
                </div>
            </div>
        </div>

    )
}

export default Products;