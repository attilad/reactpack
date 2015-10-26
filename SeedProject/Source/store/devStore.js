import { createStore, compose } from 'redux';

import reducers from './reducers';
import DevTools from '../containers/devTools';

const finalCreateStore = compose(DevTools.instrument())(createStore);

export default function configureDevStore(initialState){
    const store = finalCreateStore(reducers, initialState);

    return store;
};