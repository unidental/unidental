import laura from "../../assets/img/u_laura_dr.png"
import { FaCaretRight } from "react-icons/fa6";
const Laura = () => {
    return(
        <>
            <div className="col-xl-6">
                        <div className="col-xl-12">
                            <div className="col-xl-12">
                                <img className='img-fluid' src={laura} alt="Dra. Laura Perez" />
                            </div>
                            <div className="col-xl-12 u-box-yellow py-4 px-5">
                            <div className="col-xl-12">
                                <span className="u-title-bold-white">Dra. Laura Perez Wong</span><br/>
                                <span className='u-subtitle-bold-white'>Endodontics</span>
                            </div>
                            <div className="col-xl-12">
                                <span>
                                <FaCaretRight /> Cirujano Dentista. Univ. De Matamoros (2009)<br/>
                                <FaCaretRight /> Especialidad de Endodoncia Univ. AME (2011)<br/>
                                <FaCaretRight /> Practica Exclusiva en Endodoncia<br/>
                                <FaCaretRight /> Ced. Especialidad: 8143622<br/>
                                <FaCaretRight /> <br/>
                                <FaCaretRight /> 
                                </span>
                            </div>
                            <div className="col-xl-12 pt-4">
                                <button className='u-button-black'>Specialties</button>
                            </div>
                            </div>
                        </div>
                    </div>
        </>
    )
}

export default Laura 