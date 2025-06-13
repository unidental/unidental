import { FaCircleInfo } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import NavMobile from "../../mobile/navM";
import { FaChevronDown } from "react-icons/fa6";
import logo from "../../assets/img/uni-log.png"
import { Link, Links } from "react-router-dom";
const Nav = () => {
    return (
        <>
        <NavMobile/>
            <div className="u-nav-h u-nav-b-color d-none d-sm-none d-md-none d-lg-block d-xl-block">
                <div className="d-flex justify-content-between mb-3">
                    <div className="p-2 u-color-text-yellow"><FaCircleInfo />  do you need help?</div>
                    <div className="p-2"></div>
                    <div className="p-2 text-white"> 
                    <span className="u-color-text-yellow"> <FaEnvelope />  Email us</span> <a className="text-white" href="mailto:info@unidental.com.mx">info@unidental.com.mx</a></div>
                </div>
            </div>
            <nav className="nav-color py-3 d-none d-sm-none d-md-none d-lg-block d-xl-block">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-2">
                        <img className="img-fluid" src={logo} alt="logo" />
                        </div>
                        <div className="col-xl-7 text-center">
                            <ul className="m-ul menu">
                                <li><Link  to="/">Home</Link></li>
                                <li><Link to="/about" >About</Link></li>
                                <li><span >Dental Service <FaChevronDown /></span>
                                    <ul class="submenu m-ul">
                                        <li><a href="/Implants">Dental Implants</a></li>
                                        <li><a href="https://unidental.com.mx/content/Smile_Makeover">Cosmetic Dentistry</a></li>
                                        <li><a href="https://unidental.com.mx/content/Root">Restorative Dentistry</a></li>
                                        <li><a href="https://unidental.com.mx/content/Surgery">Oral Surgery</a></li>
                                        <li><a href="https://unidental.com.mx/content/Orthodontics">Orthodontics</a></li>
                                        <li><a href="https://unidental.com.mx/content/Children%E2%80%99s-Dentistry">Children’s Dentistry</a></li>
                                        <li><a href="https://unidental.com.mx/content/Implants%20Solution">Implant Denture</a></li>
                                    </ul>
                                </li>
                                <li><Link to="/why">Why choose US</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="col-xl-3">
                            <div className="d-inline-flex">  
                                <div className="p-2">
                                    <a href='' className="u-color-text-yellow u-bold">956.465.4231 | 956.238.4949</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav