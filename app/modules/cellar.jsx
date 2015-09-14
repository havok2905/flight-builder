import Beer from '../classes/beer';

const NUM_BEERS = 50000;

let Cellar = {
  beers: [],
  styles: [
    { name: 'Sour',        abv: [2,  5],  hops: [0, 2],  malt: [0,1],  sour: [5, 10] },
    { name: 'Light Lager', abv: [3,  5],  hops: [0, 2],  malt: [0,1],  sour: [0, 0]  },
    { name: 'Pilsner',     abv: [3,  5],  hops: [2, 4],  malt: [0,2],  sour: [0, 0]  },
    { name: 'Wheat',       abv: [3,  5],  hops: [3, 5],  malt: [1,3],  sour: [0, 2]  },
    { name: 'Pale Ale',    abv: [4,  7],  hops: [6, 8],  malt: [2,3],  sour: [0, 0]  },
    { name: 'IPA',         abv: [6,  11], hops: [6, 10], malt: [2,5],  sour: [0, 0]  },
    { name: 'Scotch',      abv: [7,  9],  hops: [2, 4],  malt: [7,9],  sour: [0, 0]  },
    { name: 'Porter',      abv: [5,  7],  hops: [3, 5],  malt: [7,9],  sour: [0, 0]  },
    { name: 'Stout',       abv: [6,  12], hops: [4, 6],  malt: [8,10], sour: [0, 0]  },
    { name: 'Barley Wine', abv: [10, 18], hops: [7, 10], malt: [8,10], sour: [0, 0]  }
  ],
  getRandomStyle: () => {
    let styleIndex = Math.round(Math.random() * (Cellar.styles.length - 1));
    return Cellar.styles[styleIndex];
  },
  getRandom: (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  }
}

// IPAS
let style, name, abv, hops, malt, sour;

for(var x=0; x<NUM_BEERS; x++) {
  style = Cellar.getRandomStyle();

  name = style.name + ' ' + x;
  abv  = Cellar.getRandom(style.abv[0], style.abv[1]);
  hops = Cellar.getRandom(style.hops[0], style.hops[1]);
  malt = Cellar.getRandom(style.malt[0], style.malt[1]);
  sour = Cellar.getRandom(style.sour[0], style.sour[1]);

  Cellar.beers.push(new Beer(name, abv, hops, malt, sour));
}

export default Cellar;
