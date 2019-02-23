import { SET_AMIIBOS } from '../actions';
import ids from 'short-id';

export function amiibosReducer(state = [], action) {
  switch (action.type) {
    case SET_AMIIBOS:
      let newest = action.amiibos.slice(-20).reverse();
      newest.forEach(amiibo => {
        amiibo.id = ids.generate()
      });
      return newest;
    default:
      return state;
  }
}