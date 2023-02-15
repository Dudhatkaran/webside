import React from 'react'
import style from "./About.module.css"
import img1 from "../Image/9.jpg"
import img4 from "../Image/building.png"
import img5 from "../Image/bank.png"
import img6 from "../Image/drawer.png"
import img7 from "../Image/paper-money.png"
import img8 from "../Image/traffic-cone.png"
import img9 from "../Image/paint-brush.png"
import img10 from '../Image/bottom-trust.jpg'
import Nevbar from '../Nevbar/Nevbar'
import Footer from '../Footer/Footer'


const About = () => {
    return (
        <>
            <Nevbar />
            <section>
                <div className={ style.about }>
                    <p>ABOUT US <br /> A Short Page Title Tagline</p>
                </div>
                <div className={ style.data }>
                    <div className={ style.detail }>
                        <h1>WHAT WE DO</h1>
                        <p>Dramatically orchestrate multimedia based opportunities and client-based e-business. Competently create human capital.</p>
                        <p>Holisticly incubate enterprise users whereas just in time sources. Rapidiously transition performance based e-business for bricks-and-clicks methodologies. Intrinsicly network quality interfaces rather than customer directed e-services. Rapidiously implement out-of-the-box content with alternative data. Collaboratively simplify seamless initiatives through sustainable infomediaries. Holisticly aggregate bleeding-edge expertise.</p>
                        <button className={ style.button }>learn more</button>
                    </div>
                    <div className={ style.slide }>

                    </div>
                </div>
            </section>
            <section>
                <div className={ style.work }>
                    <div className={ style.img }>
                        <img src={ img1 } alt="" />
                    </div>
                    <div className={ style.project1 }>
                        <div className={ style.pr }>
                            <img src={ img4 } alt="" />
                            <h3>CONCRETE DEVELOPMENTS</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit. Autem minima, facere distinctio placeat.</p>
                        </div>
                        <div className={ style.pr }>
                            <img src={ img8 } alt="" />
                            <h3>SMART BUILDERS</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit. Autem minima, facere distinctio placeat.</p>
                        </div>
                        <div className={ style.pr }>
                            <img src={ img6 } alt="" />
                            <h3>INTERIORLY DESIGNED</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit. Autem minima, facere distinctio placeat.</p>
                        </div>
                    </div>
                    <div className={ style.project2 }>
                        <div className={ style.pr }>
                            <img src={ img5 } alt="" />
                            <h3>FINANCE ASSISTANCE</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit. Autem minima, facere distinctio placeat.</p>
                        </div>
                        <div className={ style.pr }>
                            <img src={ img9 } alt="" />
                            <h3>QUALITY INFRASTRUCTURE</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit. Autem minima, facere distinctio placeat.</p>
                        </div>
                        <div className={ style.pr }>
                            <img src={ img7 } alt="" />
                            <h3>COST EFFECTIVE SOLUTIONS</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit. Autem minima, facere distinctio placeat.</p>
                        </div>

                    </div>
                </div>
            </section>
            <section>
                <div className={ style.program }>
                    <div className={ style.photo }>
                        <img src={ img10 } alt="" />
                    </div>
                    <div className={ style.list }>
                        <h1>YOU'RE IN GOOD HANDS.</h1>
                        <p>Five Points that define Our Reliability.</p>
                        <ul>
                            <li>Market Leader since 1915</li>
                            <li>Positive Results within Deadlines</li>
                            <li>100% Reliability & Guarantee</li>
                            <li>Dedicated Professional Team of 500+</li>
                            <li>Unmatched After Project Completion Support</li>
                        </ul>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default About