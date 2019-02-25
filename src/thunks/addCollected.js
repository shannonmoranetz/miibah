import { addToCollected } from '../actions';

export const addCollected = (amiibo) => {
  return async dispatch => {
    await dispatch(addToCollected(amiibo))
  };
};