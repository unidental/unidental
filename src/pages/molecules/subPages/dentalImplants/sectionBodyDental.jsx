import oldWomanPic from "../../../../assets/img/old_woman.png"
import { FaCaretRight } from "react-icons/fa6";
import  Monophasic_Basal_Implants from "../../../../assets/img/Monophasic_Basal_Implants.png"

const SectionBodyDental = () => {
    return(
        <>
            <div className="container pt-5">
                <div className="col-xl-12">
                    <div className="col-xl-12 text-center">
                        <span className="u-title-prin-content">Are you tired of worrying about the state</span>
                    </div>
                    <div className="col-xl-12 text-center">
                        <span className="u-content-stxt"> of your teeth or having  your dentures come loose<br/> 
                        at the worst possible time?</span>
                    </div>
                </div>
            </div>
            {/* old woman section  */}
            <div className="container pt-5">
                <div className="row mx-0">
                    <div className="col-xl-4 px-0">
                        <img className="img-fluid" src={oldWomanPic} alt="unidental-multimedia"   />
                    </div>
                    <div className="col-xl-8 px-0 u-box-yellow u-border-roud-right">
                        <div className="col-xl-12">
                            <div className="col-xl-12 text-center">
                                <span className="u-title-prin-content-white">A life-changing smile</span><br/>
                                <span className="u-title-subTitle">you can afford</span>
                            </div>
                            <div className="col-xl-12 px-5 pt-4">
                                <span>
                                    <FaCaretRight /> Dental implants dramatically improve chewing ability and facial appearance, 
                                    while our patients also talk about enhancing their quality of life and boosting 
                                    self-confidence.<br/>
                                    <FaCaretRight /> Single implant and semi-permanent tooth in 24 hours.<br/>
                                    <FaCaretRight /> Full jaw restoration in just 72 hours.<br/>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end old woman section */}

            {/* section  Monophasic Basal Implants */}
            <div className="container pt-5">
                <div className="row mx-0 pt-5">
                    <div className="col-xl-7 u-box-yellow u-border-roud-all">
                        <div className="col-xl-12 p-5">
                            <div className="col-xl-12 text-center">
                                <span className="u-title-prin-content-white">Dental Restorations Using </span><br/>
                                <span className="u-title-subTitle"> Monophasic Basal Implants</span>
                            </div>
                            <div className="col-xl-12 pt-4">
                                <span>
                                <FaCaretRight /> Monophasic or single-piece implants are the solution for those seeking 
                                a perfect smile in the shortest possible time.<br/><br/>
                                <FaCaretRight /> Using an advanced technique, these implants are fixed directly to the 
                                base of the bone, eliminating the need for additional procedures, such 
                                as bone grafts.
                                </span> 
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 img-float">
                        <img className="img-fluid u-border-roud-all " src={Monophasic_Basal_Implants}  alt="" />
                    </div>
                </div>
            </div>
            {/* end section  Monophasic Basal Implants */}
        </>
    )
}


export default SectionBodyDental;