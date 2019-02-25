import { amiibosReducer } from '../amiibosReducer';
import * as actions from '../../actions';

describe('amiibosReducer', () => {

  it('should return initial state', () => {
    const expected = [];
    const result = amiibosReducer(undefined, []);
    expect(result).toEqual(expected);
  });

  it('should return state with an array of amiibo objects', () => {
    const mockAmiibo = { name: 'pikachu', id: 1 };
    const expected = [mockAmiibo];
    const result = amiibosReducer(undefined, actions.setAmiibos([mockAmiibo]));
    expect(result).toEqual(expected);
  });
  
});