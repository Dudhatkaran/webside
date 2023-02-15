import React from 'react'
import style from './Dashbord.module.css'
import img1 from "../Image/1.jpg"
import img2 from "../Image/2.jpg"
import img3 from "../Image/3.jpg"
import img4 from "../Image/building.png"
import img5 from "../Image/bank.png"
import img6 from "../Image/drawer.png"
import img7 from "../Image/paper-money.png"
import img8 from "../Image/traffic-cone.png"
import img9 from "../Image/paint-brush.png"
import img10 from '../Image/1 (1).jpg'
import img11 from '../Image/2 (1).jpg'
import img12 from '../Image/3 (1).jpg'
import img13 from '../Image/4 (1).jpg'
import img14 from '../Image/5 (1).jpg'
import img15 from '../Image/6 (1).jpg'
import img16 from '../Image/7 (1).jpg'
import img17 from '../Image/8 (1).jpg'
import img18 from '../Image/bottom-trust.jpg'
import Nevbar from '../Nevbar/Nevbar'
import Footer from '../Footer/Footer'




const Dashbord = () => {
    return (
        <>
            <Nevbar />
            <section>
                <div className={ style.boxes }>
                    <div className={ style.box }>
                        <img src={ img1 } alt="" />
                        <h3>SKILLED PROFESSIONALS.</h3>
                        <h3>Your Property in Good Hands.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit. Eligendi rem, facilis nobis voluptatum est <br /> voluptatem accusamus molestiae perspiciatis mollitia.</p>
                    </div>
                    <div className={ style.box }>
                        <img src={ img2 } alt="" />
                        <h3>EFFECTIVE PLANNING.</h3>
                        <h3>Construction Process Organized.</h3>
                        <p>Porro repellat vero sapiente amet vitae quibusdam necessitatibus consectetur, labore totam. Accusamus <br /> perspiciatis asperiores labore esse.</p>
                    </div>
                    <div className={ style.box }>
                        <img src={ img3 } alt="" />
                        <h3>RISK MANAGEMENT.</h3>
                        <h3>We have got you Covered.</h3>
                        <p>Quos, non, esse eligendi ab accusantium voluptatem. <br /> Maxime eligendi beatae, atque tempora ullam. Vitae <br /> delectus quia, consequuntur rerum quo.</p>
                    </div>
                </div>
            </section>
            <section>
                <div className={ style.work1 }>
                    <div className={ style.data }>
                        <img src={ img4 } alt="" />
                        <h3>CONCRETE DEVELOPMENTS</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit. Autem minima, facere distinctio placeat.</p>
                    </div>
                    <div className={ style.data }>
                        <img src={ img5 } alt="" />
                        <h3>FINANCE ASSISTANCE</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit. Autem minima, facere distinctio placeat.</p>
                    </div>
                    <div className={ style.data }>
                        <img src={ img6 } alt="" />
                        <h3>INTERIORLY DESIGNED</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit. Autem minima, facere distinctio placeat.</p>
                    </div>
                </div>
                <div className={ style.work2 }>
                    <div className={ style.data }>
                        <img src={ img7 } alt="" />
                        <h3>COST EFFECTIVE SOLUTIONS</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit. Autem minima, facere distinctio placeat.</p>
                    </div>
                    <div className={ style.data }>
                        <img src={ img8 } alt="" />
                        <h3>SMART BUILDERS</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit. Autem minima, facere distinctio placeat.</p>
                    </div>
                    <div className={ style.data }>
                        <img src={ img9 } alt="" />
                        <h3>QUALITY INFRASTRUCTURE</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit. Autem minima, facere distinctio placeat.</p>
                    </div>
                </div>
            </section>
            <section>
                <div className={ style.head }>
                    <center> Some of Our Esteemed Projects: </center>
                </div>
                <div className={ style.images1 }>
                    <div className={ style.img }>
                        <img src={ img10 } alt="" />
                        <p>The Atmosphere <br /> Chicago, USA</p>
                    </div>
                    <div className={ style.img }>
                        <img src={ img11 } alt="" />
                        <p>Wavelength Structure <br /> Madrid, Spain</p>
                    </div>
                    <div className={ style.img }>
                        <img src={ img12 } alt="" />
                        <p>Greenhouse Garden <br /> Bali, Indonesia</p>
                    </div>
                    <div className={ style.img }>
                        <img src={ img13 } alt="" />
                        <p>Industrial Hub <br /> Beijing, China</p>
                    </div>
                </div>
                <div className={ style.images2 }>
                    <div className={ style.img }>
                        <img src={ img14 } alt="" />
                        <p>Corporate Headquarters <br /> California, USA</p>
                    </div>
                    <div className={ style.img }>
                        <img src={ img15 } alt="" />
                        <p>Space Station <br /> Moscow, Russia</p>
                    </div>
                    <div className={ style.img }>
                        <img src={ img16 } alt="" />
                        <p>Bent Architecture <br /> Melbourne, Australia</p>
                    </div>
                    <div className={ style.img }>
                        <img src={ img17 } alt="" />
                        <p>Lakeview Center <br /> Auckland, New Zealand</p>
                    </div>
                </div>
                <div className={ style.last }>
                    <center>Would you like to build your Dream Home with Us ? <u> Enquire Hear </u> </center>
                </div>

            </section>
            <section>
                <div className={ style.program }>
                    <div className={ style.photo }>
                        <img src={ img18 } alt="" />
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

export default Dashbord