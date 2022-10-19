import axios from 'axios';
import React from 'react'

import { useState, useEffect } from 'react';
import Card from '../Card';
import Skeleton from '../Card/Skeleton';

const Products = () => {    
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([]);

    const fetchProducts = () => {
        setIsLoading(true);
        try {
            axios.get(`http://localhost:5000/api/device/`).then(res => {
                setIsLoading(false);
                console.log(res.data.rows);
                return setProducts(res.data.rows);
            });
        } catch (e) {
            console.log(e);
        }

        
    }
    useEffect(() => {
        fetchProducts()
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
                    : products.map((obj) => 
                        <Card description='Ремонт и обслуживание вейпов, за демократичную цену. После ремонта в нашем сервисе мы даем гарантию 3 месяца.' descriptionHeading='Пасито пасасито' image={obj.img}/>
                    ); */}
                    
                    
                </div>
            </div>
        </div>

    )
}

export default Products;