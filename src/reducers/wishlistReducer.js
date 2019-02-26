import { ADD_TO_WISHLIST, GET_WISHLIST } from '../actions';

export function wishlistReducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_WISHLIST:
    let index = state.findIndex(wishlistItem => wishlistItem.name == action.amiibo.name);
    if (index == -1) {
      return [...state, action.amiibo];
    } else {
      return state;
    }
    case GET_WISHLIST: 
      return action.wishlist
    default:
      return state;
  }
}