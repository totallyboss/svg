import React  from 'react';
import './App.css';

const Output = ({ convertedCode }) => (
  <div className="space_bottom">
    <h2>Output</h2>
    <textarea
      className="textarea"
      value={convertedCode}
      disabled="true"
      placeholder="Your converted SVG code will print here"/>
  </div>
);

export default Output;

