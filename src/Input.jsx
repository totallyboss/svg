import React, { Component } from 'react';
import './App.css';

class Input extends Component {

  handleChange = (event) => {
    this.props.onChange(event.target.value);
  };

  handleClick = (event) => {
    this.props.onClick(event);
  };

  render() {
    return (
      <div className="space_bottom">
        <h2>Input</h2>
        <textarea
          onChange={this.handleChange}
          className="space_bottom textarea"
          placeholder="Paste the SVG code into here"/>
        <div>
          <button
            type="button"
            onClick={this.handleClick}>Let's convert this bad boy</button>
        </div>
      </div>
    )
  }
}

export default Input;