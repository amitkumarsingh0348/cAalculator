import React, { Component } from "react";
import "../css/Home.css";
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Data: [
        "9",
        "8",
        "7",
        "C",
        "6",
        "5",
        "4",
        "AC",
        "3",
        "2",
        "1",
        "*",
        "0",
        "(",
        ")",
        "/",
        ".",
        "-",
        "=",
        "+"
      ],
      result: ""
    };
  }
  handleChange = event => {
    this.setState({ result: event.target.value });
  };

  handleClick = e => {
    this.setState({
      result: this.state.result.concat(e.target.innerText)
    });
    if (e.target.innerText === "C") {
      this.setState({
        result: this.state.result.slice(0, this.state.result.length - 1)
      });
    } else if (e.target.innerText === "AC") {
      this.setState({ result: this.state.result.slice(0, 0) });
    } else if (e.target.innerText === "=" && this.state.result !== "") {
      try {
        this.setState({ result: eval(this.state.result).toString() });
      } catch (error) {
        this.setState({ result: "ERROR" });
      }
    }
  };
  render() {
    console.log(this.state.result);
    return (
      <div className="container">
        <input
          type="text"
          className="view_field"
          value={this.state.result}
          onChange={this.handleChange}
        />
        <div className="btnWrapper" onClick={this.handleClick}>
          {this.state.Data.map((data, index) => {
            return (
              <div className="button" key={index}>
                {data}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
