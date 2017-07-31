import React from "react";
import HomeLeftPane from './homeLeftPane';
import HomeRightPane from './homeRightPane';
import PropTypes from "prop-types";

const Home=(props) => {
    return (
        <div className="body">
            <HomeLeftPane match={props.match}/>
            <HomeRightPane match={props.match} textInput={props.textInput} textBoxChangeHandler={props.textBoxChangeHandler} addButtonHandler={props.addButtonHandler} subtractButtonHandler={props.subtractButtonHandler}/>
        </div>
    )
}

Home.propTypes= {
    match: PropTypes.object.isRequired,
	textInput: PropTypes.string.isRequired,
    textBoxChangeHandler: PropTypes.func.isRequired,
    addButtonHandler: PropTypes.func.isRequired,
    subtractButtonHandler: PropTypes.func.isRequired
}

export default Home;