import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import { Route } from 'react-router';

import configureStore from './store/store';
import configureDevStore from './store/devStore';

import App from './containers/app';
import DevTools from './containers/devTools';

import Parent from './components/parent';
import Child from './components/child';

let Routes = (
    <ReduxRouter>
        <Route path="/" component={App}>
            <Route path="parent" component={Parent}>
                <Route path="child" component={Child} />
                <Route path="child/:id" component={Child} />
            </Route>
        </Route>
    </ReduxRouter>
);

let node = document.getElementById('app');
let store;
let component;

if (__DEV__ === 'true') {
    store = configureDevStore();
    component = (
        <Provider store={store}>
            <div>
                {Routes}
                <DevTools />
            </div>
        </Provider>
    );
} else {
    store = configureStore();
    component = (
        <Provider store={store}>
            {Routes}
        </Provider>
    );
}

ReactDOM.render(
    component
    , node);