import React from 'react';
import { Navbar, Nav } from "react-bootstrap";
import '../styles/Nav-bar.css'

class NavBar extends React.Component{

    render(){
        return(
          <Navbar className="nav-bar"  variant="dark">
          <Nav className="mr-auto">
          <Nav.Link href="#shareopinion">Escribir reseña</Nav.Link>
            <section className="sesionStatus">
            <Nav.Link className="login" href="#login">Iniciar sesión</Nav.Link>
            <Nav.Link className="login" href="#login">Crear cuenta</Nav.Link>    
            </section>
          </Nav>
        </Navbar>
        )
    }
}

export default NavBar;
