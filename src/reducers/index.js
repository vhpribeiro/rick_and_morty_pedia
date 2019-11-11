import { combineReducers } from 'redux';
import characters from './characters';

const appReducer = combineReducers({
    characters
});
  
export default appReducer;