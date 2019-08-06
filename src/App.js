import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Rate from './components/Rate';
import PrivateRoute from './components/PrivateRoute';
import storageHelper from './helpers/storageHelper';
import Signup from './components/Signup';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Profile from './components/Profile-school'
import Shareopinion from './components/ShareOpinion'

class App extends React.Component {
  constructor(props) {
    super(props);
    const isAuth = storageHelper.getValue('isAuth')
    const token = storageHelper.getValue('token')
    this.state = {
      isAuth,
      token
    };
  }

  updateCredentials = (token, isAuth) => {
    storageHelper.save('token', token)
    storageHelper.save('isAuth', isAuth)
    this.setState({ token, isAuth })
  }


  render() {
    return (
      <Router>
        <>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" render={routeprops => {
             return <Login {...routeprops} updateCredentials={this.updateCredentials} />
           }} />
           <PrivateRoute path="/shareopinion" component={Shareopinion} isAuth={this.state.isAuth} />
           <PrivateRoute path="/profileschool" component={Profile} isAuth={this.state.isAuth} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </>
      </Router>
    )
  }
}

export default App;
