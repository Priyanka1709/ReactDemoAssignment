import React from "react";
import PropTypes from "prop-types";

const Input = (props) => {
    return (
            <input type={props.type} {props.required}/>
        );
}

Input.propTypes= {
	type: PropTypes.string.isRequired
}

export default Input;