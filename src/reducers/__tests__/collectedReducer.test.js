import { collectedReducer } from '../collectedReducer';
import * as actions from '../../actions';

describe('collectedReducer', () => {

  it('should return initial state', () => {
    const expected = [];
    const result = collectedReducer(undefined, []);
    expect(result).toEqual(expected);
  });

  it('should return state of an array of amiibo objects with the action addToCollected if the item does not exist', () => {
    const mockAmiibo = { name: 'pikachu', id: 1 };
    const expected = [mockAmiibo];
    const result = collectedReducer(undefined, actions.addToCollected(mockAmiibo));
    expect(result).toEqual(expected);
  });

  it('should return state of an array of amiibo objects with the action addToCollected if the item already exists', () => {
    const initialState = [{ name: 'pikachu', id: 1 }];
    const mockAmiibo = { name: 'pikachu', id: 1 };
    const expected = initialState;
    const result = collectedReducer(initialState, actions.addToCollected(mockAmiibo));
    expect(result).toEqual(expected);
  });

  it('should return state of an updated array with the action removeFromCollected', () => {
    const mockAmiibos = [{ name: 'pikachu', id: 1 }, { name: 'squirtle', id: 2 }];
    const expected = [{ name: 'pikachu', id: 1 }];
    const result = collectedReducer(mockAmiibos, actions.removeFromCollected({ name: 'squirtle'}));
    expect(result).toEqual(expected);
  });

  it('should return state of an array of amiibo objects with the action getCollected', () => {
    const mockAmiibos = [{ name: 'charmander', id: 3 }];
    const expected = mockAmiibos;
    const result = collectedReducer(undefined, actions.getCollected(mockAmiibos));
    expect(result).toEqual(expected);
  });
  
});