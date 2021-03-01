import { combineReducers } from 'redux';
import authReducer from './authReducer';
import mapReducer from './mapReducer';
import cityDetailReducer from './cityDetailReducer';

export default combineReducers({
    auth: authReducer,
    map: mapReducer,
    city: cityDetailReducer,
});