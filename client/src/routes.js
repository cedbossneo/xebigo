import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AppContainer from 'containers/app/AppContainer';
import CounterContainer from 'containers/counter/CounterContainer';


const routes = (
    <Route path='/' component={AppContainer}>
        <IndexRoute component={CounterContainer}/>
        <Route path="teams" component={CounterContainer} />
    </Route>
);

export default routes;

