import React from "react";
import CreditCardItem from "./CreditCardItem";

class CreditCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: new Array(props.length).fill(""),
      elements: []
    }
    
  }
  handleChange = (value, i) => {
   
    const { length } = this.props;
    this.state.values[i] = value;
    if (value.length > 3 && i < length - 1) {
      this.state.elements[i + 1].input.focus();
    }
    this.props.onChange(this.state.values.join(" "));
  };

  onBackspace = (index, e) => {
    e.preventDefault();
    this.state.values[index] = ""
    if (index > 0) {
      this.state.elements[index - 1].input.focus();
    }
    this.props.onChange(this.state.values.join(" "));
  };

  handlePaste = (e) => {
    e.preventDefault();
    let data = e.clipboardData.getData("text")
    if(data.length > 16){
        data = data.substring(0, 16)
    }
    const re = /^[0-9\b]+$/;
    if (!re.test(data)) {
        return;
    }
    let val = []
    for(let i = 0; i < data.length; i++){
      if(val[Math.floor(i/4)]){
        val[Math.floor(i/4)] += data[i]
      }
      else{
        val[Math.floor(i/4)] = data[i]
      }
    }
    val.forEach((value, i) => {
      this.state.values[i] = value;
      this.state.elements[i].input.value = value;
    //   if (i < this.props.length - 1 && Math.floor(data.length/4) === 0) {
    //     this.state.elements[i + 1].input.focus();
    //   }
      let focusIndex = Math.floor(data.length/4);
      if(focusIndex >= 4)
        focusIndex = 3
      this.state.elements[focusIndex].input.focus();
    });
    this.props.onChange(this.state.values.join(""));
  };

  render() {
        
    return (
      <div onPaste={this.handlePaste}>
        {this.state.values.map((item, i) => (
          <CreditCardItem
            key={i}
            ref={(n) => (this.state.elements[i] = n)}
            onChange={(v) => this.handleChange(v, i)}
            onBackspace={(e) => this.onBackspace(i, e)}
            values = {this.values}
            reset = {this.reset}
          />
        ))}
      </div>
    );
  }
}

export default CreditCard;
