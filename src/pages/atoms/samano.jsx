import samano from '../../assets/img/u_samano_dr.png'
import { FaCaretRight } from "react-icons/fa6";


const Samano = () => {
    return(
        <>
            <div className="col-xl-6">
                        <div className="col-xl-12">
                            <div className="col-xl-12">
                                <img className='img-fluid' src={samano} alt="Dr.Rolando Samano" />
                            </div>
                            <div className="col-xl-12 u-box-yellow py-4 px-5">
                            <div className="col-xl-12">
                                <span className="u-title-bold-white">Dr. Rolando Samano Brooks</span><br/>
                                <span className='u-subtitle-bold-white'> Orthodontics & Dental Implants</span>
                            </div>
                            <div className="col-xl-12">
                                <span>
                                <FaCaretRight /> Cirujano Dentista (UAT) 1985-1989<br/>
                                <FaCaretRight /> Especialización en Ortodoncia (UNAM) 1995-19998<br/>
                                <FaCaretRight /> Diplomado en “IMPLANTOLOGIA ORAL” 2017-2019<br/>
                                <FaCaretRight /> Diplomado en Oclusión Funcional (UNAM) 2002-2004<br/>
                                <FaCaretRight /> Diplomado en  Ortodoncia Pre-Quirúrgica 2005-2007<br/>
                                <FaCaretRight /> Certificado por el Consejo Mexicano de Ortodoncia 
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


export default Samano