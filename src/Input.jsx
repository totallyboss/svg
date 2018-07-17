import React, { Component } from 'react';
import './App.css';

export const TextArea = ({onChange}) => (
  <div>
    <textarea
      onChange={onChange}
      className="space_bottom textarea"
      placeholder="Paste the SVG code into here"/>
  </div>
);

export const Button = ({onClick}) => (
  <div>
    <button
      type="button"
      onClick={onClick}>Let's convert this bad boy</button>
  </div>
);

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
        <TextArea onChange={this.handleChange} />
        <Button onClick={this.handleClick} />
      </div>
    )
  }
}

export default Input;