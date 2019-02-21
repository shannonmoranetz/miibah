import { combineReducers } from 'redux';
import { amiibosReducer } from './amiibosReducer';

const rootReducer = combineReducers({
  amiibos: amiibosReducer
});

export default rootReducer;