import React, { Component } from 'react';
import {history} from "./components/History/History";
import { Router, Route, Switch} from 'react-router-dom';
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Full from "./Pages/Full/Full";
import './App.css';

class App extends Component {
  render() {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/register" name="Register Page" component={Register}/>
                <Route path="/home" name="Home" component={Full}/>
                <Route path="/" name="Login" component={Login}/>
            </Switch>
        </Router>
    );
  }
}

export default App;
