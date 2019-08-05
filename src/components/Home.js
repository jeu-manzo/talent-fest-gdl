import React from 'react';
import Filters from './Filters';
import NavBar from './Nav-bar';

class Home extends React.Component{

    render(){
        
        return(
        <div>   
       
        <NavBar/>
        <Filters/>
        </div>

           
        )
    }
}

export default Home;