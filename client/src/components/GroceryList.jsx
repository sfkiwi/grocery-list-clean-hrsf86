import React from 'react';
import GroceryItem from './GroceryItem.jsx';

class GroceryList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      sortDirectionInc: true,
      sortQuantityInc: true
    }
    this.sortDescription = this.sortDescription.bind(this);
    this.sortQuantity = this.sortQuantity.bind(this);
  }

  sortDescription() {
    this.setState({
      sortDirectionInc: !this.state.sortDirectionInc,
    })
    this.props.sortByDescription(this.state.sortDirectionInc);
  }

  sortQuantity() {
    this.setState({
      sortQuantityInc: !this.state.sortQuantityInc
    });
    this.props.sortByQuantity(this.state.sortQuantityInc);
  }

  render() {

    return (
      <div className="groceries">
        <table className="groceries-table" >
          <thead>
          <tr>
            <th onClick={this.sortDescription}>Description</th>
            <th onClick={this.sortQuantity}>Quantities</th>
          </tr>
          </thead>
          <tbody> 
          {this.props.list.map((item) => <GroceryItem 
            key={item.id} 
            item={item} 
            hideDone={this.props.hideDone}
          />)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default GroceryList;