import addAmiibos from '../actions';
import fetchItems from '../utils/api';

const url = 'http://www.amiiboapi.com/api/';

export const fetchAmiibos = () => {
  return async dispatch => {
    try {
      const amiibos = await fetchItems(url);
      dispatch(addAmiibos(amiibos));
    } catch (error) {
      // dispatch(setError('Error fetching note'));
      throw Error;
    }
  };
};