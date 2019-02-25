import { addAmiibo } from '../actions';

export const setWishlist = (amiibo) => {
  console.log(amiibo)
  return async dispatch => {
    await dispatch(addAmiibo(amiibo))
  };
};