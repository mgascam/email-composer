import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import PropTypes from 'prop-types';
import EmailComposerPage from "../components/EmailComposerPage";
import SendEmailPage from "../components/SendEmailPage";
import NotFound from "./NotFound";

const Root = ({ store, history }) => (
    <Provider store={store}>
        <ConnectedRouter history={ history }>
            <Switch>
                <Route exact path="/" component={EmailComposerPage}/>
                <Route exact path="/send-email" component={SendEmailPage}/>
                <Route component={NotFound}/>
            </Switch>
        </ConnectedRouter>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root;
