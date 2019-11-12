import { combineReducers } from 'redux';
import characters from './characters';
import character from './character';

const appReducer = combineReducers({
    characters,
    character
});
  
export default appReducer;