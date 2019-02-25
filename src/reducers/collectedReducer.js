import { ADD_TO_COLLECTED, GET_COLLECTED } from '../actions';

export function collectedReducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_COLLECTED:
      return [...state, action.amiibo];
    case GET_COLLECTED: 
      return action.collected
    default:
      return state;
  }
}