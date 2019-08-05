import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.email)
  }

  render () {
    return (
      <Form>
        <Form.Group controlId="formGridEmail">
          <Form.Label>Correo</Form.Label>
          <Form.Control type="email" placeholder="Ingresar correo" name="email" value={this.state.email} onChange={this.handleChange}/>
        </Form.Group>

        <Form.Group controlId="formGridPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Ingresar contraseña" name="password" value={this.state.password} onChange={this.handleChange} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Iniciar Sesión
        </Button>
      </Form>
    )
  }
};

export default Signin;
