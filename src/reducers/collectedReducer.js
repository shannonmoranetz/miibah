import { ADD_TO_COLLECTED, GET_COLLECTED, REMOVE_FROM_COLLECTED } from '../actions';

export function collectedReducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_COLLECTED:
      let index = state.findIndex(collectedItem => collectedItem.name == action.amiibo.name);
      if (index == -1) {
        return [...state, action.amiibo];
      } else {
        return state;
      }
    case REMOVE_FROM_COLLECTED:
      let removedCollection = state.filter(collectedItem => collectedItem.name !== action.amiibo.name);
      return removedCollection;
    case GET_COLLECTED:
      return action.collected
    default:
      return state;
  }
}