import React, { useState, useEffect } from "react";
import "../App.css";

function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    return window.localStorage.getItem(key) || initialValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, storedValue);
  },[ storedValue, key ])

  return [ storedValue, setStoredValue ]
}

function HookColourPickerComponent() {
  const [ colour, setColour ] =  useLocalStorage("color", "white");

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

export default HookColourPickerComponent;
