import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

export const navbar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="border-bottom">
                <Container>
                    <Navbar.Brand href="#home" className="p-4 fs-1">Ecommerce</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto fs-4">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">Nosotros</Nav.Link>
                            <NavDropdown title="Servicios" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Páginas web</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Desarrollo de software</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Seguridad informática</NavDropdown.Item>
                                {/* <NavDropdown.Divider/> */}
                                {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Otro 1</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">Otro 2</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default navbar