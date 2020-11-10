import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
		this.state = {
			click : ""
		};
		
		this.showMsg = this.showMsg.bind(this);
	}
	showMsg(){
		console.log(this.state.click);
		this.setState({
			click: this.state.click=="" ? 
			(<p id='para'>
				Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
				</p>) : ""
	})}

    render() {
    	return(
    		<div id="main">
				{ /* Do not remove this main div!! */ }
				<button id="click" onClick={this.showMsg}>Click Me!</button>
				{this.state.click}
    		</div>
    	);
    }
}


export default App;

