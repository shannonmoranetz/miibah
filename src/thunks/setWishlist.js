import { getWishlist } from '../actions';

export const setWishlist = (wishlist) => {
  return async dispatch => {
    await dispatch(getWishlist(wishlist))
  };
};