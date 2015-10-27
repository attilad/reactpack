import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import { INCREMENT, DECREMENT, REQUEST_VALUES, RECEIVE_VALUES, INVALIDATE_VALUES } from './actions';

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

function values(state = { 
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) {
    switch(action.type) {
        case REQUEST_VALUES:
            return Object.assign({}, state, { isFetching: true });
        case INVALIDATE_VALUES:
            return Object.assign({}, state, { didInvalidate: true });
        case RECEIVE_VALUES:
            return Object.assign({}, state, { isFetching: false, didInvalidate: false, items: action.values });
        default:
            return state;
    }
}

const reducers = combineReducers({ counter, values, router: routerStateReducer });

export default reducers;