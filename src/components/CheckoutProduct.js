import React from 'react'
import './CheckoutProduct.css'
import {useStateValue} from '../components/StateProvider';

const CheckoutProduct = ({id,title,image,price,rating}) => {
    const [{basket},dispatch] = useStateValue();

    const remove_from_basket = () => {
    //remove item from basket
    dispatch({
        type:"REMOVE_FROM_BASKET",
        id:id
    })
    console.log(id,title,image,price,rating)
}
    const productRating = Number(rating);
    const leftRating = 5- productRating ;
    
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt=""></img>
            <div className="checkoutproduct__info">
                <p className="checkoutproduct__title">{title}</p>
                <p className="checkoutproduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutproduct__rating">
                    {
                        Array(productRating).fill().map((_)=><p>&#11088;</p>)
                    }
                    {
                        Array(leftRating).fill().map((_)=><p className="leftRating">&#9734;</p>)
                    }
                </div>
                    <button 
                    onClick={remove_from_basket}
                    className="checkoutproduct__button">Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
