import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import logo from "../assets/img/uni-log.png"
import { FaBars } from "react-icons/fa6";
const NavMobile = () =>{
    return (
        <>
            <div className="u-nav-h u-nav-b-color d-block d-sm-block d-md-block d-lg-none d-xl-none">
                <div className="d-flex justify-content-between mb-3">
                    <div className="p-2 text-white">
                        <span className="u-color-text-yellow"><FaPhone /></span> <a className="text-white" href="tel:+19564654231">956.465.4231</a></div>
                    <div className="p-2"></div>
                    <div className="p-2 text-white"> 
                    <a className="u-color-text-yellow u-bold" href="mailto:info@unidental.com.mx"><FaEnvelope />  Email us</a></div>
                </div>
            </div>
            <nav className=" d-block d-sm-block d-md-block  d-lg-none d-xl-none">
                <div className="d-flex justify-content-between mb-3">
                    <div className="p-2 text-white">
                        <div className="col-6">
                           <img className="img-fluid"  src={logo} alt="Unidental matamoros" /> 
                        </div>
                    </div>    
                    <div className="p-2"></div>
                    <div className="px-4 py-2">
                        <FaBars />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavMobile