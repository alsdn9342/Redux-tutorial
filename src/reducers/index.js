import counterReducer from './counter';
import loggedReducer from './isLogged';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter : counterReducer, //naming reduce
    isLogged: loggedReducer
})

export default allReducers;