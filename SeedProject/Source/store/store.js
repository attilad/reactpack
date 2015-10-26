import { createStore, compose } from 'redux';
import { reduxReactRouter } from 'redux-router';
import { createHistory } from 'history';

import reducers from './reducers';

const finalCreateStore = compose(
    reduxReactRouter({ createHistory })
)(createStore);

export default function configureStore(initialState){
    const store = finalCreateStore(reducers, initialState);
    return store;
};