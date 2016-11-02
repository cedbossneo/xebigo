import { UPDATE_COUNTER, WATCH_COUNTER } from '../../../common/constants/counter';
import RethinkDB from '../r';
import {ChangeSet} from "rethinkdb";

export interface CounterModel {
    id: number
    value: number
}
const watchCounter = action => dispatch => {
    RethinkDB.execute((r, conn) => {
        return r.table<CounterModel>("counter").get(1).run(conn)
            .then((counter) => dispatch({ type: UPDATE_COUNTER, payload: counter.value}))
            .then(() => {
                return r.table<CounterModel>("counter").get(1).changes({squash: true}).run(conn).then((cursor) => {
                    cursor.each((err, doc: ChangeSet<CounterModel, CounterModel>) => {
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

export default {
    [WATCH_COUNTER]: watchCounter
};
