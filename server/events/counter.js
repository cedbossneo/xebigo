const { UPDATE_COUNTER, WATCH_COUNTER } = require('../../common/constants/counter');
const {Counter, r} = require('../thinky');

const watchCounter = action => dispatch => {
    return Counter.get(1).run()
        .then((counter) => dispatch({ type: UPDATE_COUNTER, payload: counter.counter}))
        .then(() => Counter.get(1).changes().run())
        .then((cursor) => {
            cursor.each((error, doc) => {
                if (error) return;
                dispatch({
                    type: UPDATE_COUNTER,
                    payload: doc.counter
                }, cursor);
            });
        });
};

module.exports = {
    [WATCH_COUNTER]: watchCounter
};
