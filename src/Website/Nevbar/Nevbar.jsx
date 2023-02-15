import React from 'react'
import style from "./Nevbar.module.css"
import { Link } from 'react-router-dom'
import img1 from '../Image/logo.png'
import img2 from '../Image/call.png'
import img3 from '../Image/mail.png'
import img4 from '../Image/clock.png'

const Nevbar = () => {
    return (
        <>
            <section>
                <div >
                    <div className={ style.contectabout }>
                        <div className={ style.logo }>
                            <img src={ img1 } alt="" />
                        </div>

                        <div className={ style.info }>
                            <div className={ style.info1 }>
                                <img className={ style.info2 } src={ img2 } alt="" />
                                <p>
                                    <span> CALL US </span> <br />
                                    <a href="skajdm">(1) 22 54215821</a>
                                </p>
                            </div>
                            <div className={ style.info1 }>
                                <img className={ style.info2 } src={ img3 } alt="" />
                                <p>
                                    <span>EMAIL US</span> <br />
                                    <a href="skajdm">info@canvas.com</a>
                                </p>
                            </div>
                            <div className={ style.info1 }>
                                <img className={ style.info2 } src={ img4 } alt="" />
                                <p>
                                    <span>WE'ARE OPEN</span> <br />
                                    <a href="skajdm">Mon - Sat, 10AM to 6PM</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className={ style.nev }>
                    <ul>
                        <Link to="/">
                            <li>Home</li>
                        </Link>
                        <Link to="/whatwedo">
                            <li>what we do</li>
                        </Link>
                        <Link to="/about">
                            <li>about</li>
                        </Link>
                        <Link to="/project">
                            <li>project</li>
                        </Link>
                        <li>Investors</li>
                        <li>News</li>
                        <li>Careers</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Nevbar
