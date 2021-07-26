import { combineReducers } from 'redux';
import fetchDogReducer from './fetchDogReducer';

const rootReducer = combineReducers({
  fetchDogReducer
});

export default rootReducer;
