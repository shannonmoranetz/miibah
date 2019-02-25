import { errorReducer } from '../errorReducer';
import * as actions from '../../actions';

describe('errorReducer', () => {

  it('should return initial state', () => {
    const expected = '';
    const result = errorReducer(undefined, '');
    expect(result).toEqual(expected);
  });

  it('should return state of a string of an error', () => {
    const mockError =  'error';
    const expected = mockError;
    const result = errorReducer(undefined, actions.setError(mockError));
    expect(result).toEqual(expected);
  });
  
});