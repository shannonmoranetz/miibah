import { ADD_AMIIBOS } from '../actions';

export function amiibosReducer(state = [], action) {
  switch (action.type) {
    case ADD_AMIIBOS:
      return [...state, action.amiibos];
    default:
      return state;
  }
}