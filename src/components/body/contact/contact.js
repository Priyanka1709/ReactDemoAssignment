import React from "react";

const Contact = (props) => {
    return (
            <div className="body">
                <form onSubmit={(e)=> {alert('Form submitted')}}>
                    <label>Name: </label>
                    <br/>
                    <input type="text" required/>
                    <br/>
                    <label>Phone Number: </label>
                    <br/>
                    <input type="number" required/>
                    <br/>
                    <label>Query: </label>
                    <br/>
                    <input type="textarea" rows="4" required/>
                    <br/>
                    <br/>
                    <input type="submit"/>
                </form>               
            </div>
        );
}

export default Contact;