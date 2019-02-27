import { SEARCH_AMIIBO } from '../actions';

export function searchReducer(state = [], action) {
  switch (action.type) {
    case SEARCH_AMIIBO:
      return action.searchedAmiibo;
    default:
      return state;
  }
}