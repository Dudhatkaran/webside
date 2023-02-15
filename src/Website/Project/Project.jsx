import React from 'react'
import style from './Project.module.css'
import img10 from '../Image/1 (1).jpg'
import img11 from '../Image/2 (1).jpg'
import img12 from '../Image/3 (1).jpg'
import img13 from '../Image/4 (1).jpg'
import img14 from '../Image/5 (1).jpg'
import img15 from '../Image/6 (1).jpg'
import img16 from '../Image/7 (1).jpg'
import img17 from '../Image/8 (1).jpg'
import Nevbar from '../Nevbar/Nevbar'
import Footer from '../Footer/Footer'

const Project1 = () => {
    return (
        <>
            <Nevbar />
            <section>
                <div className={ style.project }>
                    <p>PROJECTS <br /> A Short Page Title Tagline</p>
                </div>
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
                        <p>ndustrial Hub <br /> Beijing, China</p>
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
            <Footer />
        </>
    )
}

export default Project1