import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Profile from './components/Profile-school'
import Shareopinion from './components/ShareOpinion'

class App extends React.Component {
  render() {
    return (
      <Router>
        <>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/profileschool" component = {Profile}/>
            <Route path="/shareopinion" component = {Shareopinion}/>
           
          </Switch>
        </>
      </Router>
    )
  }
}

export default App;
