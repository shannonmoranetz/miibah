import { addAmiibos } from '../actions';
import { fetchItems } from '../utils/api';

// const url = 'http://www.amiiboapi.com/api/amiibo/?';
const url = 'http://www.amiiboapi.com/api/amiibo/?character=Mewtwo';

export const getAmiibos = () => {
  return async dispatch => {
    try {
      const amiibos = await fetchItems(url);
      dispatch(addAmiibos(amiibos));
    } catch (error) {
      throw Error;
    }
  };
};