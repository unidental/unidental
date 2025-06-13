import karina from "../../assets/img/u_karina_dr.png"
import { FaCaretRight } from "react-icons/fa6";


const Karina = () => {
    return(
        <>
            <div className="col-xl-6">
                <div className="col-xl-12">
                    <div className="col-xl-12">
                        <img className='img-fluid' src={karina} alt="Dra. Karina Pérez" />
                    </div>
                    <div className="col-xl-12 u-box-yellow py-4 px-5">
                    <div className="col-xl-12">
                        <span className="u-title-bold-white">Dra. Karina Pérez Longoria</span><br/>
                        <span className='u-subtitle-bold-white'>General and Cosmetic Dentistry</span>
                    </div>
                    <div className="col-xl-12">
                        <span>
                        <FaCaretRight /> Medico Cirujano Dentista<br/>
                        <FaCaretRight /> Universidad autonoma de Tamaulipas (TAMPICO)<br/>
                        <FaCaretRight /> Odontologia integral , Estetica y Restauradora.<br/>
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


export default Karina