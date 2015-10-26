import { createStore, compose } from 'redux';

import reducers from './reducers';

const finalCreateStore = compose()(createStore);

export default function configureStore(initialState){
    const store = finalCreateStore(reducers, initialState);
    return store;
};