import React from 'react';
import { Navbar, Nav } from "react-bootstrap";



class NavBar extends React.Component{

    render(){
        
        return(               
            <>
            <Navbar bg="dark" variant="dark">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Iniciar sesión</Nav.Link>
                <Nav.Link href="#features">Crear cuenta</Nav.Link>
              </Nav>
            </Navbar>           
          </>
        )
    }
}

export default NavBar;