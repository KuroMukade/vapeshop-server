import axios from 'axios';
import React from 'react'

import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Card from '../Card';
import Skeleton from '../Card/Skeleton';

const Products = () => {    

    const { devices, isLoading } = useAppSelector(state => state.deviceReducer);
    const dispatch = useAppDispatch();

    console.log(devices);

    useEffect(() => {
 
    }, []);

    return (
        <div className='products'>
            <div className='products-top'>
                <h1 className='prodcuts-top__heding'>Продукция</h1>
                <div className="products-navigation">
                    
                </div>
                <div className="products-wrapper">
                    {/* {isLoading 
                    ? <Skeleton /> 
                    : devices.map((obj) => 
                        <Card description='Ремонт и обслуживание вейпов, за демократичную цену. После ремонта в нашем сервисе мы даем гарантию 3 месяца.' descriptionHeading='Пасито пасасито' image={obj.img}/>
                    )
                    } */}
                    {devices?.map(() => {
                        if (isLoading) {
                            return <Skeleton />
                        } else {
                            // return <Card description={devices}/>
                        }
                    })}
                    
                </div>
            </div>
        </div>

    )
}

export default Products;