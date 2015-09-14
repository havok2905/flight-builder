class Beer {
  constructor(name, abv, hops, malt, sour) {
    this._name = name;
    this._abv = abv;
    this._hops = hops;
    this._malt = malt;
    this._sour = sour;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get abv() {
    return this._abv;
  }

  set abv(abv) {
    this._abv = abv;
  }

  get hops() {
    return this._hops;
  }

  set hops(hops) {
    this._hops = hops;
  }

  get malt() {
    return this._malt;
  }

  set malt(malt) {
    this._malt = malt;
  }

  get sour() {
    return this._sour;
  }

  set sour(sour) {
    this._sour = sour;
  }

  /*
   * Returns a vector describing the beer. This
   * is used with the VectorCompare package when
   * comparing beers for similarity.
   *
   * Returns
   *  Array
   */

  profile() {
    return [
      {key: 'abv', value: this._abv},
      {key: 'hops', value: this._hops},
      {key: 'malt', value: this._malt},
      {key: 'sour', value: this._sour}
    ];
  }

  /*
   * Return the maginatude of the beer to keep beers similar in shape,
   * but with different magnitudes from pairing.
   *
   * Returns
   *  Integer
   */

  intensity() {
    let sum = this._abv + this._hops + this._malt + this._sour;
    return sum / 4;
  }


}

export default Beer;
