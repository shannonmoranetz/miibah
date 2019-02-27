export const propsMock = {
  amiibo: {
    name: 'pikachu',
    amiiboSeries: 'pokemon',
    gameSeries: 'pokemon',
    image: 'pikachu.img',
    release: '2019-02-15',
    id: 1
  },
  addAmiiboToWishlist: jest.fn(),
  addAmiiboToCollected: jest.fn(),
  addToWishlist: jest.fn(),
  removeFromWishlist: jest.fn(),
  addToCollected: jest.fn(),
  removeFromCollected: jest.fn(),
  wishlist: [],
  collected: [],
  history: { goBack: jest.fn() }
};

export const populatedListsPropsMock = {
  amiibo: {
    name: 'pikachu',
    amiiboSeries: 'pokemon',
    gameSeries: 'pokemon',
    image: 'pikachu.img',
    release: '2019-02-15',
    id: 1
  },
  addAmiiboToWishlist: jest.fn(),
  addAmiiboToCollected: jest.fn(),
  addToWishlist: jest.fn(),
  removeFromWishlist: jest.fn(),
  addToCollected: jest.fn(),
  removeFromCollected: jest.fn(),
  wishlist: [{
    name: 'pikachu',
    amiiboSeries: 'pokemon',
    gameSeries: 'pokemon',
    image: 'pikachu.img',
    release: '2019-02-15',
    id: 1
  }],
  collected: [{
    name: 'pikachu',
    amiiboSeries: 'pokemon',
    gameSeries: 'pokemon',
    image: 'pikachu.img',
    release: '2019-02-15',
    id: 1
  }]
};

export const emptyPropsMock = {
  addAmiiboToWishlist: jest.fn(),
  addAmiiboToCollected: jest.fn(),
  addToWishlist: jest.fn(),
  removeFromWishlist: jest.fn(),
  addToCollected: jest.fn(),
  removeFromCollected: jest.fn(),
  wishlist: [],
  collected: [],
  history: { goBack: jest.fn() }
};