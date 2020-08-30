import React from 'react'
import './Footer.css'
import Logo from '../images/amazon_PNG24.png'

const Footer = () => {
    return (
        <div >
            <div className="footer__top">Back to top</div>
            <div className="footer__bottom">
            <img
                className="footer__logo"
                src={Logo}
                alt="">
                </img>
            </div>
        </div>
    )
}

export default Footer
