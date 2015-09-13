class Beer {
  constructor(name, abv, ibu, color) {
    this._name = name;
    this._abv = abv;
    this._ibu = ibu;
    this._color = color;
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

  get ibu() {
    return this._ibu;
  }

  set ibu(ibu) {
    this._ibu = ibu;
  }

  get color() {
    return this._color;
  }

  set color(color) {
    this._color = color;
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
      {key: 'ibu', value: this._ibu},
      {key: 'color', value: this._color},
    ];
  }
}

export default Beer;
