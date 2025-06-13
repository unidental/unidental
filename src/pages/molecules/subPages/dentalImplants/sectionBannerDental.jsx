import dentalImplantBanner from "../../../../assets/img/banner_dental_implant.png"


const SectionBannerD = () => {
    return(
        <>
         <div className="container d-none d-sm-none d-md-none d-lg-block d-xl-block">
            <div className="u-position">
                    <div>
                        <span className="u-title-prin-content-home text-white">Get from a single tooth to</span><br/>
                        <span className="u-title-secod">a full arch in a<br/> single visit!s</span>
                    </div>
                    <div className="u-content-stxt">
                        Welcome to Unidental, recognized as the best option of Dentists<br/>
                        on the Border. Our High quality-experienced Multidisciplinary <br/>
                        Dentistry Center provide quality dental care, safely and comfortably.
                    </div>
                    <div className="pt-3">
                        
                    </div>
            </div>
            <div className="col-xl-12">
                <img className="img-fluid" src={dentalImplantBanner} alt="Unidental Matamoros Dentist" />
            </div>
        </div>
        </>
    )
}



export default SectionBannerD;