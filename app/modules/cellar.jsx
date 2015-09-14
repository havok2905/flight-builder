import Beer from '../classes/beer';

let Cellar = {
  beers: [
    new Beer( 'Light Lager', 2,  1,  1,  0  ),
    new Beer( 'Light Lager', 2,  2,  1,  0  ),
    new Beer( 'Light Lager', 2,  1,  2,  0  ),

    new Beer( 'Sour',        2,  1,  1,  10 ),
    new Beer( 'Sour',        1,  1,  2,  8  ),
    new Beer( 'Sour',        2,  1,  2,  7  ),

    new Beer( 'Wheat',       3,  4,  1,  0  ),
    new Beer( 'Wheat',       4,  3,  2,  0  ),
    new Beer( 'Wheat',       3,  3,  1,  0  ),

    new Beer( 'Pale Ale',    5,  7,  3,  0  ),
    new Beer( 'Pale Ale',    6,  6,  2,  0  ),
    new Beer( 'Pale Ale',    6,  7,  2,  0  ),

    new Beer( 'IPA',         7,  10, 3,  0  ),
    new Beer( 'IPA',         9,  9,  4,  0  ),
    new Beer( 'IPA',         11, 8,  2,  0  ),

    new Beer( 'Barley Wine', 12, 10, 10, 0  ),
    new Beer( 'Barley Wine', 14, 8,  10, 0  ),
    new Beer( 'Barley Wine', 15, 10, 9 , 0  ),

    new Beer( 'Porter',      5,  5,  8,  0  ),
    new Beer( 'Porter',      6,  3,  7,  0  ),
    new Beer( 'Porter',      7,  4,  9,  0  ),

    new Beer( 'Stout',       5,  5,  8,  0  ),
    new Beer( 'Stout',       7,  4,  10, 0  ),
    new Beer( 'Stout',       12, 3,  9,  0  )
  ]
}

export default Cellar;
