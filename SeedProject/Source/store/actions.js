import fetch from 'isomorphic-fetch';

/* Action Types */

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const REQUEST_VALUES = 'REQUEST_VALUES';
export const RECEIVE_VALUES = 'RECEIVE_VALUES';
export const INVALIDATE_VALUES = 'INVALIDATE_VALUES';

/* Action Creators */

export function increment() {
    return { type: INCREMENT };
}

export function decrement() {
    return { type: DECREMENT };
}

function requestValues() {
    return { type: REQUEST_VALUES }
}

export function invalidateValues() {
    return { type: INVALIDATE_VALUES }
}

function receiveValues(json) {
    return { 
        type: RECEIVE_VALUES,
        values: json
    }
}

function fetchValues() {
    return dispatch => {
        dispatch(requestValues());
        return fetch('/api/values/')
            .then(response => response.json())
            .then(json => dispatch(receiveValues(json)));
    };
}

function shouldFetchValues(state) {
    const values = state.values;
    if (!values) {
        return true;
    }
    if(values.isFetching) {
        return false;
    }
    if(values.items.length == 0) {
        return true;
    }
    return values.didInvalidate;
}

export function fetchValuesIfNeeded() {
    return (dispatch, getState) => {
        if(shouldFetchValues(getState())) {
            return dispatch(fetchValues());
        }
    };
}