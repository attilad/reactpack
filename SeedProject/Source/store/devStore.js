import { createStore, compose } from 'redux';
import { reduxReactRouter } from 'redux-router';
import { createHistory } from 'history';

import reducers from './reducers';
import DevTools from '../containers/devTools';

const finalCreateStore = compose(
    reduxReactRouter({ createHistory }),
    DevTools.instrument()
)(createStore);

export default function configureDevStore(initialState){
    const store = finalCreateStore(reducers, initialState);

    return store;
};