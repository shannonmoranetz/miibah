import { combineReducers } from 'redux';
import { amiibosReducer } from './amiibosReducer';
import { loadingReducer } from './loadingReducer';
import { errorReducer } from './errorReducer';

const rootReducer = combineReducers({
  amiibos: amiibosReducer,
  isLoading: loadingReducer,
  error: errorReducer
});

export default rootReducer;