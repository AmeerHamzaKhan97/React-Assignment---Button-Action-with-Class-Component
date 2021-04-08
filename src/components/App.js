import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isParaShow: false,
    };
    this.showPara = this.showPara.bind(this);
  }

  showPara() {
    console.log("run");
    this.setState({ isParaShow: !this.state.isParaShow });
  }

  render() {
    return (
      <div id="main">
        <button id="click" onClick={this.showPara}>
          Show/hide paragarph
        </button>
        {this.state.isParaShow ? (
          <p id="para">
            Hello, I've learnt to use the full-stack evaluation tool. This makes
            me so happy
          </p>
        ) : null}
      </div>
    );
  }
}
export default App;
