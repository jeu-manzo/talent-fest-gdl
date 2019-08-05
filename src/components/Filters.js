import React from 'react';

class Filters extends React.Component{

    render(){
        
        return(
            <div>
                <input type="text" className="searchBar"  placeholder="Buscar escuelas cercanas a tu ubicación" />                 
                    <legend>Escolaridad</legend> 
                        <ul class="radio"> 
                            <li><input type="radio" className=""  value="in" /><label >Preescolar</label></li> 
                            <li><input type="radio" className="" value="out" /><label >Primaria</label></li> 
                        </ul> 
               
                 
                <fieldset class="radiogroup"> 
                    <legend>Secundaria</legend> 
                        <ul class="radio"> 
                            <li><input type="radio" className="" value="in" /><label for="del1">Primero</label></li> 
                            <li><input type="radio" className=""  value="out" /><label for="del2">Segundo</label></li> 
                            <li><input type="radio" className="" value="delivery" /><label for="del3">Tercero</label></li> 
                        </ul> 
                </fieldset> 

            
                <ul class="radio"> 
                    <li><input type="radio" className=""  value="in" /><label >Medio Superior</label></li> 
                </ul> 
                <label>Distancia  <input type="range" className="" name="radio" min="1" max="30" step="1" value="20"/> </label> 

                <div>
                    <p>Soy el mapa</p>
                </div>

            </div>
        )
    }
}

export default Filters;