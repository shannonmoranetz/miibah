import { SET_AMIIBOS, ADD_AMIIBO } from '../actions';

export function amiibosReducer(state = [], action) {
  switch (action.type) {
    case SET_AMIIBOS:
      return action.amiibos.slice(-40).reverse();
    case ADD_AMIIBO:
      return action.amiibos;
    default:
      return state;
  }
}