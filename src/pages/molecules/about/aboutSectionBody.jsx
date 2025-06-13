import facilitiesPrincipal from "../../../assets/img/facilities_01.png"
import facilitiesTwo from "../../../assets/img/facilities_02.png"
import facilitiesThree from "../../../assets/img/facilities_03.png"
import Daniella from "../../atoms/daniella";
import Karina from "../../atoms/karina";
import Laura from "../../atoms/laura";
import Samano from "../../atoms/samano";


const AboutSectionBody = () => {
    return(
        <>
            <div className="container pt-5">
                <div className="row mx-0">
                    <div className="col-xl-6 u-box-yellow p-4 u-border-roud-all">
                        <span className="text-white u-content-stxt">Our entire dental care team is dedicated to 
                        providing you with our “Five-Star” service. 
                        Each member of our team works together 
                        to meet all the dental needs of our patients 
                        in a gentle, professional, and caring manner. <br/><br/>

                        We take great pride in our knowledge and 
                        experience, and are committed to continuing 
                        education focused on state-of-the-art dentistry 
                        and makes each visit to our office a positive, 
                        pleasant experience.</span>
                    </div>
                    <div className="col-xl-6">
                        <video className="u-border-roud-all" width="100%" controls autoplay >
                            <source src="https://unidental.com.mx/img/Basal.mp4" type="video/mp4"  />
                        </video>
                    </div>
                </div>
            </div>
            {/* team doctors */}
            <div className="container pt-3">
                <div className="">
                    <span className="u-title-prin-content">Team</span>
                </div>
                <div className="row mx-0 pt-5">
                    <Samano/>
                    <Karina/>
                </div>
                <div className="row  mx-0 pt-5">
                    <Laura/>
                    <Daniella/>
                </div>
            </div>
            {/* end team doctors */}
            
            {/* facilities unidental */}
            <div className="container pt-5">
                <div className="col-xl-12">
                    <span className="u-title-prin-content">Facilities</span>
                </div>
                <div className="col-xl-12 text-center pt-5">
                    <span className="u-content-stxt ">
                    Our facilities are designed to offer a pleasant stay, with modern and equipped consultation rooms and comfortable waiting rooms.<br/> 
                    Cleanliness, professionalism, friendly people, and an attractive, welcoming environment  are a few of the attributes we feel our 
                    patients look <br/>for and appreciate in our facility.
                    </span>
                </div>
                <div className="row mx-0 pt-5">
                    <div className="col-xl-12">
                        <img className="img-fluid" src={facilitiesPrincipal} />
                    </div>
                    <div className="col-xl-6 pt-5">
                    <img className="img-fluid" src={facilitiesTwo} />
                    </div>
                    <div className="col-xl-6 pt-5">
                    <img className="img-fluid" src={facilitiesThree} />
                    </div>
                </div>
            </div>
            {/* end facilities unidental */}
        </>
    )
}



export default AboutSectionBody;