import React, { useState } from "react";
import Button from "./button/Button";
import "./App.scss";

function App() {
  const [link, setLink] = useState("");
  const [currentTheme, setCurrentTheme] = useState("");
  const [currentSize, setCurrentSize] = useState("");

  return (
    <div className="App">
      <Button
        buttonSize={currentSize}
        isLink={link}
        colorTheme={currentTheme}
      />
      <input
        type="radio"
        id="firstRadioButton"
        name="radioButton"
        value="https://football.ua/"
        onClick={e => {
          setLink(e.target.value);
        }}
      />
      <label htmlFor="firstRadioButton">Set the button as a link</label>
      <input
        type="radio"
        id="secondRadioButton"
        name="radioButton"
        value=""
        onClick={e => {
          setLink(e.target.value);
        }}
      />
      <label htmlFor="secondRadioButton">Set the button as not a link</label>
      <select
        onChange={e => {
          setCurrentTheme(e.target.value);
        }}
      >
        <option>Please, choose color theme</option>
        <option value="success">Success theme</option>
        <option value="warning">Warning theme</option>
        <option value="error">Error theme</option>
      </select>
      <select
        onChange={e => {
          setCurrentSize(e.target.value);
        }}
      >
        <option>Please, choose button's size</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
    </div>
  );
}

export default App;
