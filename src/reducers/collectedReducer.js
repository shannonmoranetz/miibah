import { ADD_TO_COLLECTED } from '../actions';

export function collectedReducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_COLLECTED:
      return [...state, action.amiibo];
    default:
      return state;
  }
}