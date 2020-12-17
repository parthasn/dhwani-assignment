import React from "react";
import CreditCardItem from "./CreditCardItem";

class CreditCard extends React.Component {
  constructor(props) {
    super(props);
    this.values = new Array(props.length).fill("");
    this.elements = [];
  }
  handleChange = (value, i) => {
    
    const { length } = this.props;
    console.log("change", i, value, length);
    console.log("values", this.values)
    this.values[i] = value;
    if (value.length > 0 && i < length - 1) {
      console.log("changing", i + 1);
      this.elements[i].input.focus();
    }
    this.props.onChange(this.values.join(""));
  };
  onBackspace = (index, e) => {
    console.log("backspace");
    if (index > 0) {
      this.elements[index - 1].input.focus();
    }
    this.props.onChange(this.values.join(""));
  };
  handlePaste = (e) => {
    e.preventDefault();
    let val = e.clipboardData
      .getData("Text")
      .split("")
      .filter((_, i) => i < this.props.length);

    val.forEach((value, i) => {
      this.values[i] = value;
      this.elements[i].input.value = value;
      if (i < this.props.length - 1) {
        this.elements[i + 1].input.focus();
      }
    });
    this.props.onChange(this.values.join(""));
  };
  render() {
    console.log(this.props.isTrue);
    return (
      <div onPaste={this.handlePaste}>
        {this.values.map((item, i) => (
          <CreditCardItem
            isTrue={this.props.isTrue}
            key={i}
            ref={(n) => (this.elements[i] = n)}
            onChange={(v) => this.handleChange(v, i)}
            onBackspace={(e) => this.onBackspace(i, e)}
          />
        ))}
      </div>
    );
  }
}

export default CreditCard;
