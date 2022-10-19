import axios from 'axios';
import React from 'react'

import { useState } from 'react';

const Products = () => {    
    const [isLoading, setIsLoading] = useState(false);
 
    const fetchProducts = () => {
        setIsLoading(true);
        axios.get(`https://localgost:5000/device/`);
    }

    return (
        <div>
            <div>
                <h1>Продукция</h1>
                <div className="products-navigation">
                    
                </div>
            </div>
        </div>

    )
}

export default Products;