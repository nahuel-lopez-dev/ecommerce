// import React from 'react' Ya no es necesario en las nuevas versiones
import { LogoIcono } from '../LogoIcono/LogoIcono'
import "./Footer.css"

export const Footer = () => {
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
                                <a href="#"><img className="iconosRedesSociales" src="./images/instagram.svg" alt="Logo de instagram" /></a>
                            </div>
                            <div>
                                <a href="#"><img className="iconosRedesSociales" src="./images/twitter.svg" alt="logo de twitter" /></a>
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
