import React from 'react'
import style from './Footer.module.css'
import img1 from "../Image/footer-widget-logo.png"
import img2 from "../Image/facebook.png";
import img3 from "../Image/you tube.jpg";

const Footer = () => {
    return (
        <>
            <section>
                <div className={ style.footer }>
                    <div className={ style.detail }>
                        <img src={ img1 } alt="" />
                        <p>We believe in Simple, Creative & Flexible Design Standards with a Retina & Responsive Approach. Browse the amazing Features this template offers.</p>
                        <hr />
                        <div className={ style.data }>
                            <div className={ style.data1 }>
                                <ul>
                                    <li>home</li>
                                    <li>about</li>
                                    <li>FAQs</li>
                                    <li>support</li>
                                    <li>contact</li>
                                </ul>
                            </div>
                            <div className={ style.data1 }>
                                <ul>
                                    <li>shop</li>
                                    <li>portfoliobr</li>
                                    <li>blog</li>
                                    <li>events</li>
                                    <li>forums</li>
                                </ul>
                            </div>
                            <div className={ style.data1 }>
                                <ul>
                                    <li>Corporate</li>
                                    <li>Agency</li>
                                    <li>eCommerce</li>
                                    <li>Personal</li>
                                    <li>One Page</li>
                                </ul>
                            </div>
                            <div className={ style.data1 }>
                                <ul>
                                    <li>Restaurant</li>
                                    <li>Wedding</li>
                                    <li>App Showcase</li>
                                    <li>Magazine</li>
                                    <li>Landing Page</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={ style.contact }>
                        <p>CALL US:</p>
                        <h1>(1) 22 55412474</h1>
                        <p>SEND AN EMAIL:</p>
                        <h1>info@canvas.com</h1>
                        <img src={ img2 } alt="" />
                        <p className={ style.p }>like us on facebook</p>
                        <img src={ img3 } alt="" />
                        <p className={ style.p }>subscribe on you tube</p>
                    </div>
                </div>
                <div className={ style.last }>
                    <div className={ style.copy }>
                        <p>Copyrights © 2020 All Rights Reserved by Canvas Inc.</p>
                        <p>Terms of Use / Privacy Policy</p>
                    </div>
                    <div className={ style.list }>
                        <p>Home/About Us/Team/Clients/FAQs/Contact</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer
