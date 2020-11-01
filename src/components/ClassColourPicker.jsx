import React from "react";
import "../App.css";


class ClassColourPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colour: "",
      stringText: "",
    };
  }

  componentDidMount() {
    this.setState({ colour: "white" });
  }

  componentDidUpdate() {
    console.log(`My colour is ${this.state.colour}`);
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1>Colour Picker using Classes</h1>
          <div className="button-container">
            <button
              className="pastel-pink"
              onClick={() => {
                this.setState({ colour: "pink" });
              }}
            >
              Pastel Pink
            </button>
            <button
              className="berry-blue"
              onClick={() => {
                this.setState({ colour: "lightblue" });
              }}
            >
              Berry Blue
            </button>
            <button
              className="plum-purple"
              onClick={() => {
                this.setState({ colour: "plum" });
              }}
            >
              Plum Purple
            </button>
          </div>
        </div>
        <span
          className="dot"
          style={{ backgroundColor: this.state.colour }}
        ></span>
      </div>
    );
  }
}

export default ClassColourPicker;
