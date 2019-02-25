import { ADD_AMIIBO, GET_WISHLIST } from '../actions';

export function wishlistReducer(state = [], action) {
  switch (action.type) {
    case ADD_AMIIBO:
      return [...state, action.amiibo];
    case GET_WISHLIST:
      return action.wishlist;
    default:
      return state;
  }
}