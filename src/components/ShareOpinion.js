import React from 'react';
import DynamicScore from './DynamicScore'


class ShareOpinion extends React.Component {
    render() {

        return (

            <div>
                <section>
                    <p>Nombre</p>
                    <p> Direccion y teléfono</p>
                </section>
                <section>
                    Califica tu experiencia en general con la escuela <span>""</span>
                    <DynamicScore />
                    <textarea placeholder="Cuéntale a los demás tu experiencia ¿Qué es lo que más te ha gustado?, ¿Y qué te gustaría cambiar?"></textarea>
                </section>
                <h2>Califica lo siguiente </h2>
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
            </div>
        );
    }
}

export default ShareOpinion;