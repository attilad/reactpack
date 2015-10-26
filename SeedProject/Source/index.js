import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/store';
import configureDevStore from './store/devStore';

import App from './containers/app';
import DevTools from './containers/devTools';

let node = document.getElementById('app');
let store;
let component;

if (__DEV__ === 'true') {
    store = configureDevStore();
    component = (
        <Provider store={store}>
            <div>
                <App />
                <DevTools />
            </div>
        </Provider>
    );
} else {
    store = configureStore();
    component = (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

ReactDOM.render(
    component
    , node);