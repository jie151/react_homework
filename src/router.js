import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./login";
import App from "./App";

export default class MyRoute extends React.Component{
    render(){
        return(
            <Router>
                <Link to='/Sign in'></Link>
                <Switch>
                    <Route exact path="/" component={Login}/> 
                    <Route path="/Sign in" component={App}/>
                </Switch>
            </Router>
        )
    }  
}