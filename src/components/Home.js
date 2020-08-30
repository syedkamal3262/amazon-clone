import React from 'react'
import Banner from '../images/banner3.jpg' 
import './Home.css' 
import Product from '../components/Product' 

const Home = () => {
    const products_data=[
        {id:"B0160BC1FO",title:"Garmin Forerunner 235, GPS Running Watch, Black/Gray",image:"https://images-na.ssl-images-amazon.com/images/I/41PYkNWSrAL._AC_SY200_.jpg",price:"162.07",rating:"3"},
        {id:"B076B27WP6",title:"iOttie Easy One Touch 4 Dash & Windshield Car Mount Phone Holder Desk Stand Pad & Mat for Smartphones",image:"https://images-na.ssl-images-amazon.com/images/I/51EXcNKQgoL._AC_SY200_.jpg",price:"24.95",rating:"5"},
        {id:"B00Z7T3DTO",title:'OtterBox Defender Series Case for iPad Pro 12.9" (3rd Gen - ONLY) - Retail Packaging - Black',image:"https://images-na.ssl-images-amazon.com/images/I/31QZt3z85mL._AC_SY200_.jpg",price:"116.96",rating:"4"},
        {id:"B00NO73MUQ",title:"AmazonBasics 3.5 mm Male to Male Stereo Audio Aux Cable, 4 Feet, 1.2 Meters",image:"https://images-na.ssl-images-amazon.com/images/I/31gXdF7F10L._AC_SY200_.jpg",price:"6.38",rating:"3"},
        {id:"B00TKRQWS8",title:"Blendtec Total Classic Original Blender",image:"https://images-na.ssl-images-amazon.com/images/I/41AZOLr72bL._AC_SY200_.jpg",price:"275.88",rating:"5"},
        {id:"B00E4MQODC",title:"Logitech G602 Lag-Free Wireless Gaming Mouse – 11 Programmable Buttons, Upto 2500 DPI",image:"https://images-na.ssl-images-amazon.com/images/I/41Ww3zikowL._AC_SY200_.jpg",price:"86.99",rating:"4"},
        {id:"B07KXMMXKP",title:"NUBWO Gaming headsets PS4 N7 Stereo Xbox one Headset Wired PC Gaming Headphones with Noise Canceling Mic , Over Ear Gaming Headphones for PC/MAC/PS4/Xbox one",image:"https://images-na.ssl-images-amazon.com/images/I/4101CEZSB2L._AC_SY200_.jpg",price:"39.99",rating:"3"},
        {id:"B07NC3P16Z",title:"Victrola Vintage Bluetooth Portable Suitcase Record Player",image:"https://images-na.ssl-images-amazon.com/images/I/41yavwjp-8L._AC_SY200_.jpg",price:"44.98",rating:"5"}
    ]
    return (
        <div>
            <img className="Home__banner" alt="" src={Banner}></img>
            <div className="home__row">
                <Product 
                id={products_data[0].id} 
                title={products_data[0].title} 
                image={products_data[0].image} 
                price={products_data[0].price} 
                rating={products_data[0].rating} 
                />
                <Product 
                id={products_data[1].id} 
                title={products_data[1].title} 
                image={products_data[1].image} 
                price={products_data[1].price} 
                rating={products_data[1].rating} 
                />
                 <Product 
                id={products_data[2].id} 
                title={products_data[2].title} 
                image={products_data[2].image} 
                price={products_data[2].price} 
                rating={products_data[2].rating} 
                />
                 <Product 
                id={products_data[3].id} 
                title={products_data[3].title} 
                image={products_data[3].image} 
                price={products_data[3].price} 
                rating={products_data[3].rating} 
                />
            </div>
            <div className="home__row">
            <Product 
                id={products_data[4].id} 
                title={products_data[4].title} 
                image={products_data[4].image} 
                price={products_data[4].price} 
                rating={products_data[4].rating} 
                />
                <Product 
                id={products_data[5].id} 
                title={products_data[5].title} 
                image={products_data[5].image} 
                price={products_data[5].price} 
                rating={products_data[5].rating} 
                />
                 <Product 
                id={products_data[6].id} 
                title={products_data[6].title} 
                image={products_data[6].image} 
                price={products_data[6].price} 
                rating={products_data[6].rating} 
                />
                 <Product 
                id={products_data[7].id} 
                title={products_data[7].title} 
                image={products_data[7].image} 
                price={products_data[7].price} 
                rating={products_data[7].rating} 
                />
            </div>
        </div>
    )
}

export default Home
