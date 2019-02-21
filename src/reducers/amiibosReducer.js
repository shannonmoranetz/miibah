import { ADD_AMIIBOS } from '../actions';

export function notesReducer(state = [], action) {
  switch (action.type) {
    case ADD_AMIIBOS:
      return [...state, action.addAmiibos];
    default:
      return state;
  }
}
