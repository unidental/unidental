import daniella from "../../assets/img/u_daniela_dr.png"
import { FaCaretRight } from "react-icons/fa6";
const Daniella = () => {
    return(
        <>
            <div className="col-xl-6">
                            <div className="col-xl-12">
                                <div className="col-xl-12">
                                    <img className='img-fluid' src={daniella} alt="Dra. Daniella M. Pérez" />
                                </div>
                                <div className="col-xl-12 u-box-yellow py-4 px-5">
                                <div className="col-xl-12">
                                    <span className="u-title-bold-white">Dra. Daniella M. Pérez Cisneros</span><br/>
                                    <span className='u-subtitle-bold-white'>Pediatric Dentistry</span>
                                </div>
                                <div className="col-xl-12">
                                    <span>
                                    <FaCaretRight /> Cirujano Dentista- Universidad de Matamoros. 2008<br/>
                                    <FaCaretRight /> Diplomado en Odontopediatría<br/>
                                    <FaCaretRight /> IDAP de Monterrey -2011<br/>
                                    <FaCaretRight /> <br/>
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

export default Daniella