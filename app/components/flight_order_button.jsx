import React from 'react';
import Beer from '../classes/beer';
import Flight from '../classes/flight';
import FlightProfile from '../modules/flight_profile';
import Cellar from '../modules/cellar';

class FlightOrderButton extends React.Component {

  constructor() {
    super();
    this.state = { beers: [] }
  }

  build(e) {
    let flight = new Flight(FlightProfile.beers, Cellar.beers);
    this.setState({beers: flight.build()});
  }

  listItems() {
    return this.state.beers.map((beer) => {
      return (
        <li>
          <p><strong>Name: </strong>{beer.name}</p>
          <p><strong>ABV: </strong>{beer.abv}</p>
          <p><strong>IBU: </strong>{beer.ibu}</p>
          <p><strong>Color: </strong>{beer.color}</p>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <button type='button' onClick={this.build.bind(this)}>Build</button>
        <ul>{this.listItems()}</ul>
      </div>
    );
  }
}

export default FlightOrderButton;
