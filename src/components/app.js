import "./app.css";
import React from "react";
import Header from "./header/header";
import Body from "./body/body";
import Footer from "./footer/footer";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state= {
			textInput: 10,
        };
        
        this.addButtonHandler= this.addButtonHandler.bind(this);
        this.subtractButtonHandler= this.subtractButtonHandler.bind(this);
        this.textBoxChangeHandler= this.textBoxChangeHandler.bind(this);
    }

    addButtonHandler(){
        this.setState(prevState=> 
            {
                textInput: prevState.textInput++
            }
        );
    }

    subtractButtonHandler(){
        this.setState(prevState=> 
            {
                textInput: prevState.textInput--
            }
        );
    }

    textBoxChangeHandler(e){
        this.setState({
			textInput: e.target.value
		})
    }

    render(){
        return (
            <div className="app container-fluid">
                <Header/>
                <Body textInput= {this.state.textInput} textBoxChangeHandler={this.textBoxChangeHandler} addButtonHandler={this.addButtonHandler} subtractButtonHandler={this.subtractButtonHandler}/>
                <Footer />
            </div>
        );
    }
}

export default App;