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
                <p>Nombre</p><span></span>
                <p>Ubicación</p><span></span>
              </Card.Text>
              <Button variant="primary">Ver más</Button>
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