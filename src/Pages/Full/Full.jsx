import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Dashboard from "../Dashboard/Dashboard";

class Full extends Component {
    render() {
        return (
            <Container>
                <Switch>
                    <Route  path="/dashboard" name="Dashboard" component={Dashboard}/>
                    <Redirect from="/home" to="/dashboard"/>
                </Switch>
            </Container>
        )
    }
}

export default Full;