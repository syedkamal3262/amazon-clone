import React from 'react'
import Img from '../images/banner-ads-amazon.png'
import './Checkout.css'
import {useStateValue} from '../components/StateProvider';
import CheckoutProduct from '../components/CheckoutProduct';

import Subtotal from '../components/Subtotal';

const Checkout = () => {
const [{basket}] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
            <img className="checkout__ad" alt="" src={Img}/> 
                    {(basket.length ===0)?
                (
                    <div>
                        <h2>Your Shooping baket is empty</h2>
                    </div>
                ) :
                (
                    <div className="checkout__title">
                        <h2>Your Shooping Basket</h2>
                        {
                            basket.map(item=>
                                <CheckoutProduct
                                    id={item.id} 
                                    title={item.title} 
                                    image={item.image} 
                                    price={item.price} 
                                    rating={item.rating}
                                />
                            )
                        }
                    </div>
                )
                }
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )

            }
             </div>
            )
    }

export default Checkout
