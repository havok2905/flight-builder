import React from 'react';
import Flight from '../classes/flight';
import FlightProfile from '../modules/flight_profile';
import Cellar from '../modules/cellar';
import BeerItem from './beer_item';

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
        <BeerItem beer={beer}/>
      );
    });
  }

  render() {
    return (
      <div>
        <button type='button' className='-constructive' onClick={this.build.bind(this)}>Build</button>
        <ul>{this.listItems()}</ul>
      </div>
    );
  }
}

export default FlightOrderButton;
