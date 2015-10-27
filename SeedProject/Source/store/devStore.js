import { createStore, applyMiddleware, compose } from 'redux';
import { reduxReactRouter } from 'redux-router';
import { createHistory } from 'history';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from './reducers';
import DevTools from '../containers/devTools';

const finalCreateStore = compose(
    applyMiddleware(thunk),
    reduxReactRouter({ createHistory }),
    DevTools.instrument()
)(createStore);

export default function configureDevStore(initialState){
    const store = finalCreateStore(reducers, initialState);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
};