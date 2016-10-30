import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import { rethinkMiddleware, setupRealtime } from './realtime'

const createStoreWithMiddleware = applyMiddleware(thunk as Redux.Middleware, rethinkMiddleware as Redux.Middleware)(createStore);

/* istanbul ignore next */
export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);
    setupRealtime(store);
    return store;
}