import React from 'react';
import Beer from '../classes/beer';
import FlightProfile from '../modules/flight_profile';

class FlightForm extends React.Component {

  constructor() {
    super();
    this.state = { beers: FlightProfile.beers };
  }

  resetBeers(e) {
    FlightProfile.beers = [];
    this.setBeers();
  }

  addBeer(e) {
    let abv = parseInt(this.state.beerABV),
        hops = parseInt(this.state.beerHops),
        malt = parseInt(this.state.beerMalt),
        sour = parseInt(this.state.beerSour);

    FlightProfile.beers.push(new Beer('flight beer', abv, hops, malt, sour));
    this.setBeers();
  }

  setBeers() {
    this.setState({
      beers: FlightProfile.beers,
      beerABV: '',
      beerHops: '',
      beerMalt: '',
      beerSour: '',
    });
  }

  editBeerABV(e) {
    this.setState({ beerABV: e.target.value })
  }

  editBeerHops(e) {
    this.setState({ beerHops: e.target.value })
  }

  editBeerMalt(e) {
    this.setState({ beerMalt: e.target.value })
  }

  editBeerSour(e) {
    this.setState({ beerSour: e.target.value })
  }

  listItems() {
    return FlightProfile.beers.map((beer) => {
      return (
        <li>
          <p><strong>ABV: </strong>{beer.abv}</p>
          <p><strong>Hops: </strong>{beer.hops}</p>
          <p><strong>Malt: </strong>{beer.malt}</p>
          <p><strong>Sour: </strong>{beer.sour}</p>
        </li>
      )
    });
  }

  render() {
    return (
      <div>
        <form>
          <div>
            <label htmlFor='abv'>ABV</label>
            <input name='abv' value={this.state.beerABV} onChange={this.editBeerABV.bind(this)}></input>
          </div>
          <div>
            <label htmlFor='ibu'>Hoppiness</label>
            <input name='ibu' value={this.state.beerHops} onChange={this.editBeerHops.bind(this)}></input>
          </div>
          <div>
            <label htmlFor='ibu'>Maltiness</label>
            <input name='ibu' value={this.state.beerMalt} onChange={this.editBeerMalt.bind(this)}></input>
          </div>
          <div>
            <label htmlFor='color'>Sourness</label>
            <input name='color' value={this.state.beerSour} onChange={this.editBeerSour.bind(this)}></input>
          </div>
          <div>
            <button type='button' className='-constructive' onClick={this.addBeer.bind(this)}>Add Beer</button>
            <button type='button' className='-destructive' onClick={this.resetBeers.bind(this)}>Reset</button>
          </div>
        </form>
        <ul>{this.listItems()}</ul>
      </div>
    );
  }
}

export default FlightForm;
