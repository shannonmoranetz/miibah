import { collectedReducer } from '../collectedReducer';
import * as actions from '../../actions';

describe('collectedReducer', () => {

  it('should return initial state', () => {
    const expected = [];
    const result = collectedReducer(undefined, []);
    expect(result).toEqual(expected);
  });

  it('should return state of an array of amiibo objects with the action addToCollected', () => {
    const mockAmiibo = { name: 'pikachu', id: 1 };
    const expected = [mockAmiibo];
    const result = collectedReducer(undefined, actions.addToCollected(mockAmiibo));
    expect(result).toEqual(expected);
  });

  it('should return state of an array of amiibo objects with the action getCollected', () => {
    const mockAmiibos = [{ name: 'charmander', id: 3 }];
    const expected = mockAmiibos;
    const result = collectedReducer(undefined, actions.getCollected(mockAmiibos));
    expect(result).toEqual(expected);
  });
  
});