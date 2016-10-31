import * as rethink from 'rethinkdb';
import {Connection} from "rethinkdb";
import {RDb} from "rethinkdb";
import {db} from "rethinkdb";

class RethinkDB {
    private conn: Connection;

    execute (cb: (r: RDb, conn: Connection) => any) {
        return cb(db("xebigo"), this.conn)
    }

    connect () {
        rethink.connect({ host: process.env["RETHINKDB_PROXY_SERVICE_HOST"] || 'localhost', port: process.env["RETHINKDB_PROXY_SERVICE_PORT"] || 28015}).then((conn) => {
            this.conn = conn
        });
    }
}

const instance = new RethinkDB();
export default instance;
