import React, { Component } from 'react';
import './App.css';



class App extends Component {

  state = {
    code: '',
    convertedCode: '',
  };

  handleChange = (event) => {

    this.setState({
      code: event.target.value,
    });

  };

  handleClick = (event) => {
    event.preventDefault();
    const { code } = this.state;
    this.setState({
      convertedCode: this.convertCode(code),
    });
  };

  convertCode = (svg) => {
    return svg.toUpperCase();
  };

  render() {
    const { convertedCode } = this.state;

    return (
      <div className="App">
        <div>
          <textarea rows="10" cols="50" onChange={this.handleChange}/>
          <button type="button" onClick={this.handleClick}>Convert</button>
        </div>
        <div>
          <textarea rows="10" cols="50" value={convertedCode} disabled="true"/>
          <button type="button">Copy SVG Code</button>
        </div>
      </div>
    );
  }
}

export default App;
