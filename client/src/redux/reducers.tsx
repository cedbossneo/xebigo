import {combineReducers} from 'redux-immutable';

import likes from 'redux/modules/likes';
import routing from 'redux/modules/routing';

export default combineReducers({
    likes, routing
});
