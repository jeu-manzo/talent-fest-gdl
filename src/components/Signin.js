import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
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
 }
 handleSubmit = (e) => {
  e.preventDefault()
  const api = "https://api-ecuelas.herokuapp.com/api/user/login";
   axios.post(api, {
   email: this.state.email,
   password: this.state.password
 })
 .then((res) => {
   console.log('res', res);
   console.log('signin')
   // res status OK ?
   if (res.status === 200) {
     // access to token
     const token = res.data.token
     console.log('token', token)
     // set credentals values
     this.props.updateCredentials(token, true)
     this.props.history.push('/rate')
   }
 })
 .catch((error) => {
   console.log(error);
 });
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
       <Button variant="primary" type="submit" onClick={this.handleSubmit}>
         Iniciar Sesión
       </Button>
     </Form>
   )
 }
};
export default Signin;