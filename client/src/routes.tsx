import * as React from 'react';
import { Route, IndexRoute } from 'react-router';
import AppContainer from 'containers/app/AppContainer';
import LikesContainer from 'containers/likes/LikesContainer';

const routes = (
    <Route path='/' component={AppContainer}>
        <IndexRoute component={LikesContainer}/>
        <Route path="likes" component={LikesContainer} />
    </Route>
);

export default routes;

