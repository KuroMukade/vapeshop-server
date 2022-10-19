import React from 'react';

import './card.scss';
import noCardImg from '../../assets/images/noCardImage.png';

interface ProductCardProps {
    image?: string,
    descriptionHeading: string,
    description: string
}

const Card = ({description, descriptionHeading, image}: ProductCardProps) => {
    return (
        <div className='card'>
            <div className="card-wrapper">
                {image 
                    ? <img className='card__image' src={image} alt="productImage" /> 
                    : <img className='card__image' src={noCardImg} alt="noImage" /> 
                }
                <h3 className='card__description-title'>{descriptionHeading}</h3>
                <p className='card__description'>{description}</p>
                { image && <button className='card__button'>В корзину</button> }
            </div>
        </div>
    )
}

export default Card;