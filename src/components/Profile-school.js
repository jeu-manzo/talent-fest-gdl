import React from 'react';
import { Card } from 'react-bootstrap';
import StaticScore from './StaticScore'
import NavBar from './Nav-bar';

class Profile extends React.Component{
    constructor(props){
        super(props)
    }
   
    render(){
        
        return(
        <div>   
            <NavBar/>
            <section>
    Nombre
    Direccion y teléfono
    </section>
    
    <section>Mapa!!</section>

    <Card style={{ width: '100%' }}>
          <section className="row">

            
  <Card.Body className="col-7">
    <Card.Title>
    <p>Calificación google</p>
     <p>Calificación Interna </p> <span className="adminScore"></span>
    </Card.Title>
    <Card.Text>
    <section className= "row" >
      <section className = "col-6">
     <span>Administracion<StaticScore score={3}/></span> //traer de la data el score
     <span>Actividades Extracurriculares<StaticScore score={3}/></span>
     <span>Maestros<StaticScore score={3}/></span>
     </section>
      <section className = "col-6">
     <span>Seguridad<StaticScore score={3}/></span>
     <span>Manejo de bullying<StaticScore score={3}/></span>
     <span>Tamaño de los grupos<StaticScore score={3}/></span>
     </section>
     </section>
    </Card.Text>
  </Card.Body>
  
  <section className="col-5">
  <Card.Img variant="top" src="https://solarsystem.nasa.gov/system/basic_html_elements/11561_Sun.png" />
  </section>
  </section>

</Card>

<section className= "row" >
<section className = "col-6">
<Card>
  <Card.Body>
    <Card.Title>Comentarios</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
</section>
<section className = "col-6">
<Card>
  <Card.Body>
    <Card.Title>Noticias</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>

</section>
</section>
        </div>  
        )
    }
}

export default Profile