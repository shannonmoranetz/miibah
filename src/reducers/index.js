import { combineReducers } from 'redux';
import { amiibosReducer } from './amiibosReducer';
import { loadingReducer } from './loadingReducer';

const rootReducer = combineReducers({
  amiibos: amiibosReducer,
  isLoading: loadingReducer
});

export default rootReducer;