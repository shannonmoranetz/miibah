import * as actions from './index';

describe('actions', () => {
  it('should return a type of SET_AMIIBOS with an array of amiibos', () => {
    const amiibos = [{ name: 'pikachu', id: 1 }];
    const expected = {
      type: 'SET_AMIIBOS',
      amiibos
    }
    const result = actions.setAmiibos(amiibos);
    expect(result).toEqual(expected);
  });

  it('should return a type of ADD_TO_WISHLIST with an amiibo object', () => {
    const amiibo = { name: 'squirtle', id: 2 };
    const expected = {
      type: 'ADD_TO_WISHLIST',
      amiibo
    }
    const result = actions.addToWishlist(amiibo);
    expect(result).toEqual(expected);
  });

  it('should return a type of ADD_TO_COLLECTED with an amiibo object', () => {
    const amiibo = { name: 'squirtle', id: 2 };
    const expected = {
      type: 'ADD_TO_COLLECTED',
      amiibo
    }
    const result = actions.addToCollected(amiibo);
    expect(result).toEqual(expected);
  });

  it('should return a type of GET_WISHLIST with an array of amiibos', () => {
    const wishlist = [{ name: 'pikachu', id: 1 }];
    const expected = {
      type: 'GET_WISHLIST',
      wishlist
    }
    const result = actions.getWishlist(wishlist);
    expect(result).toEqual(expected);
  });

  it('should return a type of GET_COLLECTED with an array of amiibos', () => {
    const collected = [{ name: 'charmander', id: 3 }];
    const expected = {
      type: 'GET_COLLECTED',
      collected
    }
    const result = actions.getCollected(collected);
    expect(result).toEqual(expected);
  });

  it('should return a type of SET_LOADING with a boolean', () => {
    const isLoading = false;
    const expected = {
      type: 'SET_LOADING',
      isLoading
    }
    const result = actions.setLoading(isLoading);
    expect(result).toEqual(expected);
  });

  it('should return a type of SET_ERROR with an error string', () => {
    const error = '';
    const expected = {
      type: 'SET_ERROR',
      error
    }
    const result = actions.setError(error);
    expect(result).toEqual(expected);
  });
});