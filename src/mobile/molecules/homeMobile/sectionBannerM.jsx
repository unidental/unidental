import BannerM from "../../../assets/img/banner_principal_M.png"


const SectionBannerM = () => {
    return(
        <>
        <div className="container d-block d-sm-block d-md-block d-lg-none d-xl-none">
                <div className="col-xl-12 u-position-m pt-4">
                    <div className="col-xl-12 text-center">
                        <span className="dancing-script u-title-prin-m">Your affordable and</span><br/>
                        <span className="u-title-secod-m">reliable dentists</span>
                    </div>
                    <div className="col-xl-12 u-content-stxt text-center">
                        Welcome to Unidental, recognized as the best option<br/>
                        of Dentists on the Border. Our High quality-experienced <br/>
                        Multidisciplinary Dentistry Center provide quality <br/>
                        dental care, safely and comfortably.
                    </div>
                    <div className="col-xl-12 pt-3">
                        
                    </div>
                </div>
            <img className="img-fluid" src={BannerM} alt="Unidental Matamoros Mexico"/>
        </div>
        </>
    )
}



export default SectionBannerM