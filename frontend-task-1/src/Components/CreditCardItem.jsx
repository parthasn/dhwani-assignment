import React from "react";

const style = {
  padding: 10,
  width: 50,
  fontSize: 16,
  margin: 5,
  textAlign: "center"
};
class CreditCardItem extends React.Component {
    
  handleKeyUp = (e) => {
      if (e.keyCode === 8 && this.input.value === "") {
      this.props.onBackspace(e);
    } else {
      this.props.onChange(e.target.value);
    }
  };
  render() {
    
    
    return (
      <>
        <input
        ref={(n) => (this.input = n)}
        maxLength={4}
        onKeyUp={this.handleKeyUp}
        onChange = {this.handleChange}
        style={style}
      />
      </>
    );
  }
}

export default CreditCardItem;
