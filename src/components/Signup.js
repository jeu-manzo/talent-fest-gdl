import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      user: '',
      status: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.status);
  }

  render () {
    return (
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Correo</Form.Label>
            <Form.Control type="email" placeholder="Ingresar correo" name="email" value={this.state.email} onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Crear contraseña" name="password" value={this.state.password} onChange={this.handleChange}/>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label>Usuario</Form.Label>
            <Form.Control placeholder="Crear usuario" name="user" value={this.state.user} onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Status</Form.Label>
            <Form.Control as="select" name="status" value={this.state.status} onChange={this.handleChange}>
              <option>Estudiante</option>
              <option>Padre de familia</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
          Crear Cuenta
        </Button>
      </Form>
    )
  }
};

export default Signup;
