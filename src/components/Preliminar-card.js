import React from 'react';
import { Card, Button } from 'react-bootstrap';



class PreliminarCard extends React.Component {

    render() {

        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://previews.123rf.com/images/tigatelu/tigatelu1509/tigatelu150900582/45092989-ni%C3%B1os-de-la-escuela-felices-en-frente-de-la-escuela.jpg" />
                    <Card.Body>
                        <Card.Title><span className=""></span>nombre de escuela</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>

        )
    }
}

export default PreliminarCard;