import { wishlistReducer } from '../wishlistReducer';
import * as actions from '../../actions';

describe('wishlistReducer', () => {

  it('should return initial state', () => {
    const expected = [];
    const result = wishlistReducer(undefined, []);
    expect(result).toEqual(expected);
  });

  it('should return state of an array of amiibo objects with the action addToWishlist', () => {
    const mockAmiibo = { name: 'pikachu', id: 1 };
    const expected = [mockAmiibo];
    const result = wishlistReducer(undefined, actions.addToWishlist(mockAmiibo));
    expect(result).toEqual(expected);
  });

  it('should return state of an updated array with the action removeFromWishlist', () => {
    const mockAmiibos = [{ name: 'pikachu', id: 1 }, { name: 'squirtle', id: 2 }];
    const expected = [{ name: 'pikachu', id: 1 }];
    const result = wishlistReducer(mockAmiibos, actions.removeFromWishlist({ name: 'squirtle'}));
    expect(result).toEqual(expected);
  });

  it('should return state of an array of amiibo objects with the action getWishlist', () => {
    const mockAmiibos = [{ name: 'charmander', id: 3 }];
    const expected = mockAmiibos;
    const result = wishlistReducer(undefined, actions.getWishlist(mockAmiibos));
    expect(result).toEqual(expected);
  });
  
});