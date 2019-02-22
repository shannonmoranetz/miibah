export const SET_AMIIBOS = 'SET_AMIIBOS';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';

export const setAmiibos = amiibos => ({
  type: SET_AMIIBOS,
  amiibos
});

export const setLoading = isLoading => ({
  type: SET_LOADING,
  isLoading
});

export const setError = error => ({
  type: SET_ERROR,
  error
});

