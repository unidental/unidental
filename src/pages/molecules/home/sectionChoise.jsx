import unidentalChoise from "../../../assets/img/unidental_office.png"
import { FaCirclePlus } from "react-icons/fa6";

const SectionChoise = () =>{
    return(
        <>
        <div className="container pt-5">
            <div className="row mx-0">
                <div className="col-xl-6">
                    <div className="col-xl-12">
                        <div className="col-xl-12">
                            <span className="u-title-prin-content">Why Choose </span>
                            <span className="u-title-prin-content-black">Unidental?</span>
                        </div>
                        <div className="col-xl-12 pt-4">
                            <span className="u-content-stxt">
                            <FaCirclePlus className="u-color-text-yellow" /> More than 20 years of Experience<br/>
                            <FaCirclePlus className="u-color-text-yellow" /> Free round transportation from Brownsville, TX 
                            to Matamoros, Mexico.<br/>
                            <FaCirclePlus className="u-color-text-yellow" /> Experts Certified Specialist Dentists.<br/>
                            <FaCirclePlus className="u-color-text-yellow" /> The best price-quality ratio you can expect.<br/>
                            <FaCirclePlus className="u-color-text-yellow" /> US Financial options.<br/>
                            <FaCirclePlus className="u-color-text-yellow" /> Most US Dental insurance accepted.<br/>
                            <FaCirclePlus className="u-color-text-yellow" /> We have the best equipment and we do all the 
                            treatments in one place.<br/>
                            <FaCirclePlus className="u-color-text-yellow" /> Same day Porcelain Crowns (by request).<br/>
                            <FaCirclePlus className="u-color-text-yellow" /> Sedation Dentistry Available.<br/>
                            <FaCirclePlus className="u-color-text-yellow" /> Our dental laboratory uses the highest materials.<br/>
                            <FaCirclePlus className="u-color-text-yellow" /> English spoken.
                            </span>
                        </div>
                        <div className="col-xl-12 pt-4">
                            <a  className="u-button" href="">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6">
                    <img className="img-fluid" src={unidentalChoise} alt="Unidental"/>
                </div>
            </div>
        </div>
        </>
    )
}




export default SectionChoise;