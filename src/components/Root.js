import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EmailComposerPage from "../components/EmailComposerPage";
import NotFound from "./NotFound";

const Root = ({ store }) => (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={EmailComposerPage}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root;
