import { ADD_AMIIBO } from '../actions';

export function wishlistReducer(state = [], action) {
  switch (action.type) {
    case ADD_AMIIBO:
      return [...state, action.amiibo]
    default:
      return state;
  }
}