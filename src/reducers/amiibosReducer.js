import { SET_AMIIBOS } from '../actions';
import ids from 'short-id';

export function amiibosReducer(state = [], action) {
  switch (action.type) {
    case SET_AMIIBOS:
      return action.amiibos.slice(-20).reverse();
    default:
      return state;
  }
}