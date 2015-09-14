import VectorCompare from 'vector_compare';

class Flight {
  constructor(flightList, beerList) {
    this._flightList = flightList;
    this._beerList = beerList;
    this._flight = [];
  }

  get flightList() {
    return this.flightList;
  }

  set flightList(flightList) {
    this._flightList = flightList;
  }

  get beerList() {
    return this.flightList;
  }

  set beerList(beerList) {
    this._beerList = beerList;
  }

  get flight() {
    return this._flight;
  }

  /*
   * Use the VectorCompare module to give a score of how similar
   * two beers are.
   *
   * Params
   *  Beer a
   *  Beer b
   * Returns
   *  Float
   */

  similarityScore(a,b) {
    let beerComparison, result;

    beerComparison = new VectorCompare(a.profile(), b.profile());
    return beerComparison.run();
  }

  /*
   * Return how similar in intensity a beer is
   *
   * Returns
   *  Integer
   */

  intensityDifference(a, b) {
    return Math.abs(a.intensity() - b.intensity());
  }

  /*
   * Check if a beer has already been added to the flight
   *
   * Params
   *  - Beer beer
   * Returns
   *  - Boolean
   */

  beerNotInFlight(beer) {
    return this._flight.indexOf(beer) === -1;
  }

  /*
   * Itterates through beer profiles and stored beers
   * to construct the ideal flight. Scores of similarity
   * rank from -1 to 1 depending on how close to the original
   * beer you are.
   *
   * Returns
   *  - Array
   */

  build() {
    let bestMatch, bestMatchScore, currentMatchScore, intensityDiff;

    this._flightList.forEach((flightListItem) => {
      bestMatchScore = -1;

      this._beerList.forEach((beerListItem) => {
        currentMatchScore = this.similarityScore(flightListItem, beerListItem);
        intensityDiff = this.intensityDifference(flightListItem, beerListItem);

        if(this.beerNotInFlight(beerListItem) && currentMatchScore >= bestMatchScore && intensityDiff < 2) {
          bestMatch = beerListItem;
          bestMatchScore = currentMatchScore;
        }
      });

      this._flight.push(bestMatch);
    });

    return this._flight;
  }
}

export default Flight;
