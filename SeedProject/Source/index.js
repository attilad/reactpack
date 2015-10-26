import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './store/reducers';
import App from './containers/app';

let store = createStore(reducers);

let node = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, node);
