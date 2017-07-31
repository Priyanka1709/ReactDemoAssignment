import React from "react";
import Label from "./controls/label";

const Contact = (props) => {
    return (
            <div className="body">
                <form onSubmit={(e)=> {alert('Form submitted')}}>
                    <Label text="Name: "/>
                    <br/>
                    <input type="text" required/>
                    <br/>
                    <Label text="Phone Number: "/>
                    <br/>
                    <input type="number" required/>
                    <br/>
                    <Label  text="Query: "/>
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