import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import {INCREMENT, DECREMENT} from './actions'

function counter(state = 0, action = {}) {
    switch(action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

const reducers = combineReducers({ counter, router: routerStateReducer });

export default reducers;

