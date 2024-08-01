import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                   <img src={assets.logo} alt="" />
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quas quibusdam minima veniam, commodi odit consequuntur deserunt quasi nostrum, dicta perferendis, accusantium eligendi adipisci deleniti iusto at nihil! Cupiditate, nulla.</p>
                   <div className="footer-social-icon">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                   </div>
                </div>

                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>

                </div>

                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91 898-876-8754</li>
                        <li>contact@tomato.com</li>
                    </ul>

                </div>


            </div>
            <hr/>
            <p className="footer-copy-right">
                Copyright 2024 @Tomato.com - All Rights Reserved.
            </p>

        </div>
       
    )
}

export default Footer
