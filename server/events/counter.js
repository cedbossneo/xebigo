const { UPDATE_COUNTER, WATCH_COUNTER } = require('../../common/constants/counter');
const {Counter, r} = require('../thinky');

const watchCounter = action => dispatch => {
    return Counter.get(1).run()
        .then((counter) => dispatch({ type: UPDATE_COUNTER, payload: counter.counter}))
        .then(() => {
            return Counter.get(1).changes({squash: true}).then((counter) => {
                counter.on('change', (newDoc) => {
                    dispatch({
                        type: UPDATE_COUNTER,
                        payload: newDoc.counter
                    });
                });
            });
        });
};

module.exports = {
    [WATCH_COUNTER]: watchCounter
};
