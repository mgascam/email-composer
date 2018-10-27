import React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import Root from "./components/Root";
import EmailComposerApp, { initialState } from './reducers';

import 'bootstrap/dist/css/bootstrap.css';
import './css/style.scss';

const history = createBrowserHistory()

const store = createStore(
    connectRouter(history)(EmailComposerApp),
    initialState,
    compose(
        applyMiddleware(routerMiddleware(history))
    )
);

render(<Root store={store} history={history}/>,
    document.getElementById('root')
);
