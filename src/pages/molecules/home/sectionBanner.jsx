import BannerPrincipal from "../../../assets/img/banner_principal_home.png";
import Button from "../../atoms/button";
import SectionBannerM from "../../../mobile/molecules/homeMobile/sectionBannerM"
const SectionBanner = () => {

    return(
        <>
            <div className="container d-none d-sm-none d-md-none d-lg-block d-xl-block">
            <div className="u-position">
                    <div>
                        <span className="u-title-prin-content-home">Your affordable and</span><br/>
                        <span className="u-title-secod">reliable dentists</span>
                    </div>
                    <div className="u-content-stxt">
                        Welcome to Unidental, recognized as the best option of Dentists<br/>
                        on the Border. Our High quality-experienced Multidisciplinary <br/>
                        Dentistry Center provide quality dental care, safely and comfortably.
                    </div>
                    <div className="pt-3">
                        <Button/>
                    </div>
            </div>
            <div className="col-xl-12">
                <img className="img-fluid" src={BannerPrincipal} alt="Unidental Matamoros Dentist" />
            </div>
        </div>
        <SectionBannerM/>
        </>
    )
}


export default SectionBanner