import React from "react";
import './App.css'
import Card from "./Components/Card";
import CreditCard from "./Components/CreditCard";
import { loadData, saveData } from "./localStorage";

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "",
      creditCards:loadData('creditCards') || []
    };
  }

  handleClick = async () => {
    const { creditCards, value} = this.state;
    if(value.length < 16){
      return
    }
    await this.setState({
      creditCards: [...creditCards, value],
      value: ""
    })
    saveData('creditCards', this.state.creditCards);
    
    
  }

  handleDelete = async (data) => {
    const {creditCards, value} = this.state;
    let updatedCreditCards = creditCards.filter((creditCard) => creditCard !== data)
    await this.setState({
      creditCards: updatedCreditCards
    })
     saveData('creditCards', creditCards);
    
  }

  

  render() {
    const { creditCards } = this.state;
    return (
      <div className="App">
        <h1>Credit Card</h1>
        <CreditCard
          length={4}
          onChange={(val) => this.setState({ value: val })}
        />
        <button onClick = {this.handleClick} className = "App_button">Submit</button>
        <br />
        <br />
        {
          creditCards && creditCards.map((card, i) => (
            <Card deleteCard = {this.handleDelete} key = {i} data = {card}/>
          ) )
        }
      </div>
    );
  }
}
