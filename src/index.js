import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Home } from './templates'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import configureStore from './store';
import initialState from './reducers/initialState'

const store = configureStore(initialState);
const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <Home />
    </Provider>
    , rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
