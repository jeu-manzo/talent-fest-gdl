import React from 'react';
import DynamicScore from './DinamicScore'
import Button from 'react-bootstrap/Button';
import '../styles/shareOpinion.css'



class ShareOpinion extends React.Component {
    render() {

        return (

            <div className="userOpinion">
                <section>
                    <h4>Reseña de la escuela:</h4>
                    <h2 className="schoolName">Nombre</h2>

                    <p className="address"> Direccion y teléfono</p>
                </section>
                <section>
                    Califica tu experiencia en general con la escuela <span className="schoolName"></span>
                    <DynamicScore />
                    <textarea placeholder="Cuéntale a los demás tu experiencia ¿Qué es lo que más te ha gustado?, ¿Y qué te gustaría cambiar?"></textarea>
                </section>
                <h4>Califica lo siguiente </h4>
                <section className="row" >
                    <section className="col-6">
                    Administracion
                        <DynamicScore />
                        Actividades Extracurriculares
                        <DynamicScore />
                        Maestros
                        <DynamicScore />
                    </section>
                    <section className="col-6">
                    Seguridad
                        <DynamicScore />
                        Manejo de bullying
                        <DynamicScore />
                        Tamaño de los grupos
                        <DynamicScore />
                    </section>
                </section>
                <Button>Enviar</Button>
            </div>
        );
    }
}

export default ShareOpinion;
