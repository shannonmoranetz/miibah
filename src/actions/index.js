export const SET_AMIIBOS = 'SET_AMIIBOS';
export const SEARCH_AMIIBO = 'SEARCH_AMIIBO';
export const ADD_AMIIBO = 'ADD_AMIIBO';
export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const ADD_TO_COLLECTED = 'ADD_TO_COLLECTED';
export const REMOVE_FROM_COLLECTED = 'REMOVE_FROM_COLLECTED';
export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';
export const GET_WISHLIST = 'GET_WISHLIST';
export const GET_COLLECTED = 'GET_COLLECTED';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';

export const setAmiibos = amiibos => ({
  type: SET_AMIIBOS,
  amiibos
});

export const addAmiibo = amiibos => ({
  type: ADD_AMIIBO,
  amiibos
});

export const searchAmiibo = searchedAmiibo => ({
  type: SEARCH_AMIIBO,
  searchedAmiibo
});

export const addToWishlist = amiibo => ({
  type: ADD_TO_WISHLIST,
  amiibo
});

export const addToCollected = amiibo => ({
  type: ADD_TO_COLLECTED,
  amiibo
});

export const removeFromCollected = amiibo => ({
  type: REMOVE_FROM_COLLECTED,
  amiibo
});

export const removeFromWishlist = amiibo => ({
  type: REMOVE_FROM_WISHLIST,
  amiibo
});

export const getWishlist = wishlist => ({
  type: GET_WISHLIST,
  wishlist
});

export const getCollected = collected => ({
  type: GET_COLLECTED,
  collected
});

export const setLoading = isLoading => ({
  type: SET_LOADING,
  isLoading
});

export const setError = error => ({
  type: SET_ERROR,
  error
});

