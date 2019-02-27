import { combineReducers } from 'redux';
import { amiibosReducer } from './amiibosReducer';
import { loadingReducer } from './loadingReducer';
import { errorReducer } from './errorReducer';
import { wishlistReducer } from './wishlistReducer';
import { collectedReducer } from './collectedReducer';
import { searchReducer } from './searchReducer';

const rootReducer = combineReducers({
  amiibos: amiibosReducer,
  searchedAmiibo: searchReducer,
  isLoading: loadingReducer,
  error: errorReducer,
  wishlist: wishlistReducer,
  collected: collectedReducer
});

export default rootReducer;