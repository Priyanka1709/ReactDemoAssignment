import React from "react";
import PropTypes from "prop-types";

import Button from "./button";

const IncrementForm= (props) => {
    return (
        <div className="center">
            <h3>Increment Form</h3>
            <input value= {props.textInput} type= "number" onChange={props.textBoxChangeHandler}/>
            <br/><br/>
            <div>
                <Button buttonText="+" clickHandler= {props.addButtonHandler}/>
                <Button buttonText="-" clickHandler= {props.subtractButtonHandler}/>
            </div>
        </div>
    );
}

IncrementForm.propTypes= {
    textInput: PropTypes.string.isRequired,
    textBoxChangeHandler: PropTypes.func.isRequired,
    addButtonHandler: PropTypes.func.isRequired,
    subtractButtonHandler: PropTypes.func.isRequired
}

export default IncrementForm;