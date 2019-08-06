import React from 'react';
import './stars.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ratings = {
    diversidad : 2.8,
    seguridad : 3.3,
    maestros : 1.9,
    manejoDeBullying : 4.3,
    Comida : 4.74,
    culturaEscolar:5
  };
    // total number of stars

function DinamicStars (props){
      
    
    
        
        return(
            <div>
              <tr className={`${props.name}`}>
                <td>Diversidad</td>
                <td>
                  <div className="stars-outer">
                    <div className="stars-inner"></div>
                  </div>
                </td>
              </tr>

          <a className="attribution" href="http://fontawesome.io/"><FontAwesomeIcon icon="coffee" /></a>
          </div>
        )
    
}

export default DinamicStars;




{/* <tr className="seguridad">
                <td>Seguridad</td>
                <td>
                  <div className="stars-outer">
                    <div className="stars-inner"></div>
                  </div>
                </td>
              </tr>
              <tr className="maestros">
                <td>Maestros </td>
                <td>
                  <div className="stars-outer">
                    <div className="stars-inner"></div>
                  </div>
                </td>
              </tr>
              <tr className="manejoDeBullying">
                <td>Manejo de bullying</td>
                <td>
                  <div className="stars-outer">
                    <div className="stars-inner"></div>
                  </div>
                </td>
              </tr>
              <tr className="comida">
                <td>Comida</td>
                <td>
                  <div className="stars-outer">
                    <div className="stars-inner"></div>
                  </div>
                </td>
              </tr>
              <tr className="culturaEscolar">
                <td>Cultura escolar</td>
                <td>
                  <div className="stars-outer">
                    <div className="stars-inner"></div>
                  </div>
                </td>
</tr>*/}