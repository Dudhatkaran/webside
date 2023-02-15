import React from 'react'
import style from "./Whatwedo.module.css"
import img1 from "../Image/1.jpg"
import img2 from "../Image/2.jpg"
import img3 from "../Image/3.jpg"
import img4 from "../Image/building.png"
import img5 from "../Image/bank.png"
import img6 from "../Image/drawer.png"
import img7 from "../Image/paper-money.png"
import img8 from "../Image/traffic-cone.png"
import img9 from "../Image/paint-brush.png"
import img10 from "../Image/4.jpg"
import img11 from "../Image/5.jpg"
import img12 from "../Image/6.jpg"
import Nevbar from '../Nevbar/Nevbar'
import Footer from '../Footer/Footer'


const Whatwedo = () => {
    return (
        <>
            <Nevbar />
            <section>
                <div className={ style.head }>
                    <center> Some of Our Esteemed Projects: </center>
                </div>
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
                <div className={ style.boxes1 }>
                    <div className={ style.box1 }>
                        <img src={ img1 } alt="" />
                        <h3>SKILLED PROFESSIONALS.</h3>
                        <h3>Your Property in Good Hands.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit. Eligendi rem, facilis nobis voluptatum est <br /> voluptatem accusamus molestiae perspiciatis mollitia.</p>
                    </div>
                    <div className={ style.box1 }>
                        <img src={ img2 } alt="" />
                        <h3>EFFECTIVE PLANNING.</h3>
                        <h3>Construction Process Organized.</h3>
                        <p>Porro repellat vero sapiente amet vitae quibusdam necessitatibus consectetur, labore totam. Accusamus <br /> perspiciatis asperiores labore esse.</p>
                    </div>
                    <div className={ style.box1 }>
                        <img src={ img3 } alt="" />
                        <h3>RISK MANAGEMENT.</h3>
                        <h3>We have got you Covered.</h3>
                        <p>Quos, non, esse eligendi ab accusantium voluptatem. <br /> Maxime eligendi beatae, atque tempora ullam. Vitae <br /> delectus quia, consequuntur rerum quo.</p>
                    </div>
                </div>
                <div className={ style.boxes2 }>
                    <div className={ style.box2 }>
                        <img src={ img10 } alt="" />
                        <h3>DESIGN & BUILD PACKAGE.</h3>
                        <h3>Your Property in Good Hands.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit. Eligendi rem, facilis nobis voluptatum est <br /> voluptatem accusamus molestiae perspiciatis mollitia.</p>
                    </div>
                    <div className={ style.box2 }>
                        <img src={ img11 } alt="" />
                        <h3>ARCHITECTURE PLANNING.</h3>
                        <h3>Construction Process Organized.</h3>
                        <p>Porro repellat vero sapiente amet vitae quibusdam necessitatibus consectetur, labore totam. Accusamus <br /> perspiciatis asperiores labore esse.</p>
                    </div>
                    <div className={ style.box2 }>
                        <img src={ img12 } alt="" />
                        <h3>GENERAL MAINTENANCE.</h3>
                        <h3>We have got you Covered.</h3>
                        <p>Quos, non, esse eligendi ab accusantium voluptatem. <br /> Maxime eligendi beatae, atque tempora ullam. Vitae <br /> delectus quia, consequuntur rerum quo.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Whatwedo