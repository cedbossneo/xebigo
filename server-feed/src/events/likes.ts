import { UPDATE_LIKES_COUNT, WATCH_LIKES } from '../../../common/constants/likes';
import RethinkDB from '../r';
import {ChangeSet} from "rethinkdb";

export interface LikesModel {
    id: number
    value: number
}
const watchLikes = action => dispatch => {
    RethinkDB.execute((r, conn) => {
        return r.table<LikesModel>("likes").get(1).run(conn)
            .then((counter) => dispatch({ type: UPDATE_LIKES_COUNT, payload: counter.value}))
            .then(() => {
                return r.table<LikesModel>("likes").get(1).changes({squash: true}).run(conn).then((cursor) => {
                    cursor.each((err, doc: ChangeSet<LikesModel, LikesModel>) => {
                        if (err) return;
                        dispatch({
                            type: UPDATE_LIKES_COUNT,
                            payload: doc.new_val.value
                        });
                    });
                });
            });
    });
};

export default {
    [WATCH_LIKES]: watchLikes
};
