import React from 'react';
import BeerGraph from './beer_graph';

class BeerItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <p><strong>Name: </strong>{ this.props.beer.name }</p>
        <p><strong>ABV:  </strong>{ this.props.beer.abv  }</p>
        <p><strong>Hops: </strong>{ this.props.beer.hops }</p>
        <p><strong>Malt: </strong>{ this.props.beer.malt }</p>
        <p><strong>Sour: </strong>{ this.props.beer.sour }</p>
        <BeerGraph beer={this.props.beer} height={100} width={100}/>
      </li>
    );
  }
}

export default BeerItem;
