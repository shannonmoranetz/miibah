import { loadingReducer } from '../loadingReducer';
import * as actions from '../../actions';

describe('loadingReducer', () => {

  it('should return initial state', () => {
    const expected = false;
    const result = loadingReducer(undefined, false);
    expect(result).toEqual(expected);
  });

  it('should return state of a boolean of isLoading', () => {
    const mockIsLoading =  false;
    const expected = false;
    const result = loadingReducer(undefined, actions.setLoading(mockIsLoading));
    expect(result).toEqual(expected);
  });
  
});