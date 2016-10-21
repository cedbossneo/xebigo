const { UPDATE_COUNTER, WATCH_COUNTER } = require('../../../common/constants/counter');
const RethinkDB = require('../r');

const watchCounter = action => dispatch => {
    RethinkDB.execute((r) => {
        return r.table("counter").get(1)
            .then((counter) => dispatch({ type: UPDATE_COUNTER, payload: counter.value}))
            .then(() => {
                return r.table("counter").get(1).changes({squash: true}).then((counter) => {
                    counter.each((err, doc) => {
                        if (err) return;
                        dispatch({
                            type: UPDATE_COUNTER,
                            payload: doc.new_val.value
                        });
                    });
                });
            });
    });
};

module.exports = {
    [WATCH_COUNTER]: watchCounter
};
