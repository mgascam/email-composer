import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import Root from "./components/Root";
import EmailComposerApp from './reducers';

import 'bootstrap/dist/css/bootstrap.css';
import './css/style.scss';

const store = createStore(EmailComposerApp);

render(<Root store={store} />,
    document.getElementById('root')
);
