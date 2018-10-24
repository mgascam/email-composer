import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EmailComposer from "./EmailComposer";
import NotFound from "./NotFound";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={EmailComposer}/>
            <Route  component={NotFound}/>
        </Switch>
    </BrowserRouter>
);

export default Router;
