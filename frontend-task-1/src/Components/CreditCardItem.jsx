import React from "react";

const style = {
  padding: 10,
  width: 50,
  fontSize: 16,
  margin: 5,
  textAlign: "center"
};
class CreditCardItem extends React.Component {
    constructor(props){
      super(props)
        this.state = {
          value: this.props.values || ''
        }
      
    }
  handleKeyUp = (e) => {
    e.preventDefault();
    if (e.keyCode === 8 && this.input.value === "") {
      this.props.onBackspace(e);
    } else {
      this.props.onChange(e.target.value);
    }
  };
  handleChange = (e) => {
    e.preventDefault()
    const re = /^[0-9\b]+$/;
      if (e.target.value === '' || re.test(e.target.value)) {
         this.setState({value: e.target.value})
      }
  }
  render() {
    
    
    return (
      <>
        <input
        value = {this.state.value}
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
