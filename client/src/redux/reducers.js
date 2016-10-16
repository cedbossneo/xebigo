import {combineReducers} from 'redux-immutable';

import counter from 'modules/counter';
import routing from 'modules/routing';

export default combineReducers({
    counter, routing
});
