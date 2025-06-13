import dentalTratament from "../../../assets/img/dental_tratament.png"

const SectionTratament = () =>{
    return(
        <>
        <div className="container pt-5">
            <div className="row mx-0">
                <div className="col-xl-6 u-box-yellow u-border-roud-left">
                    <div className="col-xl-12 px-5 text-center">
                        <span className="u-title-prin-content-black">Maximum quality in</span>
                        <span className="u-title-prin-content-white"> dental treatments</span>
                    </div>
                    <div className="col-xl-12 px-3">
                        <span className="u-content-stxt pt-4 text-white">
                        Unidental is one of the best options at your fingertips.
                        We offer an extraordinary quality of service with the latest 
                        technology in the sector without giving up personalized 
                        attention and prices adjusted to your needs.<br/><br/>

                        With us you will find the solution to restore your dream 
                        smile, the functionality of your teeth and the safety of 
                        your mouth health.<br/><br/>

                        The team of professional dentists and the dental clinic 
                        are each specialized in an area, in order to be able to 
                        provide our patients with the best quality of treatment 
                        while always being at the forefront of the latest advances 
                        in dentistry.
                        </span>
                    </div>
                </div>
                <div className="col-xl-6 px-0">
                    <img className="img-fluid" src={dentalTratament} alt="unidental dental tratament Matamoros Mexico"/>
                </div>
            </div>
        </div>
        </>
    )
}



export default SectionTratament