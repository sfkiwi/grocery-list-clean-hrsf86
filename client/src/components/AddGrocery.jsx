import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      quantity: '',
      hideDone: false  
    }

    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handleHideDoneChange = this.handleHideDoneChange.bind(this);
    this.addGrocery = this.addGrocery.bind(this);
  }

  handleDescriptionChange (event) {
    this.setState({description: event.target.value});
  }

  handleQuantityChange(event) {
    this.setState({ quantity: event.target.value });
  }

  handleHideDoneChange(event) {
    this.setState({ hideDone: event.target.value });
    this.props.hideDone(this.state.hideDone);
  }

  addGrocery () {
    this.props.addGrocery(this.state.description, this.state.quantity);
  }

  render () {
    return (
      <div>
        <div>Description <input type="text" value={this.state.description} onChange={this.handleDescriptionChange} /></div>
        <div>Quantity <input type="text" value={this.state.quantity} onChange={this.handleQuantityChange} /></div>
        <button id="add-grocery" onClick={this.addGrocery} >Add Grocery</button>
        <div>Hide Done Items<input type="checkbox" value={this.state.hideDone} onChange={this.handleHideDoneChange} /></div>
      </div>
    );
  }
}

export default AddGrocery;

