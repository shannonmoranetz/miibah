import { addToWishlist } from '../actions';

export const addWishlist = (amiibo) => {
  return async dispatch => {
    await dispatch(addToWishlist(amiibo))
  };
};