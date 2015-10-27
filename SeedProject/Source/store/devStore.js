import { createStore, applyMiddleware, compose } from 'redux';
import { reduxReactRouter } from 'redux-router';
import { createHistory } from 'history';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducer from '../reducers/reducers';
import DevTools from '../containers/devTools';

const finalCreateStore = compose(
    applyMiddleware(thunk),
    reduxReactRouter({ createHistory }),
    DevTools.instrument()
)(createStore);

export default function configureDevStore(initialState){
    const store = finalCreateStore(reducer, initialState);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers/reducers.js', () => {
            const nextRootReducer = require('../reducers/reducers.js');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
};