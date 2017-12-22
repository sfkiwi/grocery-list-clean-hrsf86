import React from 'react';


class GroceryItem extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      selected: false
    }
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect() {
    this.setState({
      selected: !this.state.selected
    });
  }
  render() {
    let className = 'item';
    if (this.state.selected) {
      className += ' item-selected';
      if (this.props.hideDone) {
        className += ' item-hide'
      }
    }
    return (
          <tr className={className} onClick={this.onSelect}>
            <td>{this.props.item.description}</td>
            <td>{this.props.item.quantity}</td>
          </tr>
    );
  }
}

export default GroceryItem;