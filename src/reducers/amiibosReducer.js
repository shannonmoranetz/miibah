import { SET_AMIIBOS } from '../actions';

export function amiibosReducer(state = [], action) {
  switch (action.type) {
    case SET_AMIIBOS:
      return action.amiibos;
    default:
      return state;
  }
}