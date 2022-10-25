import React from 'react';
import { IDevice } from '../../models/IDevice';

import { useNavigate } from 'react-router-dom';


import { DEVICE_ROUTE } from '../../utils/consts';

import './card.scss';
import noCardImg from '../../assets/images/noCardImage.png';

interface ProductCardProps {
    image?: string,
    description: string,
    descriptionHeading: string,
    id: number
}

const Card = ({image, description, descriptionHeading, id}: ProductCardProps) => {
    const navigateToProduct = useNavigate();

    return (
        <div className='card' onClick={() => navigateToProduct(`${DEVICE_ROUTE}/${id}`)}>
            <div className="card-wrapper">
                {image 
                    ? <img className='card__image' src={image} alt="productImage" /> 
                    : <img className='card__image' src={noCardImg} alt="noImage" /> 
                }
                <div className="card-bottom">
                    <h3 className='card__description-title'>{descriptionHeading}</h3>
                    <p className='card__description'>{description}</p>
                    { image && <button className='card__button'>В корзину</button> }
                </div>
                
            </div>
        </div>
    )
}

export default Card;