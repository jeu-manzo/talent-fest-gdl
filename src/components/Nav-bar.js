import React from 'react';
import { Navbar, Nav } from "react-bootstrap";



class NavBar extends React.Component{

    render(){


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


        return(
            <div>
              {/* <Nav.Item>
                <Nav.Link>
                  <Link to="/">Home</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="/login">Login</Link>
                </Nav.Link>
              </Nav.Item> */}
              </div>
        )
    }
}

export default NavBar;
