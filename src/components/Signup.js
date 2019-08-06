import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
class Signup extends Component {
 constructor(props) {
   super(props);
   this.state = {
     email: '',
     password: '',
     name: '',
     status: 'Estudiante',
   };
 }
 handleChange = (e) => {
   this.setState({ [e.target.name]: e.target.value });
 }
 handleSubmit = (e) => {
  e.preventDefault()
  const api = "https://api-ecuelas.herokuapp.com/api/user/register";
   axios.post(api, {
   email: this.state.email,
   password: this.state.password,
   name: this.state.name,
   status: this.state.status
   } )
 .then(res => {
   console.log(res)
 })
 .catch(err =>
   console.log(err)
 );
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
           <Form.Control placeholder="Crear usuario" name="name" value={this.state.name} onChange={this.handleChange}/>
         </Form.Group>
         <Form.Group as={Col} controlId="formGridState">
           <Form.Label>Status</Form.Label>
           <Form.Control as="select" name="name" value={this.state.name}  onChange={this.handleChange}>
             <option name="name" value="Estudiante">Estudiante</option>
             <option name="name" value="Padre de familia">Padre de familia</option>
           </Form.Control>
         </Form.Group>
       </Form.Row>
       <Button variant="primary" type="submit" onClick={this.handleSubmit}>
         Crear Cuenta
       </Button>
     </Form>
   )
 }
};
export default Signup;