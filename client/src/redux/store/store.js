import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import { rethinkMiddleware, setupRealtime } from './realtime'

const createStoreWithMiddleware = applyMiddleware(thunk, rethinkMiddleware)(createStore);

/* istanbul ignore next */
export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    setupRealtime(store);
    return store;
}