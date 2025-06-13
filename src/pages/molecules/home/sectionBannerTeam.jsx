import team_unidental from "../../../assets/img/home_team.png"

const SectionBannerTeam = () => {
    return(
        <>
        <div className="container  pt-5 ">
            <div className="row mx-0 u-box-grey-round">
                <div className="col-xl-6 p-5">
                    <div className="col-xl-12">
                        <span className="u-title-prin-content">Our</span>
                        <span className="u-title-prin-content-black">Team</span>
                    </div>
                    <div className="col-xl-12">
                        <span className="u-content-stxt">
                        Our entire dental care team is dedicated to providing you with 
                        our “Five-Star” service. Each member of our team works together 
                        to meet all the dental needs of our patients in a gentle, professional, 
                        and caring manner.
                        </span>
                    </div>
                    <div className="col-xl-12 pt-4">
                        <a className="u-button" href="">Read More</a>
                    </div>
                </div>
                <div className="col-xl-6">
                    <img className="img-fluid" src={team_unidental} alt="Dr.Samano Dentist Matamoros Mexico"/>
                </div>
            </div>
        </div>
        </>
    )
}


export default SectionBannerTeam