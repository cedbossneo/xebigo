import {combineReducers} from 'redux-immutable';

import counter from 'redux/modules/counter';
import routing from 'redux/modules/routing';

export default combineReducers({
    counter, routing
});
