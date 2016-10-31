"use strict";
const counter_1 = require("../../../common/constants/counter");
const rethinkdb_1 = require("../rethinkdb");
const watchCounter = action => dispatch => {
    rethinkdb_1.default.execute((r, conn) => {
        return r.table("counter").get(1).run(conn)
            .then((counter) => dispatch({ type: counter_1.UPDATE_COUNTER, payload: counter.value }))
            .then(() => {
            return r.table("counter").get(1).changes({ squash: true }).run(conn).then((counter) => {
                counter.each((err, doc) => {
                    if (err)
                        return;
                    dispatch({
                        type: counter_1.UPDATE_COUNTER,
                        payload: doc.new_val.value
                    });
                });
            });
        });
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    [counter_1.WATCH_COUNTER]: watchCounter
};
//# sourceMappingURL=counter.js.map