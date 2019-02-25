import { combineReducers } from 'redux';
import { amiibosReducer } from './amiibosReducer';
import { loadingReducer } from './loadingReducer';
import { errorReducer } from './errorReducer';
import { wishlistReducer } from './wishlistReducer';

const rootReducer = combineReducers({
  amiibos: amiibosReducer,
  isLoading: loadingReducer,
  error: errorReducer,
  wishlist: wishlistReducer
});

export default rootReducer;