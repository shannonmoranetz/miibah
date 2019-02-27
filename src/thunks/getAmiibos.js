import { setAmiibos, searchAmiibo, setLoading, setError } from '../actions';
import { fetchItems } from '../utils/api';

export const getAmiibos = (url) => {
  return async dispatch => {
    try {
      dispatch(setLoading(true));
      const amiibos = await fetchItems(url);
      dispatch(setLoading(false));
      if (url.length > 38) {
        dispatch(searchAmiibo(amiibos));
      } else {
        dispatch(setAmiibos(amiibos));
      }
    } catch (error) {
      dispatch(setError(error));
      dispatch(setLoading(false));
    }
  };
};