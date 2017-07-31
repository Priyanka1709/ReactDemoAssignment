import React from "react";
import { Route } from 'react-router-dom';
import PropTypes from "prop-types";

import IncrementForm  from './incrementForm';

const HomeRightPane = (props) => {
   
    return (
            <section className="rightPane">
                <Route path={`${props.match.url}/incrementform`} component={()=> {
                    return(
                        <IncrementForm textInput={props.textInput} textBoxChangeHandler={props.textBoxChangeHandler} addButtonHandler={props.addButtonHandler} subtractButtonHandler={props.subtractButtonHandler} />
                    );                    
                }}/>
            </section>
        );
}

HomeRightPane.propTypes= {
    match: PropTypes.object.isRequired,
    textInput: PropTypes.string.isRequired,
    textBoxChangeHandler: PropTypes.func.isRequired,
    addButtonHandler: PropTypes.func.isRequired,
    subtractButtonHandler: PropTypes.func.isRequired
}

export default HomeRightPane;