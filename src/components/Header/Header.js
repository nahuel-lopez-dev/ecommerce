// import React from 'react' ya no es necesario en las nuevas versiones
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import CardWidget from '../CartWidget/CardWidget'
import { LogoIcono } from '../LogoIcono/LogoIcono'
import { Link } from "react-router-dom"

export const header = () => {
    return (
        <div>
            <header>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="border-bottom p-4">
                    <Container>
                        <LogoIcono />
                        <figure className="mt-3">
                            <blockquote className="blockquote">
                                <Navbar.Brand href="#home" className="fs-1 logoNombre">Ecommerce</Navbar.Brand>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                <cite title="Titulo de la fuente">Nunca es tarde para comprar</cite>
                            </figcaption>
                        </figure>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-lg-4 me-4 fs-4">
                                <Nav.Link href="#features">Home</Nav.Link>
                                <Nav.Link href="#pricing">Nosotros</Nav.Link>
                                <NavDropdown title="Productos" id="collasible-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="/cajas" href="#action/3.1">Cajas</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/barras" href="#action/3.2">Barras</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/bombones" href="#action/3.3">Bombones</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav className="ms-auto">
                                <Nav.Link href="#deets" className="mt-md-3">Crear cuenta</Nav.Link>
                                <Nav.Link eventKey={2} href="#memes" className="mt-md-3">Iniciar sesión</Nav.Link>
                                <CardWidget text=" Carrito 6" />
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </div>
    )
}

export default header