import React from 'react';
import { render } from 'react-dom';

import Router from "./components/Router";

import 'bootstrap/dist/css/bootstrap.css';
import './css/style.scss';

render(<Router />,
    document.getElementById('root')
);
