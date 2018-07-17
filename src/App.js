import React, { Component } from 'react';
import './App.css';
import Input from './Input';
import Output from './Output';

class SVGConverter extends Component {

  state = {
    code: '',
    convertedCode: '',
  };

  handleChange = (value) => {
    this.setState({
      code: value
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
    // This function will be replaced with the Util after it's built by Alan
    return svg.toUpperCase();
  };

  render() {
    const { convertedCode } = this.state;

    return (
      <div className="App">
        <h1>SVG Converter</h1>
        <Input
          onChange={this.handleChange}
          onClick={this.handleClick} />
        <Output
          convertedCode={convertedCode}/>
      </div>
    );
  }
}

export default SVGConverter;
