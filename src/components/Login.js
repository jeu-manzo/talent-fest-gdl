import React, {Component} from 'react';
import Signin from './Signin';
import Signup from './Signup';

//bootstrap
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formEnter: <Signin/>,
    };
  }

  changeStateSignin = () => {
    this.setState({ formEnter: <Signin/> });
  }

  changeStateSignup = () => {
    this.setState({ formEnter: <Signup/> });
  }




  render () {
    return (
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Bienvenido a X app</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link eventKey="link-signin" onClick={this.changeStateSignin}>Iniciar Sesión</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-signup" onClick={this.changeStateSignup}>Crear Cuenta</Nav.Link>
            </Nav.Item>
          </Nav>
          <div>
            {this.state.formEnter}
          </div>
        </Modal.Body>
      </Modal.Dialog>
    )
  }
}


export default Login;
