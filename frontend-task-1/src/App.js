import React from "react";
import styles from './app.module.css'
import Card from "./Components/Card";
import CreditCard from "./Components/CreditCard";

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "",
      creditCards:[]
    };
  }

  handleClick = () => {
    const { creditCards, value} = this.state;
    if(value.length < 16){
      return
    }
    this.setState({
      creditCards: [...creditCards, value],
      value: ""
    })
}

  handleDelete = (data) => {
    const {creditCards, value} = this.state;
    this.setState({
        ...this.state,
      creditCards: creditCards.filter((creditCard) => creditCard !== data)
    })
    
     
    
  }

  

  render() {
    const { creditCards } = this.state;
    return (
      <div className={styles.app}>
        <h1>Credit Card</h1>
        <CreditCard
          length={4}
          onChange={(val) => this.setState({ value: val })}
        />
        <button onClick = {this.handleClick} className = {styles.app_button}>Submit</button>
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
