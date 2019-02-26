import { ADD_TO_WISHLIST, GET_WISHLIST, REMOVE_FROM_WISHLIST } from '../actions';

export function wishlistReducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_WISHLIST:
    let index = state.findIndex(wishlistItem => wishlistItem.name == action.amiibo.name);
    if (index == -1) {
      return [...state, action.amiibo];
    } else {
      return state;
    }
    case REMOVE_FROM_WISHLIST:
      let removedWishlist = state.filter(wishlistItem => wishlistItem.name !== action.amiibo.name);
      return removedWishlist;
    case GET_WISHLIST: 
      return action.wishlist;
    default:
      return state;
  }
}