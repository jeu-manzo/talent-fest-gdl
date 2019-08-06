import React from 'react';
import Filters from './Filters';
import PreliminarCard from './Preliminar-card';
import NavBar from './Nav-bar';
import '../styles/Home.css';

class Home extends React.Component{

    render(){

        return(
        <div>   
            <NavBar/>
            <div id="main">
                <Filters/>
                <section className="preliminar-card">
                    <PreliminarCard />
                </section>
            </div>
        </div>
        )
    }
}

export default Home;
