import {combineReducers} from 'redux';
import user from './user';
import datepickerReducer from './datepickerReducer';
import cityReducer from './cityReducer'
import numpassengeriflyReducer from './numpassengeriflyReducer';
import numpassengereflyReducer from './numpassengereflyReducer'
const rootReducer = combineReducers({
    datepickerReducer,
    user,
    cityReducer,
    numpassengeriflyReducer,
    numpassengereflyReducer
  
})
export default rootReducer