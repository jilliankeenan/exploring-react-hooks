import React, { useState, useEffect } from "react";
import "../App.css";

function HookColourPicker() {

  const [colour, setColour] = useState('white')

  useEffect(() => {
    console.log(`new colour is ${colour}`);
  }, [colour]);

  return (
    <div>
      <div className="App">
        <div>
          <h1>Colour Picker using Hooks</h1>
          <div className="button-container">
            <button className="pastel-pink" onClick={() => setColour("pink")}>
              Pastel Pink
            </button>
            <button
              className="berry-blue"
              onClick={() => setColour("lightblue")}
            >
              Berry Blue
            </button>
            <button className="plum-purple" onClick={() => setColour("plum")}>
              Plum Purple
            </button>
          </div>
        </div>
        <span className="dot" style={{ backgroundColor: colour }}></span>
      </div>
    </div>
  );
}

export default HookColourPicker;