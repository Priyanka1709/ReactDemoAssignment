import React from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import PropTypes from "prop-types";

import Home from "./home/home";
import About from "./about/about";
import Contact from "./contact/contact";

const Body= (props)=> {
     return (
        <Switch>
            <Route path={`/home`} component={(innerProps)=> {
                return(
                    <Home match={innerProps.match} textInput={props.textInput} textBoxChangeHandler={props.textBoxChangeHandler} addButtonHandler={props.addButtonHandler} subtractButtonHandler={props.subtractButtonHandler} />
                );                    
            }}/>
            <Route path={`/about`} component={About}/>
            <Route path={`/contact`} component={Contact}/>
            <Redirect exact path={`/`} to={`/home`}/>
        </Switch>
    );
}

Body.propTypes= {
	textInput: PropTypes.string.isRequired,
    textBoxChangeHandler: PropTypes.func.isRequired,
    addButtonHandler: PropTypes.func.isRequired,
    subtractButtonHandler: PropTypes.func.isRequired
}

export default Body;