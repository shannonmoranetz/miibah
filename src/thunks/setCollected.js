import { getCollected } from '../actions';

export const setCollected = (collected) => {
  return async dispatch => {
    await dispatch(getCollected(collected))
  };
};