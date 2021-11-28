import { LogoIcono } from '../LogoIcono/LogoIcono'
import "./Footer.css"

const Footer = () => {
    return (
        <div>
            <div className="container-fluid bg-light border-top footer mt-4">
                <div className="row">
                    <div className="mt-5">
                        <div className="cajaFooter">
                            <ul className="listaFooter">
                                <li><a href="#" className="itemListaFooter">Home</a></li>
                                <li><a href="#" className="itemListaFooter">Nosotros</a></li>
                                <li><a href="#" className="itemListaFooter">Productos</a></li>
                            </ul>
                            <div>
                                <a href="https://github.com/Nahuel-DevOne/" target="_blank"><img className="iconosRedesSociales" src="/images/github.svg" alt="Logo de github" /></a>
                            </div>
                            <div>
                                <a href="https://www.linkedin.com/in/nahuel-developer/" target="_blank"><img className="iconosRedesSociales" src="/images/linkedin.svg" alt="logo de Linkedin" /></a>
                            </div>
                            <a href="#" className="logoNombre m-4 d-flex">
                                <LogoIcono />
                                <p>Ecommerce</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
