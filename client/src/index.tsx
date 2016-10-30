import * as React from 'react';
import {render} from 'react-dom';
import configureStore from './redux/store/store';
import {Map} from 'immutable';
import { Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import {Provider} from 'react-redux';
import { browserHistory } from 'react-router';
import routes from './routes';

import './main.scss';

const store = configureStore(Map());
const history = syncHistoryWithStore(browserHistory, store, {
    selectLocationState (state) {
        return state.get('routing').toJS();
    }
});

render((
    <Provider store={store}>
        <Router history={history}>
            {routes}
        </Router>
    </Provider>
), document.getElementById('app'));
