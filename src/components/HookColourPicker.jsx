import React, { useState, useEffect } from "react";
import "../App.css";

const useLocalStorage = () => {
    const [colour, setColour] = useState(() => {
      return window.localStorage.getItem("colour") || "pink";
    });
  
    useEffect(() => {
      window.localStorage.setItem("colour", colour);
    }, [colour]);
    
    return [colour, setColour];
  };
  
function HookColourPicker() {
  const [colour, setColour] = useLocalStorage();

  return (
    <div className="App">
      <div>
        <h1>Colour Picker using Hooks</h1>
        <div className="button-container">
          <button className="pastel-pink" onClick={() => setColour("pink")}>
            Pastel Pink
          </button>
          <button className="berry-blue" onClick={() => setColour("lightblue")}>
            Berry Blue
          </button>
          <button className="plum-purple" onClick={() => setColour("plum")}>
            Plum Purple
          </button>
        </div>
      </div>
      <span className="dot" style={{ backgroundColor: colour }}></span>
    </div>
  );
}

export default HookColourPicker;

