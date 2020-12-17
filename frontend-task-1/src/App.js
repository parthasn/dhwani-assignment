import React from "react";
import './App.css'
import CreditCard from "./Components/CreditCard";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Credit Card</h1>
        <CreditCard
          length={4}
          onChange={(val) => this.setState({ value: val })}
        />
        <br />
        <br />
        <h3>{this.state.value}</h3>
      </div>
    );
  }
}
