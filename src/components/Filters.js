

import React from "react";
// import Button from 'react-bootstrap/Button';

class Filters extends React.Component {
  render() {
    return (
      <div className="container" style={{ width: "100%", marginTop: "10px", backgroundColor: "#00758f",textAlign:"center", fontSize:"20px", fontFamily:'Palatino Linotype', color:"white" }} >
        <div className="row">
          <div className="col-3">
            <label htmlFor="ratingFilter">Calificacion:</label>{" "}
            <select
              className="custom-select"
              name="ratingFilter"
              value={this.props.filters.ratingFilter}
              onChange={this.props.setFilter}
            >
              <option value={-1}>Mostrar todo</option>
              <option value={1}>1 o más</option>
              <option value={2}>2 o más</option>
              <option value={3}>3 o más</option>
              <option value={4}>4 o más</option>
              <option value={5}>5</option>
            </select>
          </div>
          <div className="col-3">
            <label htmlFor="ratingFilter">Nivel:</label>{" "}
            <select
              className="custom-select"
              name="ratingFilter"
              value={this.props.filters.lvlFilter}
              onChange={this.props.setFilter}
            >
              <option value={-1}>Primaria</option>
              <option value={1}>Preescolar</option>
              <option value={2}>Secundaria</option>
              <option value={3}>Preparatoria</option>
              <option value={4}>Universidad</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default Filters;



/*import React from 'react';
import '../styles/Filters.css';


class Filters extends React.Component{

    render(){
        
        return(
            <div className="container-filters">
                <input type="text" className="searchBar"  placeholder="Buscar escuelas cercanas a tu ubicación" />
                <fieldset class="radiogroup">              
                    <legend>Escolaridad</legend> 
                        <ul class="radio"> 
                            <li>
                                <input name="escolaridad" id="preescolar" type="radio" className="preescolar"  value="in" />
                                <label for="preescolar">Preescolar</label>
                            </li> 
                            <li>
                                <input name="escolaridad" id="primaria" type="radio" className="primaria" value="out" />
                                <label for="primaria" >Primaria</label></li>
                            <li>
                                <input name="escolaridad" id="secundaria" type="radio" />
                                <label for="secundaria">Secundaria</label>
                                    <ul class="radio"> 
                                        <li>
                                            <input name="secundaria" id="primero" type="radio" className="primero" value="in" />
                                            <label for="primero">Primero</label>
                                        </li> 
                                        <li>
                                            <input name="secundaria" id="segundo" type="radio" className="segundo"  value="out" />
                                            <label for="segundo">Segundo</label></li> 
                                        <li>
                                            <input name="secundaria" id="tercero" type="radio" className="tercero" value="delivery" />
                                            <label for="tercero">Tercero</label>
                                        </li> 
                                    </ul> 
                            </li>
                            <li>
                                <input name="escolaridad" id="medio-superior" type="radio" className="medioSuperior"  value="in" />
                                <label for="medio-superior">Medio Superior</label></li> 
                        </ul> 

                </fieldset> 
                <label>Distancia  <input type="range" className="distancia" name="radio" min="1" max="30" step="1" value="20"/> </label> 

                <div className="mapa">
                    <p>Soy el mapa</p>
                </div>

            </div>
        )
    }
}

export default Filters;*/