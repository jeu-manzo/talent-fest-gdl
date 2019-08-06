import React from 'react';
import { Card } from 'react-bootstrap';
import DinamicStars from './DinamicScore'
import Star from './Star'

class Profile extends React.Component{
    constructor(props){
        super(props)
    }
   
    render(){
        
        return(
        <div>   
            <section>
    Nombre
    Direccion y teléfono
    </section>
    
    <section>Mapa!!</section>

    <Card style={{ width: '80%' }}>
          <section className="row">

            
  <Card.Body className="col-7">
    <Card.Title>
    <p>Calificación google</p>
     <p>Calificación Interna </p>
    </Card.Title>
    <Card.Text>
  
     <span>Diversidad<DinamicStars/></span>
     <span>Seguridad<DinamicStars/></span>
     <span>Maestros<DinamicStars/></span>
     <span>Manejo de bullying<DinamicStars/></span>
     <span>Comida<DinamicStars/></span>
     <span>Cultura escolar<DinamicStars/></span>
    </Card.Text>
  </Card.Body>
  <section className="col-5">
  <Card.Img variant="top" src="https://solarsystem.nasa.gov/system/basic_html_elements/11561_Sun.png" />
  </section>
  </section>
</Card>
<DinamicStars/>

        </div>  
        )
    }
}

export default Profile