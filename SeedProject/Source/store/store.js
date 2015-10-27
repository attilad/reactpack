import { createStore, applyMiddleware, compose } from 'redux';
import { reduxReactRouter } from 'redux-router';
import { createHistory } from 'history';
import thunkMiddleware from 'redux-thunk';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

const finalCreateStore = compose(
    reduxReactRouter({ createHistory })
)(createStoreWithMiddleware);

export default function configureStore(initialState){
    const store = finalCreateStore(reducers, initialState);
    return store;
};