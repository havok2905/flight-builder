import React from 'react';
import Flight from './flight';

class FlightForm extends React.Component {

  constructor() {
    super()
    this.state = { beers: Flight.beers };
  }

  addBeer(e) {
    Flight.beers.push({
      name: this.state.beerName,
      description: this.state.beerDescription
    });

    this.setState({
      beers: Flight.beers,
      beerName: '',
      beerDescription: ''
    });
  }

  editBeerName(e) {
    this.setState({ beerName: e.target.value })
  }

  editBeerDescription(e) {
    this.setState({ beerDescription: e.target.value })
  }

  listItems() {
    return Flight.beers.map((beer) => {
      return (
        <li>
          <p><strong>{beer.name}</strong></p>
          <p>{beer.description}</p>
        </li>
      )
    });
  }

  render() {
    return (
      <div>
        <ul>{this.listItems()}</ul>
        <form>
          <div>
            <label htmlFor='name'>Name</label>
            <input name='name' value={this.state.beerName} onChange={this.editBeerName.bind(this)}></input>
          </div>
          <div>
            <label htmlFor='description'>Description</label>
            <textarea name='description' value={this.state.beerDescription} onChange={this.editBeerDescription.bind(this)}></textarea>
          </div>
          <button type='button' onClick={this.addBeer.bind(this)}>Add Beer</button>
        </form>
      </div>
    );
  }
}

export default FlightForm;
