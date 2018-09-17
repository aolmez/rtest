import React, {Component} from 'react';
import {history} from "./components/History/History";
import {Router, Route, Switch} from 'react-router-dom';
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Full from "./Pages/Full/Full";
import P404 from "./Pages/P404/P404";
import Dashboard from "./Pages/Dashboard/Dashboard";
import './App.css';

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/hello" render={() => {
                        return <h1>Goodmorning</h1>
                    }}/>
                    <Route path="/register" name="Register Page" component={Register}/>
                    <Route path="/home" name="Home" component={Full}/>
                    <Route path="/das" name="Home" component={Dashboard}/>
                    <Route exact path='/' component={Login}/>
                    <Route exact path='*' component={P404}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
