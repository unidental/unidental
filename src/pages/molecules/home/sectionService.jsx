'use client';
import {motion} from "motion/react"
import dentalImplants from "../../../assets/img/home_01.png"
import cosmetic from "../../../assets/img/home_02.png"
import restorative from "../../../assets/img/home_03.png"
import oral from "../../../assets/img/home_04.png"
import endodontics from "../../../assets/img/home_05.png"
import pediatric from "../../../assets/img/home_06.png"

const SectionService = () => {
    return(
        <>
        <div className="container mt-5">
            <div className="row mx-0">
                <div className="col-xl-6">
                    <div className="col-xl-12">
                        <span className="u-title-prin-content">Featured </span>
                        <span className="u-title-prin-content-black">Services</span>
                    </div>
                    <div className="col-xl-12">
                        <span className="u-content-stxt">We offer an extraordinary quality of service with the latest 
                            technology in the sector without giving up personalized 
                            attention and prices adjusted to your needs.</span>
                    </div>
                </div>
                <div className="col-xl-3">
                    <motion.div initial={{scale:0}} animate={{scale:1}} transition={{duration:0.4, scale:{type:"spring",
                        visualDuration:0.9, bounce:0.5},}}>
                    <div className="col-xl-12">
                        <img className="img-fluid" src={dentalImplants} alt="Unidental Implants" />
                    </div>
                    </motion.div>
                </div>
                <div className="col-xl-3">
                    <div className="col-xl-12">
                        <img className="img-fluid" src={cosmetic} alt="Unidental Implants" />
                    </div>
                </div>
            </div>
            <div className="row mx-0 pt-4">
                <div className="col-xl-3">
                    <div className="col-xl-12">
                        <img className="img-fluid" src={restorative} alt="Unidental Implants" />
                    </div>
                </div>
                <div className="col-xl-3">
                    <div className="col-xl-12">
                        <img className="img-fluid" src={oral} alt="Unidental Implants" />
                    </div>
                </div>
                <div className="col-xl-3">
                    <div className="col-xl-12">
                        <img className="img-fluid" src={endodontics} alt="Unidental Implants" />
                    </div>
                </div>
                <div className="col-xl-3">
                    <div className="col-xl-12">
                        <img className="img-fluid" src={pediatric} alt="Unidental Implants" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default SectionService