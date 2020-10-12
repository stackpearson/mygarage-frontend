import {combineReducers} from 'redux';
import {vehicleReducer} from './vehicleReducer';
import {serviceReducer} from './serviceReducer';

export const rootReducer = combineReducers({
    vehicleReducer,
    serviceReducer
});