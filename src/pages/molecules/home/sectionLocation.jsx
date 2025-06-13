import logoUnidental from "../../../assets/img/uni-log.png"
import { FaPhone } from "react-icons/fa6";
const SectionLocation = () => {
    return(
        <>
        <div className="container py-5">
            <div className="row mx-0">
                <div className="col-xl-6">
                    <div className="col-xl-12">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224.3308246390117!2d-97.49920143640807!3d25.892730473584873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866f94f5b846d48b%3A0x9badb4bf9f080fc4!2sUnidental!5e0!3m2!1ses!2smx!4v1749565322508!5m2!1ses!2smx" width={500} height={450}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="col-xl-12">
                        <div className="col-xl-12">
                            <img className="img-fluid" src={logoUnidental} alt="unidental logo" />
                        </div>
                        <div className="col-xl-12 pt-5">
                            <span className="u-title-solid-black">Unidental Matamoros</span>
                        </div>
                        <div className="col-xl-12">
                            Calle Primera #267<br/>
                            Between Rosas and Nardos<br/>
                            Colonia Jardín<br/>
                            H. Matamoros, Tamaulipas. Mexico<br/>
                            C.P. 87330<br/>
                            Ph: <span className="u-color-text-yellow u-bold">(956) 465-4231</span> & <span className="u-color-text-yellow u-bold">238-4949</span><br/>
                            MX Ph: <span className="u-color-text-yellow u-bold">+52 (868)813-0482</span> & <span className="u-color-text-yellow u-bold">+52 (868)812-5607</span>
                        </div>
                        <div className="col-xl-12 pt-4">
                            <a className="u-button" href="tel:+19564654231"> <FaPhone /> (956) 465-4231</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}



export default SectionLocation