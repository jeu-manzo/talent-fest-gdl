import React from 'react';
import Home from './components/Home'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/profile" component={Profile} /> */}
          </Switch>
        </>
      </Router>
    )
  }
}

export default App;
