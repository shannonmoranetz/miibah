import { setAmiibos, setLoading, setError } from '../actions';
import { fetchItems } from '../utils/api';

const url = 'http://www.amiiboapi.com/api/amiibo/';

export const getAmiibos = () => {
  return async dispatch => {
    try {
      dispatch(setLoading(true));
      const amiibos = await fetchItems(url);
      dispatch(setLoading(false));
      dispatch(setAmiibos(amiibos));
    } catch (error) {
      dispatch(setError(error));
      // dispatch(setLoading(false));
    }
  };
};