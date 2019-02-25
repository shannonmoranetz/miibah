import { addAmiibo } from '../actions';

export const setList = (amiibo) => {
  return async dispatch => {
    await dispatch(addAmiibo(amiibo))
  };
};