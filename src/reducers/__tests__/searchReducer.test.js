import { searchReducer } from '../searchReducer';
import * as actions from '../../actions';

describe('searchReducer', () => {

  it('should return initial state', () => {
    const expected = [];
    const result = searchReducer(undefined, []);
    expect(result).toEqual(expected);
  });

  it('should return state with an array of an amiibo object with action searchAmiibo', () => {
    const mockAmiibo = { name: 'pikachu', id: 1 };
    const expected = [mockAmiibo];
    const result = searchReducer(undefined, actions.searchAmiibo([mockAmiibo]));
    expect(result).toEqual(expected);
  });
});