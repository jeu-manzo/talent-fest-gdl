import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../styles/preliminar-card.css'


class PreliminarCard extends React.Component {

    render() {

        return (
            <div>
                 <Card style={{ width: '30rem' }}>
          <section className="row">
            
  <Card.Body className="col-7">
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
     <span>Nombre</span>
     <span>Ubicación</span>
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  <section className="col-5">
  <Card.Img variant="top" src="https://solarsystem.nasa.gov/system/basic_html_elements/11561_Sun.png" />
  <span>Calificación</span>
  </section>
  </section>
</Card>

            </div>

        )
    }
}

export default PreliminarCard;