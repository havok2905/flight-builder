import React from 'react';
import Beer from '../classes/beer';
import FlightProfile from '../modules/flight_profile';

class FlightForm extends React.Component {

  constructor() {
    super();
    this.state = { beers: FlightProfile.beers };
  }

  addBeer(e) {
    let abv = this.state.beerABV,
        ibu = this.state.beerIBU,
        color = this.state.beerColor;


    FlightProfile.beers.push(new Beer('flight beer', abv, ibu, color));

    this.setState({
      beers: FlightProfile.beers,
      beerABV: '',
      beerIBU: '',
      beerColor: ''
    });
  }

  editBeerABV(e) {
    this.setState({ beerABV: e.target.value })
  }

  editBeerIBU(e) {
    this.setState({ beerIBU: e.target.value })
  }

  editBeerColor(e) {
    this.setState({ beerColor: e.target.value })
  }

  listItems() {
    return FlightProfile.beers.map((beer) => {
      return (
        <li>
          <p><strong>IBU: </strong>{beer.ibu}</p>
          <p><strong>ABV: </strong>{beer.abv}</p>
          <p><strong>Color: </strong>{beer.color}</p>
        </li>
      )
    });
  }

  render() {
    return (
      <div>
        <form>
          <div>
            <label htmlFor='ibu'>IBU</label>
            <input name='ibu' value={this.state.beerIBU} onChange={this.editBeerIBU.bind(this)}></input>
          </div>
          <div>
            <label htmlFor='abv'>ABV</label>
            <input name='abv' value={this.state.beerABV} onChange={this.editBeerABV.bind(this)}></input>
          </div>
          <div>
            <label htmlFor='color'>Color</label>
            <input name='color' value={this.state.beerColor} onChange={this.editBeerColor.bind(this)}></input>
          </div>
          <button type='button' onClick={this.addBeer.bind(this)}>Add Beer</button>
        </form>
        <ul>{this.listItems()}</ul>
      </div>
    );
  }
}

export default FlightForm;